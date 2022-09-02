import React,{useState} from 'react'
import {Text,View,TextInput,ScrollView,Button,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { auth } from '../../Firebase'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const Login = ({ navigation }) => {

    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    const handleLogin = () =>{
        auth
        .signInWithEmailAndPassword(email,pass)
        .then(userCredentials=>{
            const user =userCredentials.user;
            console.log('Logged in with:',user.email);

            navigation.navigate('Pred', {
                email: email,
            })

        })
        .catch(error => alert(error.message))
    }

    return (
        <ScrollView>
            <View style={styles.img}>
                <Image source={require('../../assets/logo1.png')}/>
            </View>
            <Text></Text>
            <Text style={styles.t2}>Login</Text>
            <Text></Text>
            <Text></Text>
            <View >
                <Text style={styles.cent}>     Email:</Text>
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
            <View >
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
                    title="Login"
                    color="grey"
                    onPress={handleLogin}
                />
            </View> */}
            <TouchableOpacity onPress={handleLogin} style={{backgroundColor:'grey',padding:15,borderRadius:10,marginVertical:30,marginHorizontal:90}}>
                <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Login</Text>
            </TouchableOpacity>
            <View style={styles.button3}>
                {/* <Button
                    title="Signup instead"
                    color="grey"
                    onPress={()=>navigation.navigate('Sign')}
                /> */}
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
                    <Text> Signup</Text>
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
            marginBottom:15,    },
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
export default Login
