import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    text: {
        fontSize: 50,
    },
    button: {
        backgroundColor: "lightgrey",
        width: 100,
        height: 70,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export default function Name() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Please enter your name:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="type your name" />
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.button}
                >
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}