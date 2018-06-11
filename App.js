import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/common/header";
import Footer from "./components/common/footer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Text>Zwestein</Text>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
