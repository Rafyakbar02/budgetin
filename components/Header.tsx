import { Session } from '@supabase/supabase-js';
import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

interface SessionProp {
	session: Session;
}

export default function Header({ session }: SessionProp ) {
	const user = session.user.user_metadata;
	const firstName = user.first_name;
	const lastName = user.last_name;

	return (
		<View style={{
			padding: 20,
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between'
		}}>
			<View>
				<Text style={{ fontSize: 20 }}>Welcome, </Text>
				<Text style={{ fontSize: 35, marginTop: 10 }}>{firstName} {lastName}</Text>
			</View>
			<Link href={'/add_new_category'}>
				<AntDesign name="pluscircle" size={40} color="black" />
			</Link>
		</View>
	)
}