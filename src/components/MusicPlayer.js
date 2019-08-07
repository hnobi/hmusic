import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false,
			value: 10,
			pause: false
		};
	}

	static navigationOptions = {
		title: 'MUSIC',
		// headerRight:<View/>
		headerRight: (
			<Image
				source={require('./../images/heart-outline.png')}
				style={{ width: 21, height: 20, marginRight: 15 }}
				resizeMode="cover"
			/>
		)
	};

	onPlay = () => {
		this.setState({
			pause: false
		});
	};
	onPause = () => {
		this.setState({
			pause: true
		});
	};
	render() {
		// console.warn(this.state, '-------------');
		return (
			<View style={styles.container}>
				<View style={styles.image_name}>
					<Image
						source={require('./../images/heart.png')}
						style={{ width: 200, height: 200 }}
						resizeMode="cover"
					/>
					<Text style={styles.title}>BODY SHAPE</Text>
				</View>

				<Slider
					value={this.state.value}
					onValueChange={value => this.setState({ value })}
					style={{ width: '98%', marginBottom:50 }}
					maximumValue={100}
				/>
				<View style={styles.buttons}>
					<Icon name="md-skip-backward" size={50} color= '#FF69B4' />
					{this.state.pause ? (
						<Icon name="md-play-circle" size={50} color= '#FF69B4' onPress={this.onPlay} />
					) : (
						<Icon name="md-pause" size={50}color= '#FF69B4'  onPress={this.onPause} />
					)}
					<Icon name="md-skip-forward" size={50} color= '#FF69B4' />
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 90
	},
	heartIcon: {
		width: 20,
		height: 20
	},
	image_name: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignSelf: 'stretch',
		alignItems: 'center'
	},
	title: {
		fontWeight: 'bold',
		color: '#696969',
		marginTop: 20,
		letterSpacing: 2
	},
	// pause: {
	// 	backgroundColor: '#FF69B4',
	// 	width: 50,
	// 	textAlign: 'center',
	// 	borderRadius: 20,
	// 	height: 50,
	// 	padding: 10
	// }
});
export default MusicPlayer;
