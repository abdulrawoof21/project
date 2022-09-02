import React,{useState} from 'react'
import {Text,View,TextInput,ScrollView,Button,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { auth } from '../../Firebase'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const Signup = ({ navigation }) => {

    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    
    const handleSignup = () =>{
        auth
        .createUserWithEmailAndPassword(email,pass)
        .then(userCredentials=>{
            const user =userCredentials.user;
            console.log('Registred with:',user.email);
        })
        .catch(error => alert(error.message))
    }

  return (
    <ScrollView>
        <View style={styles.img}>
                <Image source={require('../../assets/logo1.png')}/>
        </View>
        <Text></Text>
        <Text style={styles.t2}>Signup</Text>
        <Text></Text>
        <Text></Text>
        <View>
            <Text style={styles.cent}>     E-Mail:</Text>
        </View>
        <View style={styles.text1}>
            <MaterialIcons name="email" size={30} color="black" />
            <TextInput 
            style={styles.is}
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(newText)=>setEmail(newText)}
            />
            </View>
        <View>
            <Text style={styles.cent}>     Password:</Text>
        </View>
        <View style={styles.text1}>
            <FontAwesome name="lock" size={30} color="black" />
            <TextInput 
            style={styles.is}
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            value={pass}
            onChangeText={(newText)=>setPass(newText)}
            secureTextEntry
            />
            </View>
        {/* <View style={styles.button3}>
            <Button
                title="Submit"
                color="grey"
                onPress={handleSignup}
            />           
        </View> */}
        <TouchableOpacity onPress={handleSignup} style={{backgroundColor:'grey',padding:15,borderRadius:10,marginVertical:30,marginHorizontal:90}}>
            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.button3}>
                {/* <Button
                    title="Signup instead"
                    color="grey"
                    onPress={()=>navigation.navigate('Sign')}
                /> */}
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Log')}>
                    <Text> Login</Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    text1:{
        margin:20,
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    is:{
        flex:1,
        height:50,
        fontSize:16,
        marginLeft:5,
    },
    button1:{
        marginVertical:15,
    },
    button2:{
        marginBottom:15,    
    },
    button3:{
        marginHorizontal:100,
        marginBottom:15,   
        justifyContent:'space-between',
        flexDirection:'row',
    },
    t2:{
        fontSize:25,
        alignSelf:'center',
    },
    img:{
        alignItems:'center',
        top:20,
    },
    im:{
        fontSize:18,
        alignItems:'center',
    },
    cent:{
        fontSize:16,
    }
})

export default Signup

