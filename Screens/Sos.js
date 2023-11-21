import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const Sos = ({ navigation }) => {


    const sosDetails = [
        {
            id: 1,
            profile: require("../assets/user1.png"),
            number: "143-321-6543",
            name: "Father"
        },
        {
            id: 2,
            profile: require("../assets/user1.png"),
            number: "143-321-6543",
            name: "Mother"
        },
        {
            id: 3,
            profile: require("../assets/user1.png"),
            number: "143-321-6543",
            name: "Brother"
        },
        {
            id: 4,
            profile: require("../assets/user1.png"),
            number: "143-321-6543",
            name: "Brother"
        }
    ];


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 0.2, width: "100%", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
                    <Icon
                        onPress={() => navigation.navigate("Home")}
                        name="arrow-back"
                        color={"black"}
                        size={30}
                        type="Ionicons"
                    />
                    <Text style={{
                        fontSize: 18,
                        color: "gray"
                    }}>Emergency Contacts</Text>

                    <Image
                        source={require("../assets/user1.png")}
                        style={{ width: "17%", height: 65 }}
                        size="cover"
                    />
                </View>
            </View>

            <View style={{ flex: 0.1, width: "100%" }}>

                <Text style={{ color: "gray", width: "100%", textAlign: "center", fontSize: 20, paddingStart: 8, paddingEnd: 8, lineHeight: 28 }}>
                    WHOM DID YOU WANT TO KEEP UPDATED ON EMERGENCY
                </Text>
            </View>

            <View style={{ flex: 0.7, width: "100%" }}>
                <ScrollView>
                    {sosDetails.map((item) => (
                        <View key={item.id} style={{ paddingStart: 20, paddingEnd: 20, paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <Image
                                source={item.profile}
                                style={{ width: "16%", height: 56 }}
                                resizeMode="cover"
                            />
                            <View style={{ paddingStart: 10, width: "45%", justifyContent: 'center' }}>
                                <Text style={{
                                    fontSize: 22,
                                    color: "gray"
                                }}>
                                    {item.name}
                                </Text>
                                <Text style={{ color: "gray" }}>
                                    {item.number}
                                </Text>
                            </View>

                            <View style={{ width: '50%', justifyContent: "center", alignItems: "center", paddingEnd: 20 }}>
                                <TouchableOpacity style={{ paddingTop: 8, paddingBottom: 8, paddingStart: 12, paddingEnd: 12, backgroundColor: "#D30505", width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                                    <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
                                        Call
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>


            <View style={{ position: 'absolute', paddingStart: 20, paddingBottom: 20, left: 0, bottom: 0, flexDirection: "row", alignItems: 'center' }}>
                <Icon
                    name="add-circle-sharp"
                    color={"#D30505"}
                    size={55}
                    type="Ionicons"
                />
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: "gray" }}>
                        ADD NEW
                    </Text>
                    <Text style={{ color: "gray" }}>
                        Max 4 Contacts
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Sos