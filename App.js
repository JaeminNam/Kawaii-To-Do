import React from 'react';
import { StyleSheet, Text, View, StatusBar,Dimensions, Platform, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ToDo from "./ToDo"

const {height, width} = Dimensions.get("window");
export default class App extends React.Component {
  state = {
    newToDo:""
  };
  render() {
    const {newToDo} =this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Kawaii To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input}
                    placeholder={"New To Do"} 
                    onChangeText={this._controlNewTodo}
                    value={newToDo}
                    placeholderTextColor={"#999"}
                    returnKeyType={"done"}
                    underlineColorAndroid={"transparent"}
          ></TextInput>
          <ScrollView contentContainerStyle={styles.todos}>
            <ToDo style={styles.todo}/>
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewTodo = text => {
    this.setState({
      newToDo:text
    });
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title:{
    color:"white",
    fontSize:50,
    marginTop:50,
    fontWeight:"400",
    marginBottom : 30,

  },
  card:{
    backgroundColor:"white",
    flex:1,
    width: width - 50,
    borderTopLeftRadius:20,
    borderTopRightRadius:30,
    ...Platform.select({
      android:{
        elevation: 30
      }
    })
  },
  input:{
    padding:20,
    fontSize:30,
    borderBottomColor:"#bbb",
    borderBottomWidth:StyleSheet.hairlineWidth,
  },
  todos:{
    alignItems:"center"
  }
});
