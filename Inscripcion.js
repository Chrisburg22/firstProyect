import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVentana_Correo:false,
        modalVentana_Facebook:false,
        nombre: "",
        correo: "",
        password: ""
    };
  }

  render() {
    const correo = () => {
        this.setState({modalVentana_Correo:true})
    }

    const facebook = () => {
        this.setState({modalVentana_Facebook:true})
    }

    const modalCierra = () => {
        //this.setState({modalVentana_Correo:false,modalVentana_Facebook:false})
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
            if(xhttp.responseText == "1"){
                alert("Inscripción exitosa")
            }else{
                alert("Error al inscribirse")
            }
        }
        };
        xhttp.open("GET", "https://doc2.000webhostapp.com/2023B/datos.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password, true);
        xhttp.send();
    }



    return (
      <View>
        <Text style ={{fontSize:50, textAlign:"center", color:"black",marginTop:20}}> Inscripción </Text>

        <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"blue",
            borderRadius:40,
            marginLeft:40,
            marginTop:30,
            }} onPress={correo}> 

            <Text style={{
                fontSize:25, 
                color:"white",
                textAlign:"center",
                marginTop:5,
            
            }}  >Inscripción por Correo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"white",
            borderRadius:40,
            marginLeft:40,
            marginTop:30,
            }} onPress={facebook}>

            <Text style={{
                fontSize:23, 
                color:"black",
                textAlign:"center",
                marginTop:5,
            
            }}>Inscripción por FaceBook</Text>
        </TouchableOpacity>

        <Modal 
        transparent={true}
        visible={this.state.modalVentana_Correo}
        animationType="slide"
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:320,
                marginTop:350,
                marginLeft:45,
                borderRadius:5,
            }}>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Nombre: </Text>
                <TextInput onChangeText={(nombre) => this.state({nombre})}></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Correo: </Text>
                <TextInput onChangeText={(correo) => this.state({correo})}></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Password: </Text>
                <TextInput onChangeText={(password) => this.state({password})}></TextInput>
                <TouchableOpacity style={{
                    borderWidth:2,
                    backgroundColor:"blue",
                    width:150,
                    height:50,
                    marginLeft:80,
                    marginTop:25,
                    borderRadius:30,    
                }} onPress={modalCierra} > 
                    <Text style={{color:"white", marginLeft:25, fontSize:25,}}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal 
        transparent={true}
        visible={this.state.modalVentana_Facebook}
        animationType="slide"
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:240,
                marginTop:350,
                marginLeft:45,
                borderRadius:5,
            }}>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Correo: </Text>
                <TextInput></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Contraseña: </Text>
                <TextInput></TextInput>
                <TouchableOpacity style={{
                    borderWidth:2,
                    backgroundColor:"blue",
                    width:150,
                    height:50,
                    marginLeft:80,
                    marginTop:25,
                    borderRadius:30,    
                }} onPress={modalCierra} > 
                    <Text style={{color:"white", marginLeft:25, fontSize:25,}}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
      </View>
    );
  }
}