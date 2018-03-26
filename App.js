/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, Image
} from 'react-native';
import header from './src/header';
import footer from './src/footer';

export default class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  }
  );

}
  
  render() {
    return (
    
      <View style={styles.containerMain}>
      <View style={styles.header}>
          <Text style={styles.headerText}> Prakiraan Cuaca </Text>
      </View>
        <View style={styles.boxSatu}> 
            <Text style={styles.masukanNamaKota}> Masukkan Nama Kota : </Text>
              
            <TextInput
             style={{ textAlign:'center', height: 40, width: 170, fontSize: 20, backgroundColor: 'white' }}
             onChangeText={(city) => this.setState({ city })}
             />
            
            <Button 
              onPress={() => this.getWeather()}
              title="Lihat"
              color="#B2DFDB"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
        </View>
        <View style={styles.boxDua}> 
            <Text style={{ padding: 15, fontSize: 18, color: 'white'}} >
              Suhu = {this.state.forecast.temp} {"\n\n"}
              Cuaca   = {this.state.forecast.main} {"\n\n"}
              Deskripsi  = {this.state.forecast.description} {"\n\n"}
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Copyright @ArdaDevelop </Text>
      </View>
      
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footer: {
    flex: 1,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  containerMain: {
    flex: 6,
    backgroundColor: '#BBDEFB'
  },
  boxSatu: {
    flex: 2,
    backgroundColor: '#00BCD4',
    marginLeft: 20,
    marginRight: 20,
    marginTop : 30,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  boxDua: {
    flex: 6,
    backgroundColor: '#00BCD4',
    marginLeft: 20,
    marginRight: 20,
    marginTop : 15,
    marginBottom: 30
  },
  masukanNamaKota: {
    color: 'white',
    fontSize: 20
  },
  headerText: {
    color: 'white',
    fontSize: 25
  },
  footerText: {
    color: 'black',
    fontSize: 17
  }

});
