import React from 'react';

import Constants from 'expo-constants';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import { bookArray, compareAlpha } from './books';
import Row from './Row'
import AddBookForm from './addBook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});


export default class App extends React.Component {

  constructor (props) {
    super(props)
    //console.log(bookArray)
  }

  state = {
    showBooks : false,
    showForm : false,
    bookArray: bookArray,
  }

  addBook = newBook => {
    this.setState(prevState => ({showForm: false, bookArray: [...prevState.bookArray, newBook]}))
  }

  toggleBooks = () => {
    this.setState(prevState => ({showBooks: !prevState.showForm}))
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showBooks}))
  }

  sort = () => {
    this.setState(prevState => ({bookArray: [...prevState.bookArray].sort(compareAlpha)
    }))
  }

  renderItem = (obj) => <Row {...obj.item}/>

  render() {
    if (this.state.showForm) {return <AddBookForm onSubmit={this.addBook}/>}
    return(
      <View style={styles.container}>
        <Button title="add book" onPress={this.toggleForm}/>
        <FlatList renderItem = {this.renderItem} data = {this.state.bookArray}/>
      </View>
    )  
  }
}

