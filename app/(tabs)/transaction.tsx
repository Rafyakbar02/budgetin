import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { commonStyles } from '@/styles/util';

export default function transaction() {
  return (
    <View style={commonStyles.bgWhite}>
      <StatusBar style='dark' />
      <Text>Transaction</Text>
    </View>
  )
}