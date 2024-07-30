import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { signup } from '@/services/auth';
import { commonStyles } from '@/styles/util';
import { StatusBar } from 'expo-status-bar';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        try {
            const user = await signup(email, password, confirmPassword);

            if (user) {
                router.push('/budget');
            }
            
        } catch (error: any) {
            if (error.code == "auth/email-already-in-use") {
                alert("Email already in use");
            } else if (error.code == "auth/weak-password") {
                alert("Weak password");
            } else {
                alert("Signup error" + error);
            }
        }
    };

    return (
        <View style={commonStyles.bgWhite}>
            <StatusBar style='dark'/>

            <Text style={{
                    fontSize: 35,
                    fontWeight: 'bold',
            }}>Daftar</Text>
            <Text style={{
                marginBottom: 20
            }}>Lengkapi data di bawah</Text>
            
            <TextInput value={email} onChangeText={setEmail} style={commonStyles.input} placeholder='Email' placeholderTextColor={"#ddd"} />
            <TextInput value={password} onChangeText={setPassword} style={commonStyles.input} placeholder='Password' placeholderTextColor={"#ddd"} secureTextEntry />
            <TextInput value={confirmPassword} onChangeText={setConfirmPassword} style={commonStyles.input} placeholder='Confirm Password' placeholderTextColor={"#ddd"} secureTextEntry />
            
            <TouchableOpacity style={commonStyles.primaryButton} onPress={handleSignup}>
                <Text style={commonStyles.textPrimaryButton}>Lanjut</Text>
            </TouchableOpacity>
        </View>
    )
}