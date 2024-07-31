import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { commonStyles } from '@/styles/util';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '@/services/supabase';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        try {
            setLoading(true);

            if (password != confirmPassword) {
                throw "Passwords do not match";
            }

            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        first_name: firstName,
                        last_name: lastName
                    }
                }
            });

            if (error) {
                throw error;
            }
            
            router.push("/budget");
            setLoading(false);
        } catch (error) {
            alert(error)
        }
    }

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
            
            <TextInput value={firstName} onChangeText={setFirstName} style={commonStyles.input} placeholder='First name' placeholderTextColor={"#ddd"} />
            <TextInput value={lastName} onChangeText={setLastName} style={commonStyles.input} placeholder='Last name' placeholderTextColor={"#ddd"} />
            <TextInput value={email} onChangeText={setEmail} style={commonStyles.input} placeholder='Email' placeholderTextColor={"#ddd"} />
            <TextInput value={password} onChangeText={setPassword} style={commonStyles.input} placeholder='Password' placeholderTextColor={"#ddd"} secureTextEntry />
            <TextInput value={confirmPassword} onChangeText={setConfirmPassword} style={commonStyles.input} placeholder='Confirm Password' placeholderTextColor={"#ddd"} secureTextEntry />
            
            <TouchableOpacity style={commonStyles.primaryButton} onPress={signUp} disabled={loading}>
                <Text style={commonStyles.textPrimaryButton}>Lanjut</Text>
            </TouchableOpacity>
        </View>
    )
}