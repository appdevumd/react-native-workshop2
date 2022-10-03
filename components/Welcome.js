import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
    }
});

export default function Welcome() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Welcome to React Native Workshop 2!</Text>
            </ScrollView>
        </View>
    );
}
