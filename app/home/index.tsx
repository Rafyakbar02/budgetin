import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { logout } from "@/services/auth";
import { router } from "expo-router";

export default function index() {
  const handleLogout = async () => {
    try {
      logout();

      router.navigate('/');
    } catch (error) {
      alert(error)
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
        <Text>Homepage</Text>
        <TouchableOpacity style={styles.mainButton} onPress={(handleLogout)}>
          <Text>Logout</Text>
        </TouchableOpacity>
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
