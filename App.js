import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20
          }}
        >
          Hello bladers...is ma ap logon na kuch b new install nai karna...each
          and everything is installed!! And colors ki file defined ha
          src->components->themes->colors.js ap logon na jahan b color use karna
          hua to import karwa kar opar by name vo color access kar lena r in 3
          colors k ilawa koi color use ho raha hua to osay inline kar k kar dena
          jese pehlay kartay hain...Baki jo b page bananay hain vo components k
          folder ma hi banany hain like signup page ha to components k andar
          signup ka pehlay folder bana kar oskay andar signup.js ki file banana
          vese direct na anaaay waaah bannatay anaa matlab k direct components
          ma hi .js ki file nai banani balkay components ma folder bana k os
          page ka phr os folder ma vo file/files rakhni hain...Thats Enough and
          Its our Paa g style k bat bol kar b batai ja sakti ha par nai ham
          likhkkar bataye ga :P
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
