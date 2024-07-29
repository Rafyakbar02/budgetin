import { Text, View } from "react-native"

export default function index() {
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
    </View>
  )
}
