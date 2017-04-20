import React, { Component } from 'react'
import {
		View,
		Image,
		StyleSheet
} from 'react-native'

export default class Header extends Component {
	render(){
		return(
			<View style={styles.header}>
				<Image source={require('../assets/jokenpo.png')} />
			</View>
		)
	}
}

	const styles = StyleSheet.create({
		header: {
			alignItems: 'center'
		}
	})


//export {funções, constantes, variaveis}
