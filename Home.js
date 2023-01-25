import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image,Button } from 'react-native';
import SeedPhrase from './Pages/SeedPhrase';


export default function Home({navigation}) {
  const createwallet=()=>{
    navigation.navigate("SeedPhrase")
  };

  return (
    <View style={styles.container}>
      
      {/* <SeedPhrase/> */}
      {/* <Image source={require('./assets/home-banner.png')} style={styles.bannerImage}></Image>
      <View style={styles.content}>
        <Text style={styles.mainText}>Open up Home.js to start working!</Text>
        <Text style={styles.helpText}>All the libraries and assets required are available in the app directory.</Text>
        <Text style={styles.hintText}>Hint: Make use of stack navigation in App.js to navigate between screens!</Text>
      </View> */}
      <View style={styles.titilebox}>
        <Text style={styles.title}>Get the world's first non-custodial cypher card</Text>
        <Text style={styles.subtitle}>Explore all of Web3 in one place</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.iconbox}>
          <Image  style={styles.icons} source={require("./assets/swap.png")}></Image>
          <Text style={styles.para}>Swap to get instant USD</Text>
        </View>
        <View style={styles.iconbox}>
          <Image  style={styles.icons} source={require("./assets/buy.png")}></Image>
          <Text style={styles.para}>Buy at an affordable price</Text>
        </View>
        <View style={styles.iconbox}>
          <Image  style={styles.icons} source={require("./assets/chain.png")}></Image>
          <Text style={styles.para}>9 Chains Supported- more coming soon!</Text>
        </View>
        <View style={styles.iconbox}>
          <Image  style={styles.icons} source={require("./assets/browser.png")}></Image>
          <Text style={styles.para}>Accepted all over the world</Text>
        </View>
        <Button style={styles.button}  onPress={createwallet} title="CREATE NEW WALLET"></Button>
      </View>
      
      <StatusBar style="auto" />
    </View>
  )
}


const styles=StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        
      },
  title:{
    fontWeight:"bold",
    padding:10,
    fontSize:25,
  },
  iconbox:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'left',
    
  },
  card:{
    flexDirection: 'column',
    
  },
  para:{
      fontWeight:"bold",
      fontSize:15
  },
  subtitle:{
    padding:20,
    fontWeight:"400",
    fontSize:15,
    fontWeight:"300"
  },
  icons:{
    width:50,
    height:50,
    borderRadius:200 /2
  },
  button:{
    borderRadius:100,
    
  }
})
