import React, { Component } from 'react'
import { View, Button, Textinput } from 'react-native'

import firebase from 'firebase'

export class Register extends Component {
      constructor(props){
        super(props);

        this.state = {
          email: '',
          password: '',
          name: ''

        }
        this.onSignUp = this.onSignUp.bind(this)
      }

      onSignUp(){
          const { email, password, name } = this.state;
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((result) => {
              console.log(result)

          })

          .catch((error) => {
              console.log(error)
          })

      }


      render() {
          return (
              <View>
                  <Textinput
                        placeholder = 'name'
                        onChangeText = {(name) => this.setState({name})}
                  />

                  <Textinput
                        placeholder = 'email'
                        onChangeText = {(email) => this.setState({email})}

                  />

                  <Textinput
                        placeholder = 'passowd'
                        secureTextEntry = {true}
                        onChangeText = {(passwod) => this.setState({password})}
                  />

                  <Button
                      onPress ={()  => this.onSignUp()}
                      title ="Sing Up"
                  />
              </View>
          )
      }
}

export default Register
