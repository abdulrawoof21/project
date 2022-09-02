import React from 'react'
import {Text,View,TextInput,ScrollView,Button,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'

const Result = ({navigation}) => {

    
    const pre= navigation.getParam('p')
    const list= navigation.getParam('c')

  return (
    <ScrollView>
        <Text style={{fontSize:24,alignSelf:'center'}}>Result:</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.con}>{pre}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize:24,alignSelf:'center'}}>You can also get into the following colleges:</Text>
        {list.map((x, i) => <View key={i}>
            <Text style={styles.container}>{x}</Text>
        </View>)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0EEEE',
        // paddingTop:40,
        padding:20,
        margin:5,
    },
    con:{
        flex:1,
        backgroundColor:'grey',
        // paddingTop:40,
        padding:20,
        margin:5,
        fontSize:20,
        alignSelf:'center',
        color:'white',
    },
  })

export default Result
