/*eslint-disable */

import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import musics from './fixture';

class HomePage extends React.Component {
	static navigationOptions = {
		title: 'MUSIC LIST'
	};
	render() {
		return (
			<Fragment>
				<ScrollView style={styles.listContainer}>
					{musics.map(music => {
						return (
							<TouchableOpacity
								style={styles.list}
								key={music.id}
								onPress={() => this.props.navigation.navigate('Player')}
							>
								<View>
									<Image source={{ uri: music.blur }} style={styles.img} />
								</View>
								<View>
									<Text style={styles.title}> {music.title}</Text>
									<View style={styles.infobottom}>
										<Text style={styles.author}> {music.author}</Text>
										<Text style={styles.length}>2:30</Text>
									</View>
								</View>
								<Text style={styles.caret}>{' > '}</Text>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		backgroundColor: '#F5F5F5',
		height: '80%',
		paddingLeft: 19
	},

	list: {
		height: 90,
		backgroundColor: '#fffefe',
		marginTop: 12,
		borderRadius: 10,
		width: '95%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 20,
		shadowColor: '#A9A9A9',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.4,
		elevation: 3
	},
	title: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: '#696969'
	},

	infobottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 150,
		marginTop: 10
	},
	author: {
		fontSize: 10,
		color: '#A9A9A9'
	},
	img: {
		width: 70,
		height: 70,
		borderRadius: 50
	},
	length: {
		fontSize: 10,
		color: '#A9A9A9'
	},
	caret: {
		color: '#FF69B4',
		borderColor: '#FF69B4',
		borderRadius: 7,
		borderWidth: 1,
		borderStyle: 'solid',
		padding: 1,
		paddingRight: 4,
		fontSize: 12
	}
});

export default HomePage;
