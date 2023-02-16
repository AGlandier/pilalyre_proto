import React from 'react'
import {TextInput, View, Button, StyleSheet, KeyboardAvoidingView} from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 5,
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
})

export default class AddBookForm extends React.Component {

    static propTypes = {
        addBook : PropTypes.func,
    }

    state = {
        title: '',
        author: '',
        alpha: '',
        isFormValid: false,
    }

    handleSubmit = () => {
        if (this.state.alpha.length >= 1 && this.state.title.length >= 2 && this.state.author.length >= 3) {
            this.props.onSubmit({...this.state})
        }
    }

    handleTitleChange = title => {
        this.setState({title}, this.validateForm)
    }

    handleAuthorChange = author => {
        this.setState({author}, this.validateForm)
    }

    handleAlphaChange = alpha => {
        this.setState({alpha}, this.validateForm)
    }

    validateForm = () => {
        if (this.state.alpha.length >= 1 && this.state.title.length >= 2 && this.state.author.length >= 3) {
            this.setState({isFormValid : true})
        } else {
            this.setState({isFormValid : false})
        }
    }

    render() {
        return(
            <KeyboardAvoidingView style = {styles.container} behavior = "padding">
                <TextInput style = {styles.input} onChangeText = {this.handleTitleChange} value = {this.state.title} placeholder = 'Title'/>
                <TextInput style = {styles.input} onChangeText = {this.handleAuthorChange} value = {this.state.author} placeholder = 'Author'/>
                <TextInput style = {styles.input} onChangeText = {this.handleAlphaChange} value = {this.state.alpha} placeholder = 'Alpha'/>
                <Button title = 'Add Book' onPress = {this.handleSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }
}