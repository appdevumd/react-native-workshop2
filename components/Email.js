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

export default function Email({ navigation }) {
    return (
        <View style={styles.container}>
        <ScrollView>
            <Text style={styles.text}>Please enter your email:</Text>
            <TextInput 
                style={styles.input}
                placeholder="type your email here" />
            <TouchableOpacity
                    onPress={() => navigation.navigate("Registered")}
                    style={styles.button}
                >
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
}