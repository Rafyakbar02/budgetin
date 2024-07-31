import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '@/styles/util'
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '@/services/supabase';

export default function setting() {
  const [loading, setLoading] = useState(false);


  const signOut = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert(error.message);
    }

    router.navigate('/');

    setLoading(false);
  }

  return (
    <View style={commonStyles.bgWhite}>
      <StatusBar style='dark' />
      <TouchableOpacity style={commonStyles.primaryButton} onPress={signOut}>
        <Text style={commonStyles.textPrimaryButton}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}