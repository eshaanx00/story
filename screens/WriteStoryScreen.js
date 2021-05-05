import React, { Component } from 'react'
import {TextInput, View, Text ,TouchableOpacity, StyleSheet} from 'react-native';

export default class WriteStoryScreen extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.inputStyle} placeholder="Story Title"></TextInput>
                <TextInput style={styles.inputStyle} placeholder="Author"></TextInput>
                <TextInput multiline={true} style={styles.bigInputStyle} placeholder="Write your story"></TextInput>
                <TouchableOpacity style={styles.opacityStyle}><Text style={{alignSelf:'center',marginTop:5,marginLeft:2}}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputStyle:{
        marginTop:35,
        borderWidth:1,
        width:300,
        textAlign:'center',
        marginLeft:30
    },
    bigInputStyle:{
        marginTop:35,
        borderWidth:1,
        width:300,
        height:100,
        textAlign:'center',
        marginLeft:30
    },
    opacityStyle:{
        width:100,
        height:30,
        marginTop:50,
        backgroundColor:'pink',
        marginLeft:135,
        textAlignVertical:'center',
        borderRadius:5
    }
})
