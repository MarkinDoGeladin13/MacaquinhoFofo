import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { Header, Icon, Input } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import db from './localdb'
import PhonicSoundButton from  './components/PhonicSoundButton'
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      chunks:[],
      phonicSounds:[],
    }
  }
  render() {
    return (
      <SafeAreaProvider>
      <View style={style.container}>
        <Header
      backgroundColor="#7FFFD4"
      centerComponent={{
        text: "MACAQUINHO FOFO",
        style: { color: "#fff" }
      }}
    />
    <Image
    style={style.image}
    source={{
      uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
    }}
    />
    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      inputStyle={{}}
      label="RESPOSTA"
      placeholder="DIGITE SUA PALAVRA"
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
      value={this.state.text}
    />
    <TouchableOpacity
            style={style.goButton}
            onPress={() => {
              var palavrinha=this.state.text.toLowerCase().trim()
              db[palavrinha]?(
              this.setState({ chunks: db[this.state.text].chunks }),
              this.setState({phonicSounds:db[this.state.text].phones})
              ):
              alert("Tein naum")
            }}>
            <Text style={style.buttonText}>IR</Text>
          </TouchableOpacity>
    <View>
    {this.state.chunks.map((item,index)=>{
      return(
        <PhonicSoundButton wordChunk={this.state.chunks[index]}
        soundChunk={this.state.phonicSounds[index]}
        buttonIndex={index}/>
        
        
      )
    })}
      </View>
      </View>
      </SafeAreaProvider>
    );
  }
}
 const style=StyleSheet.create({
   container:{
    flex:1,
    
    
   },
   image:{
     marginTop:100,
     width:100,
     height:100,
     marginLeft:115
   },
   goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },



 })