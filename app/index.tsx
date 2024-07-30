import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "@/styles/util";

export default function App() {
    return (
        <View style={commonStyles.bgWhite}>
            <Text style={{
                fontSize: 35,
                fontWeight: 'bold',
            }}>Budgetin</Text>

            <Text style={{
                fontSize: 15,
                marginBottom: 20
            }}>Personal budgeting kamu</Text>

            <TouchableOpacity style={commonStyles.primaryButton} onPress={() => router.push('/login')}>
                <Text style={commonStyles.textPrimaryButton}>Masuk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={commonStyles.secondaryButton} onPress={() => router.push('/register')}>
                <Text style={commonStyles.textSecondaryButton}>Daftar</Text>
            </TouchableOpacity>

            <Text style={{
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
                color: '#1a5921'
            }}>Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi</Text>
        </View>
    )
}