import { router, Stack } from "expo-router";
import { Button } from "react-native";

export default function RootLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="add_new_category"
				options={{
					title: "New Category",
					headerShown: true,
					presentation: 'modal',
					animation: "slide_from_bottom",
					headerLeft: () => (
						<Button onPress={() => router.back()} title="Back" />
					)
				}}
			/>
		</Stack>
	);
}
