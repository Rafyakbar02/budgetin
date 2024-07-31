import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/services/firebase';

export default function Header() {
    const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	
	const auth = getAuth(app);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
			setUser(user);

			if (initializing) {
				setInitializing(false);
			}
		});

		return () => unsubscribe();
	}, [auth]);

	if (initializing) {
		
	}

  	return (
		<View style={{
			marginTop: 20,
			padding: 20,
			backgroundColor: '#47ba54'
		}}>
		<Text>Header</Text>
		</View>
  )
}