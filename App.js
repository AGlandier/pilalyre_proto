import React from 'react';

import Constants from 'expo-constants';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import { bookArray, compareAlpha } from './books';
import Row from './Row'

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
    bookArray: bookArray,
  }

  toggleBooks = () => {
    this.setState(prevState => ({showBooks: !prevState.showBooks}))
  }

  sort = () => {
    this.setState(prevState => ({bookArray: [...prevState.bookArray].sort(compareAlpha)
    }))
  }

  renderItem = (obj) => <Row {...obj.item}/>

  render() {
    return(
      <View style={styles.container}>
        <Button title="toggle books" onPress={this.toggleBooks}/>
        <Button title="sort books" onPress={this.sort}/>
        {this.state.showBooks && (
        <FlatList 
        renderItem = {this.renderItem}
        data = {this.state.bookArray}
        />
        )}
      </View>
    )  
  }
}

