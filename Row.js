import React from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Constants.statusBarHeight,
    },
  });

const Row = props => (
    <View>
      <Text style = {styles.container}>{props.title} - {props.author}</Text>
    </View>
  )

  export default Row