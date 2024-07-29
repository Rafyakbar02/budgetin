import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FirstScreen() {
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
            }}>Budgetin</Text>

            <Text style={{
                fontSize: 15,
                marginBottom: 20
            }}>Personal budgeting kamu</Text>

            <TouchableOpacity style={styles.mainButton} onPress={() => router.push('/login')}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#fff'
                }}>Masuk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/signup')}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#47ba54'
                }}>Daftar</Text>
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

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: '#47ba54',
        padding: 15,
        paddingHorizontal: 5,
        width: '100%',
        borderRadius: 99,
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