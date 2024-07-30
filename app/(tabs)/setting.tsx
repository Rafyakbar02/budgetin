import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { commonStyles } from '@/styles/util'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '@/services/firebase';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function setting() {
  const auth = getAuth(app);

  const handleSignout = async () => {
    try {
      signOut(auth);

      console.log("User logged out!")
      router.navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={commonStyles.bgWhite}>
      <StatusBar style='dark' />
      <TouchableOpacity style={commonStyles.primaryButton} onPress={handleSignout}>
        <Text style={commonStyles.textPrimaryButton}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}