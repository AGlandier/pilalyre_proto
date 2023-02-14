import React from 'react'
import {TextInput, View, Button, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default class AddBookForm extends React.Component {

    static propTypes = {
        addBook : PropTypes.func,
    }

    state = {
        title: '',
        author: '',
        alpha: '',
    }

    handleTitleChange = title => {
        this.setState({title})
    }

    handleAuthorChange = author => {
        this.setState({author})
    }

    handleAlphaChange = alpha => {
        this.setState({alpha})
    }

    render() {
        return(
            <View style = {{paddingTop: 20}}>
                <TextInput style = {styles.input} onChangeText = {this.handleTitleChange} value = {this.state.title}/>
                <TextInput style = {styles.input} onChangeText = {this.handleAuthorChange} value = {this.state.author}/>
                <TextInput style = {styles.input} onChangeText = {this.handleAlphaChange} value = {this.state.alpha}/>
                <Button title = 'Add Book' />
            </View>
        )
    }
}