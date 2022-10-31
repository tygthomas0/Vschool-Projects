import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import TodoList from './TodoList.js'
import Todo from './Todo.js'
import playerImage from "../gameComponents/scarfy.png"
import enemyImage from "../gameComponents/12_nebula_spritesheet.png"
import backgroundImage1 from "../gameComponents/far-buildings.png"
import backgroundImage2 from "../gameComponents/back-buildings.png"
import backgroundImage3 from "../gameComponents/foreground.png"
import { time } from '@tensorflow/tfjs'

export default function Public(){
  const {token, addScore, setUserState, addScoreWithPrevScore, ...userState} = useContext(UserContext)

  let score = 0

  useEffect(() => {
    window.addEventListener("load", function(){
      const canvas = document.getElementById("canvas1")
      const ctx = canvas.getContext("2d")
      canvas.width = 512
      canvas.height = 380
      let enemies = []
      
      let gameOver = false
  
      class InputHandler {
          constructor() {
              this.keys = [];
              window.addEventListener("keydown", e => {
                  if (e.key === "w" && this.keys.indexOf(e.key) === -1) {
                      this.keys.push(e.key)
                  }
              })
              window.addEventListener("keyup", e => {
                if (e.key === "w" && this.keys.indexOf(e.key) > -1) {
                    this.keys.splice(this.keys.indexOf(e.key), 1)
                }
            })
          }
      }
  
      class Player {
          constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth
            this.gameHeight = gameHeight
            this.image = document.getElementById("playerImage")
            this.width = this.image.width / 6.0
            this.height = this.image.height
            this.x = gameWidth / 3 - this.width
            this.y = gameHeight - this.height
            this.frameX = 0;
            this.maxFrame = 5
            this.fps = 20
            this.frameTimer = 0
            this.frameInterval = 1000/this.fps
            this.frameY = 0;
            this.vy = 0;
            this.gravity = 1;
          }
          draw(context) {
            context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height)
          }
          update(input, deltaTime, enemies) {
            //collision detection
            enemies.forEach(enemy => {
              const dx = (enemy.x + enemy.width/2) - (this.x + this.width/2)
              const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2)
              const distance = Math.sqrt(dx*dx + dy*dy)
              if (distance < enemy.width/2 + this.width/2) {
                gameOver = true
              }
            })

            //animation
            if (this.frameTimer > this.frameInterval && this.onGround()) {
              if (this.frameX >= this.maxFrame) {
                this.frameX = 0
              }
              else {
                this.frameX++
              }
              this.frameTimer = 0
            }
            else {
              this.frameTimer += deltaTime
            }

            //jump input
            if (input.keys.indexOf("w") > -1 && this.onGround()) {
              this.vy -= 20
            }

            //handle jump and gravity
            this.y += this.vy
            if (!this.onGround()) {
              this.vy += this.gravity
            }
            else {
              this.vy = 0
            }

            if (this.y > this.gameHeight - this.height) {
              this.y = this.gameHeight - this.height
            }

          }
          onGround() {
            return this.y >= this.gameHeight - this.height
          }
      }
  
      class Background {
          constructor(gameWidth, gameHeight, source, speed) {
            this.gameWidth = gameWidth
            this.gameHeight = gameHeight
            this.image = document.getElementById(source)
            this.x = 0
            this.y = 0
            this.width = gameWidth
            this.height = gameHeight
            this.speed = speed
          }
          draw(context) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
            context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
          }
          update() {
            this.x -= this.speed;
            if (this.x < 0 - this.width) {
              this.x = 0
            }
          }
      }
  
      class Enemy {
          constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth
            this.gameHeight = gameHeight
            this.image = document.getElementById("enemyImage")
            this.width = this.image.width / 8.0
            this.height = this.image.height / 8.0
            this.x = this.gameWidth
            this.y = this.gameHeight - this.height
            this.frameX = 0
            this.maxFrame = 7
            this.fps = 20
            this.frameTimer = 0
            this.frameInterval = 1000/this.fps
            this.frameY = 0
            
            this.speed = 7
            this.markedForDeletion = false
          }
          draw(context) {
            context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height)
          }
          update(deltaTime) {
            if (this.frameTimer > this.frameInterval) {
              if (this.frameX >= this.maxFrame) {
                this.frameX = 0
              }
              else {
                this.frameX++
              }
              this.frameTimer = 0
            }
            else {
              this.frameTimer += deltaTime
            }
            this.x -= this.speed
            if (this.x < 0 - this.width) {
              this.markedForDeletion = true
            }
          }
      }
  
      function handleEnemies(deltaTime) {
          if (enemyTimer > enemyInterval + randomEnemyInterval + (Math.random() * 1000)) {
            enemies.push(new Enemy(canvas.width, canvas.height))
            enemyTimer = 0
          }
          else {
            enemyTimer += deltaTime
          }
          
          enemies.forEach(enemy => {
            enemy.draw(ctx)
            enemy.update(deltaTime)
          })
          enemies = enemies.filter(enemy => !enemy.markedForDeletion)
      }
  
      function displayStatusText(context) {
        context.fillStyle = 'white'
        context.font = '40px Helvetica'
        context.fillText('Score: ' + score, 20, 50)
        if (gameOver) {
          context.textAlign = 'center'
          context.fillStyle = 'white'
          context.fillText('GAME OVER', canvas.width/2, 200)
        }
      }
  
      const input = new InputHandler();
      const player = new Player(canvas.width, canvas.height)
      const farBackground = new Background(canvas.width, canvas.height, "backgroundImage1", 1)
      const midBackground = new Background(canvas.width, canvas.height, "backgroundImage2", 2)
      const nearbackground = new Background(canvas.width, canvas.height, "backgroundImage3", 3)

      let lastTime = 0
      let enemyTimer = 0
      let enemyInterval = 500
      let randomEnemyInterval = Math.random() * 1000 + 500

      function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        farBackground.draw(ctx)
        farBackground.update()
        midBackground.draw(ctx)
        midBackground.update()
        nearbackground.draw(ctx)
        nearbackground.update()
        player.draw(ctx)
        player.update(input, deltaTime, enemies)
        handleEnemies(deltaTime)
        score += Math.round(7 * deltaTime / 100);
        displayStatusText(ctx)

        
        /*
        if (token && gameOver) {
          addScore(score)
        }
        else {
          console.log("User not logged in, score not saved")
        }
        */

        if (!gameOver) {
          requestAnimationFrame(animate)
        }
        if (gameOver && token) {
          const scoreJSONObj = JSON.parse(localStorage.getItem("dasherHighScore"))
          console.log("scoreJSONObj: ", scoreJSONObj)
          console.log("scoreJSONObj.length ", scoreJSONObj.length)
          console.log("scoreJSONObj.score: ", scoreJSONObj.score)
          setUserState(prevState => ({
            ...prevState,
            tempScore: score
          }))
          const pack = {score: score, username: username}
          if (scoreJSONObj.length === 0) {
            addScore(pack)
          }
          else {
            addScoreWithPrevScore(pack/*, scoreJSONObj[0].score/*/)
          }
          /*
          if (scoreJSONObj[0].score > 0) {
            addScoreWithPrevScore({score}/*, scoreJSONObj[0].score/)
          }
          else {
            addScore({score})
          }
          //const temp2Score = scoreJSONObj[0].score
          */
          
        }
        
      }
      animate(0)
      
    })
  }, [])

  //write another useeffect that triggers on score change
  //useEffect(() => {
  //  addScore(score)
  //}, [tempScore])

  const {user} = userState
  const username = user.username

  return (
    <div className="public">
        <canvas id="canvas1"></canvas>
        <img id="playerImage" src={playerImage} />
        <img id="enemyImage" src={enemyImage} />
        <img id="backgroundImage1" src={backgroundImage1} />
        <img id="backgroundImage2" src={backgroundImage2} />
        <img id="backgroundImage3" src={backgroundImage3} />
    </div>
  )
}