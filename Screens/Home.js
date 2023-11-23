import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import BottomTab from "../Components/BottomTab";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Home({ navigation }) {

    const [userData, setUserData] = useState({});

    const getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem("userdata");
            if (userData) {
                try {
                    const data = JSON.parse(userData);
                    setUserData(data);
                } catch (parseError) {
                    console.log("Error parsing user data:", parseError);
                }
            } else {
                console.log("User data not found");
            }
        } catch (error) {
            console.log("Unable to get user data");
        }
    };
    useEffect(() => {
        getUserData();
    }, []);


    const onLogoutHandler = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate("Login");
        } catch (error) {
            console.log(error);
        }
    }

    console.log(userData)

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            <View style={{
                flex: 0.2,
                width: "100%",
                paddingStart: 15,
                paddingTop: 20,
                paddingEnd: 15,
                justifyContent: 'space-between',
                alignItems: "center",
                flexDirection: "row"
            }}>
                <View >
                    <Text style={{
                        color: "#BD0606",
                        fontWeight: "600",
                        fontSize: 18
                    }}>WELCOME</Text>
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 22,
                            color: "gray"
                        }}>{userData?.user?.username}</Text>
                </View>

                <Image
                    source={require("../assets/user1.png")}
                    style={{ width: "18%", height: 65 }}
                    resizeMode="cover"
                />


            </View>

            <View style={{
                flex: 0.6,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    color: "#BD0606",
                    fontWeight: "600",
                    textAlign: "center",
                    fontSize: 35,
                    paddingBottom: 25,
                    width: "75%"
                }}>Emergency Help Needed ?</Text>

                <Image
                    source={require("../assets/emergengyCall.png")}
                    style={{ width: "80%", height: 300 }}
                    resizeMode="cover"
                />

                <TouchableOpacity onPress={onLogoutHandler} style={{marginTop:40, backgroundColor:"#BD0606", paddingTop:10, paddingBottom:10, paddingStart:15, paddingEnd:15, borderRadius:20}}>
                    <Text style={{color:"white", fontSize:18}}>
                        Logout
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{
                flex: 0.2,
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <BottomTab navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}

export default Home;