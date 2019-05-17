import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ColorPropType from 'prop-types';

export default function TimerButton({ color, title, small, onPress }) {
	TimerButton.propTypes = {
		color: ColorPropType.isRequired,
		title: PropTypes.string.isRequired,
		small: PropTypes.bool, 
		onPress: PropTypes.func.isRequired,
	};

	TimerButton.defaultProps = {
		small: false,
	};

	return (
		<TouchableOpacity
			style={[styles.button, { borderColor: color }]}
			onPress={onPress}
		>
			<Text
				style={[
					styles.buttonText,
					small ? styles.small : styles.large,
					{ color },
				]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
		minWidth: 100,
		borderWidth: 1,
		borderRadius: 3, 
	},
	large: {
		fontSize: 16,
		padding: 10,
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	elapsedTime: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingVertical: 10,
	},
});
