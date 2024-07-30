import { router } from 'expo-router'
import { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { login } from '@/services/auth';
import { commonStyles } from '@/styles/util';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const user = await login(email, password);

            if (user) {
                router.push('/budget');
            }
        } catch (error: any) {
            if (error.code == "auth/user-not-found" || error.code == "auth/wrong-password") {
                alert("Invalid email or password. Please try again");
            } else {
                alert("Sign-in error: " + error);
            }
        }
    };

    return (
        <View style={commonStyles.bgWhite}>
            <StatusBar style='dark' />

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
                style={commonStyles.input}
                placeholder='Email'
                placeholderTextColor={"#ddd"}
            />

            <TextInput
                value={password}
                onChangeText={setPassword}
                style={commonStyles.input}
                placeholder='Password'
                placeholderTextColor={"#ddd"}
                secureTextEntry
            />
            
            <TouchableOpacity style={commonStyles.primaryButton} onPress={handleLogin}>
                <Text style={commonStyles.textPrimaryButton}>Lanjut</Text>
            </TouchableOpacity>
        </View>
    )
}