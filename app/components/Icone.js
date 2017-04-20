import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export default class ClassName extends Component {
	constructor() {
		super()
	}
	render(){
		//this.props.escolha
		//this.props.jogador

		if(this.props.escolha == 'Pedra'){
			return (
				<View style={{alignItems: 'center', marginTop: 20}}>
					<Text style={{fontSize: 32}}>{this.props.jogador}</Text>
					<Image source={require('../assets/pedra.png')} />
				</View>
			)
		}	else if (this.props.escolha == 'Papel') {
			return (
				<View style={{alignItems: 'center', marginTop: 20}}>
					<Text style={{fontSize: 32}}>{this.props.jogador}</Text>
					<Image source={require('../assets/papel.png')} />
				</View>
			)
		}	else if (this.props.escolha == 'Tesoura') {
			return (
				<View style={{alignItems: 'center', marginTop: 20}}>
					<Text style={{fontSize: 32}}>{this.props.jogador}</Text>
					<Image source={require('../assets/tesoura.png')} />
				</View>
			)
		}	else {
			return false
		}

		return(
			<Image source={require('../assets/pedra.png')} />
		)
	}
}
