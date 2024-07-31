import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '@/styles/util'
import { StatusBar } from 'expo-status-bar';
import { supabase } from '@/services/supabase';
import Header from '@/components/Header';
import { Session } from '@supabase/supabase-js';

export default function budget() {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<View style={commonStyles.bgWhite}>
			<StatusBar style="dark" />	

			<Text>budget</Text>
			{session ? (
				<Text>{session.user.user_metadata.first_name} {session.user.user_metadata.last_name}</Text>
			) : <></>}
			
			{/* {categories.length > 0 ? (
				<View>
				{categories.map((category: any) => (
					<Text key={category.id}>{category.name}</Text>
				))}
				</View>
			) : (
				<Text>No categories yet</Text>
			)} */}
		
		</View>
	)
}