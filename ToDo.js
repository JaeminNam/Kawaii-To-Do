import React,{Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions  } from "react-native";

const {width, height } = Dimensions.get("window");
export default class ToDo extends Component{
    state = {
        isEditing : false,
        isCompleted:false
    }
    render(){
        const {isCompleted, isEditing} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.column} >
                    <TouchableOpacity onPress={this.jmToggleComplete}>
                        <View style={[styles.circle,
                                    isCompleted?styles.completedCircle : styles.uncompletedCircle] }/>
                    </TouchableOpacity>
                    <Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]} >Hello I'm a To Do</Text>
                </View>
                    {isEditing ? (
                        <View style={styles.actions}>
                            <TouchableOpacity  onPress={this.jmStartFinishing}>
                                <View style={styles.actionContainer}>
                                    <Text>V</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity  onPress={this.jmStartEditing}>
                                <View style={styles.actionContainer}>
                                    <Text>E</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.actionContainer}>
                                    <Text>D</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
        )
    }
    jmToggleComplete = () => {
        this.setState(prevState => {
            return{
                isCompleted:!prevState.isCompleted
            }
        })
    }
    
    jmStartEditing = () => {
        this.setState({
            isEditing: true
        })
    }
    
    jmStartFinishing = () => {
        this.setState({
            isEditing:false
        })
    }
}

const styles = StyleSheet.create({
    container:{
        width: width - 70,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
      fontSize : 25  ,
      marginVertical:10,
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:3,
        marginRight:20
    },
    completedCircle:{
        borderColor: "#bbb"
    },
    uncompletedCircle:{
        borderColor: "#F23657"
    },
    completedText:{
        color: "#bbb",
        textDecorationLine:"line-through"
    },
    uncompletedText:{
        color: "#353839"
    },
    column:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width: width/2,
    },
    actions:{
        flexDirection:"row"
    },
    actionContainer:{
        width:30,
        height:30,
        borderRadius:5,
        borderWidth:2,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center"
    },
})