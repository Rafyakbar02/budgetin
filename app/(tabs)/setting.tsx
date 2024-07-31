import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '@/styles/util'
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '@/services/supabase';

export default function Setting() {
  	const [loading, setLoading] = useState(false);

	const signOut = async () => {
		try {
			setLoading(true);

			const { error } = await supabase.auth.signOut();

			if (error) {
				throw error;
			}

			router.navigate('/');

			setLoading(false);
		} catch (error) {
			alert(error)
		}
	}

	return (
		<View style={commonStyles.bgWhite}>
		<StatusBar style='dark' />
		<TouchableOpacity style={commonStyles.primaryButton} onPress={signOut} disabled={loading}>
			<Text style={commonStyles.textPrimaryButton}>Sign Out</Text>
		</TouchableOpacity>
		</View>
	)
}