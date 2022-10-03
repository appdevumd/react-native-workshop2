import { StyleSheet, Text, View, ScrollView, Modal, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
});

export default function Info() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("modal has been closed");
                    setModalVisible(false);
                }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>October 3, 2022</Text>
                            <Button title="Close"
                                onPress={() => setModalVisible(false)}
                                />
                        </View>
                    </View>
            </Modal>
            <ScrollView>
                <Text style={styles.text}>Information:</Text>
                <Text style={styles.text}>Date: October 3, 2022</Text>
                <Text style={styles.text}>Time: 6-7pm</Text>
                <Text style={styles.text}>Location: CSI 2117</Text>
                <Button
                    title="Click to see the date"
                    onPress={() => setModalVisible(true)} />
            </ScrollView>
        </View>
    );
}
