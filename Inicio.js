import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// importar librerias y elementos usables
import {NavigationContext} from '@react-navigation/native';

// eslint-disable-next-line prettier/prettier
export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      //declaración de variables
      // eslint-disable-next-line no-undef
      context: contextType,
    };
  }

  render() {
    // sección de objetos programados
    const navigation = this.context;

    const clickbemail = () => {
      console.log('Diste click al boton de EMAIL!!');
    };

    const clickbfacebook = () => {
      console.log('Diste click al boton de FACEBOOK!!');
    };

    const clickbsignup = () => {
      console.log('Diste click al boton de Crear Cuenta!!');
    };

    const ir_a_insc = () => {
      navigation.navigate('inscripcion');
    };

    return (
      // elementos visuales
      <View>
        <Image
          style={styles.Imagen1}
          source={require('./Imagenes/anime-construction.png')}
        />
        <View style={styles.login}>
          <Text style={styles.txthandyman}>Bienvenido a RAMP MAN!!</Text>
          <TouchableOpacity style={styles.bemail} onPress={clickbemail}>
            <View style={styles.btnemail}>
              <Text style={styles.txtbtnemail}> Inicia con tu EMAIL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bfacebook} onPress={clickbfacebook}>
            <View style={styles.btnfacebook}>
              <Text style={styles.txtfacebook}> Inicia con tu Facebook</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.txtcreacuenta}>No tienes cuenta?</Text>
          <TouchableOpacity style={styles.button} onPress={ir_a_insc}>
            <Text style={styles.txtaqui}>Da click aquí!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// estilos uwu
const styles = StyleSheet.create({
  bemail: {
    //borderWidth:2,
    width: 225,
    height: 55,
    marginTop: 10,
    marginLeft: 50,
  },

  bfacebook: {
    //borderWidth:2,
    width: 225,
    height: 55,
    marginTop: 10,
    marginLeft: 50,
  },

  btnfacebook: {
    width: 220,
    height: 50,
    borderWidth: 2,
    borderColor: '#0A0A0A',
    backgroundColor: '#0096D3',
    borderRadius: 20,
    //marginLeft:50,
    //marginTop:20,
  },

  btnemail: {
    width: 220,
    height: 50,
    borderWidth: 2,
    borderColor: '#0A0A0A',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    //marginLeft:50,
    //marginTop:20,
  },

  txthandyman: {
    fontSize: 22,
    color: '#DE4604',
    marginLeft: 25,
    marginTop: 0,
  },

  txtfacebook: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    marginLeft: 0,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },

  txtbtnemail: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    marginLeft: 0,
    marginTop: 10,
    textAlign: 'center',
  },

  txtcreacuenta: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0,
    color: 'white',
  },

  txtaqui: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0,
    color: '#EEEEEE',
  },

  login: {
    width: 393,
    height: 260,
    borderWidth: 40,
    borderColor: '#7C3C7E',
    backgroundColor: '#7C3C7E',
    borderRadius: 30,
    marginLeft: 0,
  },

  Imagen1: {
    width: 400,
    height: 500,
  },
});
