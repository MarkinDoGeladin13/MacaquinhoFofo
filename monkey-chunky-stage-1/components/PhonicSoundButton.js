import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import {Audio} from 'expo-av';

class PhonicSoundButton extends React.Component {
  constructor(props){
    super(props)
      this.state={
        pressedButtonIndex:''
      }
    }
  
   playSound = async (soundChunk) => {
     await Audio.Sound.createAsync(
       {uri:'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3'},
       {shouldPlay:true}
     );
   }
  
  render() {
    return (
      <TouchableOpacity style={
        this.props.buttonIndex===this.state.pressButtonIndex
        ?[style.essacoisaai,{backgroundColor:'purple'}]
        :[style.essacoisaai,{backgroundColor:'orange'}]
      }
      onPress={()=>{
        this.setState({pressButtonIndex:this.props.buttonIndex})
        this.playSound(this.props.soundChunk)
      }}>
        <Text style={style.texto}
        >{this.props.wordChunk}</Text>
        </TouchableOpacity>
      
    );
  }
}


const style=StyleSheet.create({
   texto:{
     color:"red",
   },
   essacoisaai:{
     backgroundColor:"orange",
   },
});
export default PhonicSoundButton;