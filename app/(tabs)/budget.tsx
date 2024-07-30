import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '@/styles/util'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/services/firebase';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '@/services/supabase';

export default function budget() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [categories, setCategories] = useState<any[]>([])

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      setUser(user);

      if (user) {
        try {
          const { data, error } = await supabase.from('Category')
            .select('*')
            .eq('created_by', user?.email)
          
          if (error) {
            throw error;
          }
          
          setCategories(data || []);
        } catch (error) {
          alert(error);
        }
      } else {
        setCategories([]);
      }

      if (initializing) {
        setInitializing(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (initializing) {
    return (
      <View style={commonStyles.bgWhite}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={commonStyles.bgWhite}>
      <StatusBar style="dark" />
      <Text>budget</Text>
      {user ? <Text>{user.email}</Text> : <></>}
      
      {categories.length > 0 ? (
        <View>
          {categories.map((category: any) => (
            <Text key={category.id}>{category.name}</Text>
          ))}
        </View>
      ) : (
        <Text>No categories yet</Text>
      )}
      
    </View>
  )
}