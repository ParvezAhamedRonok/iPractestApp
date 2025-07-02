import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from "react-native";
import { useStateContext } from "@/contexts/ContextProvider";
import Explain_Btn from "./Explain-Btn";
import { QuestionNumObj } from "../../_Importants/_Data/_TestAnswers"

export default function TF_AZ_IX_inputs({
    QNum,
    TestName,
    AnswerData = [],
    options = []
}) {
    const { readingTestName } = useStateContext();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(QuestionNumObj[QNum]);

    const toggleModal = () => setIsModalVisible(!isModalVisible);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        handleValueChangeValue(option);
        toggleModal();
    };


    const handleValueChangeValue = (text) => {
        QuestionNumObj[QNum] = text; // ✅ Dynamic property update
    };



    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.dropdown} onPress={toggleModal}>
                <Text
                    style={[
                        styles.dropdownText,
                        readingTestName === TestName &&
                        AnswerData.length > 0 &&
                        !AnswerData.includes(selectedOption) &&
                        styles.errorText,
                        readingTestName === TestName &&
                        selectedOption !== "" &&
                        AnswerData.length > 0 &&
                        AnswerData.includes(selectedOption) &&
                        styles.successText,
                    ]}
                >
                    {selectedOption || "Select"}
                </Text>
                <Text style={styles.arrow}>{isModalVisible ? "▲" : "▼"}</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="fade"
                onRequestClose={toggleModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={options}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleOptionSelect(item)} style={styles.option}>
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </Modal>

            {/* Uncomment this if needed */}
            {readingTestName === TestName &&
                AnswerData.length > 0 &&
                !AnswerData.includes(selectedOption) && (
                    <Explain_Btn
                        TestName={TestName}
                        AnswerData={AnswerData}
                        userAnswerQN={selectedOption}
                    />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dropdown: {
        width: 70,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    dropdownText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#333',
    },
    arrow: {
        fontSize: 13,
        color: 'purple',
    },
    errorText: {
        color: 'red',
    },
    successText: {
        color: 'green',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: 250,
        borderRadius: 8,
        padding: 10,
        maxHeight: 300,
    },
    option: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});
