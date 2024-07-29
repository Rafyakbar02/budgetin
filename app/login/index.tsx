import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import firebaseApp from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(firebaseApp);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in!');

            router.push('/home');
        } catch (error) {
            console.error('Auth error');
        }
    };

    return (
        <View style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                padding: 20
            }}>
            <Text style={{
                    fontSize: 35,
                    fontWeight: 'bold',
            }}>Masuk</Text>
            
            <Text style={{
                marginBottom: 20
            }}>Masukkan email-mu yang terdaftar</Text>
            
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={"#ddd"}
            />

            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder='Password'
                placeholderTextColor={"#ddd"}
                secureTextEntry
            />
            
            <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>Lanjut</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
    },

    mainButton: {
        backgroundColor: '#47ba54',
        padding: 15,
        paddingHorizontal: 5,
        width: '100%',
        borderRadius: 99,
        marginTop: 20,
    },

    secondaryButton: {
        backgroundColor: '#fff',
        padding: 15,
        paddingHorizontal: 5,
        width: '100%',
        borderRadius: 99,
        borderColor: '#47ba54',
        borderWidth: 1.5
    }
})
