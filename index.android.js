import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Header from './app/components/Header'
import Icone from './app/components/Icone'

class app3 extends Component {
	constructor(props){
		super(props)

		this.state = {
			escolhaUsuario : '',
			escolhaComputador : '',
			resultadoLogica : '',
			imgC : 'pedra.png'
					}
		}

	jokenpo(escolha){
		//gera número aleatório entre 0 e 2

		let numAleatorio = Math.floor(Math.random() * 3)

		let escolhaC = '';

		switch (numAleatorio) {
			case 0:
				escolhaC = 'Pedra'
				break
			case 1:
				escolhaC = 'Papel'
				break
			case 2:
				escolhaC = 'Tesoura'
				break
			default:
				escolhaC = ''
		}

		let resultado = ''

		if (escolhaC == 'Pedra') {
			if (escolha == 'Pedra') {
				resultado = 'Empate!'
			}
			else if (escolha == 'Papel') {
				resultado = 'Você ganhou!'
			}
			else {
				resultado = 'Você perdeu!'
			}
		}
		else if (escolhaC == 'Papel') {
			if (escolha == 'Pedra') {
				resultado = 'Você perdeu!'
			}
			else if (escolha == 'Papel') {
				resultado = 'Empate!'
			}
			else {
				resultado = 'Você ganhou!'
			}
		}
		else {
			if (escolha == 'Pedra') {
				resultado = 'Você ganhou!'
			}
			else if (escolha == 'Papel') {
				resultado = 'Você perdeu!'
			}
			else {
				resultado = 'Empate'
			}
		}

		this.setState({
			escolhaUsuario : escolha,
			escolhaComputador : escolhaC,
			resultadoLogica : resultado,
		})
	}

	render() {
		return(
		<View style={styles.container}>
			<Header style={styles.header}/>
			<View style={styles.menu}>

				<View style={styles.button}>
					<Button title="Pedra" onPress={() => {this.jokenpo('Pedra')}} />
				</View>

				<View style={styles.button}>
					<Button title="Papel" onPress={() => {this.jokenpo('Papel')}} />
				</View>

				<View style={styles.button}>
					<Button title="Tesoura" onPress={() => {this.jokenpo('Tesoura')}} />
				</View>

			</View>
			<View style={styles.palco}>
				<Text style={styles.txtResultado}>{this.state.resultadoLogica}</Text>
				{/* <Text>Escolha do computador: {this.state.escolhaComputador}</Text> */}
				<Icone escolha={this.state.escolhaComputador} jogador='Computador' />
				{/* <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text> */}
				<Icone escolha={this.state.escolhaUsuario} jogador='Você' />
			</View>
		</View>
		)
	}
}

	const styles = StyleSheet.create({
		container: {
			flex: 1
		},
		menu: {
			marginTop: 10,
			flexDirection: 'row',
			justifyContent: 'space-around',
			maxHeight: 40
		},
		button: {
			flex: 1,
		},
		palco: {
			marginTop: 10,
			alignItems: 'center'
		},
		txtResultado: {
			height: 60,
			fontSize: 40,
			fontWeight: 'bold',
			marginTop: 10
		}
	})

AppRegistry.registerComponent('app3', () => app3);
