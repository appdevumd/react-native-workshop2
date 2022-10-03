import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
    }
});

export default function Info() {
    return (
        <View style={styles.container}>
        <ScrollView>
            <Text style={styles.text}>Information:</Text>
            <Text style={styles.text}>Date: October 3, 2022</Text>
            <Text style={styles.text}>Time: 6-7pm</Text>
            <Text style={styles.text}>Location: CSI 2117</Text>
            {/* <StatusBar style="auto" /> */}
        </ScrollView>
        </View>
    );
}