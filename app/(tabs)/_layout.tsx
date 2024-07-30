import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="budget" options={{
                title: "Budget"
            }} />

            <Tabs.Screen name="transaction" options={{
                title: "Transaction"
            }} />

            <Tabs.Screen name="setting" options={{
                title: "Setting"
            }} />
        </Tabs>
    );
}