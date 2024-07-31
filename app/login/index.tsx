import { router } from 'expo-router'
import { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import { commonStyles } from '@/styles/util';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '@/services/supabase';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            Alert.alert(error.message);
        } else {
            router.push('/budget');
        }

        setLoading(false);
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
            
            <TouchableOpacity style={commonStyles.primaryButton} onPress={signIn} disabled={loading}>
                <Text style={commonStyles.textPrimaryButton}>Lanjut</Text>
            </TouchableOpacity>
        </View>
    )
}