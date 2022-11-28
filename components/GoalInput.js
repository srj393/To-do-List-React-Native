import{StyleSheet,View,TextInput,Button} from 'react-native'
import {useState} from 'react'



function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText]= useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        
      }


    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(' ');
    }

    return(
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter the goals!' 
         onChangeText={goalInputHandler}
         value={enteredGoalText}
         />
        <Button title='Add Goal' onPress={addGoalHandler} />

      </View>
    );
}

export default GoalInput;


const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1,
    
    
      },
      textInput:{
        borderWidth:1,
        borderColor:'#ccccc',
        width:'70%',
        marginRight:8,
        padding:8,  
      },

});