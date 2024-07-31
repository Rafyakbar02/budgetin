import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Overview() {
	return (
		<View style={{
			backgroundColor: "#fff",
			marginHorizontal: 20,
			borderRadius: 15,
			padding: 20,
		}}>
			<Text style={{ textAlign: 'left', fontSize: 15 }}>Total Budget</Text>
			<Text style={{ fontSize: 40, marginTop: 5}}>$1,567.34</Text>

			<View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
				<MaterialCommunityIcons name="checkbox-blank" size={24} color="black" />
				<Text>N/A</Text>
			</View>
		</View>
	)
}