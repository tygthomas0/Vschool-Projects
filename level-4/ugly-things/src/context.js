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
        showForm: false,
        editingID: "",
        addButtonText: "Add"
    }   

    componentDidMount() {
        this.getInfo()
    }

    submitInfo = (uglyThing) => {
        if (this.state.editing) {
            axios.put(`https://api.vschool.io/tylerthomas/thing/${this.state.editingID}`, uglyThing)
                .then(data => this.setState(prevState => { return {
                    editing: false,
                    uglyThings: prevState.uglyThings.map(thing => { 
                        return thing._id === this.state.editingID ? data.data : thing} ),
                    title: "",
                    description: "",
                    imgUrl: ""
                }})) 
                .catch(err => console.log(err))
            
        }
        else {
            axios.post("https://api.vschool.io/tylerthomas/thing/", uglyThing)
                .then(data => {
                    console.log(data)
                    this.setState(prevState => { return {
                        uglyThings: [...prevState.uglyThings, data.data],
                        title: "",
                        description: "",
                        imgUrl: ""
                    }})
                })
                .catch(err => console.log(err))
        }
        this.toggleForm()
    }

    getInfo = () => {
        axios.get("https://api.vschool.io/tylerthomas/thing/")
            .then(data => this.setState({uglyThings: data.data}))
            .catch(err => console.log(err))
    }

    editInfo = (id) => {
        this.toggleForm()
        axios.get(`https://api.vschool.io/tylerthomas/thing/${id}`)
            .then(data => this.setState({
                title: data.data.title,
                description: data.data.description,
                imgUrl: data.data.imgUrl,
                editingID: data.data._id,
                editing: true,
            }))
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    }

    deleteInfo = (id) => {
        axios.delete(`https://api.vschool.io/tylerthomas/thing/${id}`)
            .then(data => 
                this.setState(prevState => { return {
                    uglyThings: prevState.uglyThings.filter(thing => {
                        console.log(thing._id, id)
                        return thing._id !== id })
                }}))
            .catch(err => console.log(err))
    }

    toggleForm = () => {
        var newMessage;
        if (this.state.addButtonText === "Add") {
            newMessage = "Cancel"
        }
        else {
            newMessage = "Add"
        }
        this.setState(prevState => { return {
            showForm: !prevState.showForm,
            addButtonText: newMessage,
            title: "",
            description: "",
            imgUrl: ""
        }})
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
                showForm: this.state.showForm,
                addButtonText: this.state.addButtonText,
                submitInfo: this.submitInfo,
                getInfo: this.getInfo,
                editInfo: this.editInfo,
                deleteInfo: this.deleteInfo,
                handleChange: this.handleChange,
                toggleForm: this.toggleForm
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}