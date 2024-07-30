import { StyleSheet } from "react-native"

export const commonStyles = StyleSheet.create({
    bgWhite: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 20
    },

    primaryButton: {
        backgroundColor: '#47ba54',
        padding: 15,
        paddingHorizontal: 5,
        width: '100%',
        borderRadius: 99,
    },

    textPrimaryButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },

    secondaryButton: {
        backgroundColor: '#fff',
        padding: 15,
        paddingHorizontal: 5,
        width: '100%',
        borderRadius: 99,
        borderColor: '#47ba54',
        borderWidth: 1.5
    },

    textSecondaryButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#47ba54'
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
    }
})