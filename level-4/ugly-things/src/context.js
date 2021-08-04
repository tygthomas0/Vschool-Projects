import React from "react"
const {Provider, Consumer} = React.createContext()
const axios = require("axios")

class ThemeContextProvider extends React.Component {
    state = {
        uglyThings: [],
        title: "",
        description: "",
        imgUrl: "",
        editing: false,
        editingID: ""
    }   

    componentDidMount() {
        this.getInfo()
    }

    componentDidUpdate() {
        this.getInfo()
    }

    submitInfo = (uglyThing) => {
        if (this.state.editing) {
            axios.put(`https://api.vschool.io/tylerthomas/thing/${this.state.editingID}`, uglyThing)
                .then(data => console.log(data))
                .catch(err => console.log(err))
            this.setState({ editing: false })
        }
        else {
            axios.post("https://api.vschool.io/tylerthomas/thing/", uglyThing)
                .then(data => {
                    console.log(data)
                    this.setState({
                        title: "",
                        description: "",
                        imgUrl: ""
                    })
                })
                .catch(err => console.log(err))
        }
        
    }

    getInfo = () => {
        axios.get("https://api.vschool.io/tylerthomas/thing/")
            .then(data => this.setState({uglyThings: data.data}))
            .catch(err => console.log(err))
    }

    editInfo = (id) => {
        axios.get(`https://api.vschool.io/tylerthomas/thing/${id}`)
            .then(data => this.setState({
                title: data.data.title,
                description: data.data.description,
                imgUrl: data.data.imgUrl,
                editingID: data.data._id,
                editing: true
            }))
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    }

    deleteInfo = (id) => {
        axios.delete(`https://api.vschool.io/tylerthomas/thing/${id}`)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                submitInfo: this.submitInfo,
                getInfo: this.getInfo,
                editInfo: this.editInfo,
                deleteInfo: this.deleteInfo,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}

//themecontextprovider will hold the array, and App will consume the array and create cards out of the array by mapping over it
//state array will probably hold an array of objects => form will setState by pushing an object of information to prevState