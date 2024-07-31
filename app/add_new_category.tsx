import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function AddNewCategory() {
	return (
		<View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
			<View style={{ backgroundColor: '#5e55c9', padding: 20, borderRadius: 99}}>
				<FontAwesome name="money" size={30} color="white" />
			</View>
		</View>
	)
}