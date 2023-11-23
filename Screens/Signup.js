import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native';
import { useRegisterMutation } from "../Redux/reducers/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import 

function Signup({ navigation }) {

    const [signupTabs, setSignupTabs] = useState('user');

    // For User
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');


    // For Ambulance
    const [ambulanceName, setAmbulanceName] = useState('');
    const [ambulanceEmail, setAmbulanceEmail] = useState('');
    const [ambulancePassword, setAmbulancePassword] = useState('');


    const [register] = useRegisterMutation();

    const onUserSubmitHandler = async () => {
        try {
            const res = await register({

                username: userName,
                email: userEmail,
                password: userPassword,
                role: "User",

            });
            if (!res.error) {
                alert("REgistered ")
                await AsyncStorage.setItem(
                    "userdata",
                    JSON.stringify(res.data)
                );
                navigation.navigate('Home');
                setUserEmail("")
                setUserName("")
                setUserPassword("")

            } else {
                alert("Error While Registering");
                console.log(res)
            }
        } catch (error) {
            console.log(error);
        }
    }


    const onAmbulanceSubmitHandler = async () => {
        try {
            const res = await register({

                username: ambulanceName,
                email: ambulanceEmail,
                password: ambulancePassword,
                role: "Ambulance",

            });
            if (!res.error) {
                alert("REgistered ")
                await AsyncStorage.setItem(
                    "userdata",
                    JSON.stringify(res.data)
                );
                navigation.navigate('Home');
                setAmbulanceEmail("")
                setAmbulanceName("")
                setAmbulancePassword("")
            } else {
                alert("Error While Registering");
                console.log(res)
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
            <Image
                source={require("../assets/logo-color.png")}
                style={{ width: "55%", height: 43, marginBottom: 50 }}
                resizeMode="cover"
            />

            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                paddingBottom: 25
            }}>
                <Text
                    onPress={() => setSignupTabs("user")}
                    style={
                        signupTabs === "ambulance" ?
                            {
                                fontSize: 15,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderRadius: 20,
                                color: "gray",
                            }
                            :
                            {
                                backgroundColor: "#BD0606",
                                color: "white",
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderRadius: 20
                            }
                    }>
                    User
                </Text>


                <Text
                    onPress={() => setSignupTabs("ambulance")}

                    style={signupTabs === "user" ? {
                        fontSize: 15,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 20,
                        color: "gray"
                    } : {
                        backgroundColor: "#BD0606",
                        color: "white",
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 20
                    }}>
                    Ambulance
                </Text>
            </View>


            {
                signupTabs === "ambulance" ?
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{
                            textAlign: "left",
                            width: "100%",
                            paddingStart: 40,
                            paddingBottom: 10,
                            color: "gray"
                        }}>
                            Ambulance Name
                        </Text>
                        <TextInput
                            placeholderTextColor="gray"
                            style={{
                                height: 50,
                                width: "80%",
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 15
                            }}
                            onChangeText={(e) => setAmbulanceName(e)}
                            value={ambulanceName}
                            placeholder="ex: John Doe"
                        />


                        <Text style={{
                            textAlign: "left",
                            paddingTop: 20,
                            width: "100%",
                            paddingStart: 40,
                            paddingBottom: 10,
                            color: "gray"
                        }}>
                            Email/Phone Number
                        </Text>
                        <TextInput
                            placeholderTextColor="gray"
                            style={{
                                height: 50,
                                width: "80%",
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 15
                            }}
                            onChangeText={(e) => setAmbulanceEmail(e)}
                            value={ambulanceEmail}
                            placeholder="example@gmail.com"
                        />


                        <Text style={{
                            textAlign: "left",
                            width: "100%",
                            paddingStart: 40,
                            paddingTop: 20,
                            paddingBottom: 10
                        }}>
                            Password
                        </Text>
                        <TextInput
                            style={{
                                height: 50,
                                width: "80%",
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 15
                            }}
                            onChangeText={(e) => setAmbulancePassword(e)}
                            value={ambulancePassword}
                            placeholder="............."
                        />


                        <TouchableOpacity

                            onPress={onAmbulanceSubmitHandler}

                            style={{
                                marginTop: 40,
                                backgroundColor: "#BD0606",
                                width: "50%",
                                padding: 15,
                                borderRadius: 50
                            }}>
                            <Text style={{
                                color: "white",
                                textAlign: "center"
                            }}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>

                    :

                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{
                            textAlign: "left",
                            width: "100%",
                            paddingStart: 40,
                            paddingBottom: 10,
                            color: "gray"
                        }}>
                            Fullname
                        </Text>
                        <TextInput
                            placeholderTextColor="gray"
                            style={{
                                height: 50,
                                width: "80%",
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 15
                            }}
                            onChangeText={(e) => setUserName(e)}
                            value={userName}
                            placeholder="ex: John Doe"
                        />


                        <Text style={{
                            textAlign: "left",
                            paddingTop: 20,
                            width: "100%",
                            paddingStart: 40,
                            paddingBottom: 10,
                            color: "gray"
                        }}>
                            Email/Phone Number
                        </Text>
                        <TextInput
                            placeholderTextColor="gray"
                            style={{
                                height: 50,
                                width: "80%",
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 15
                            }}
                            value={userEmail}
                            onChangeText={(e) => setUserEmail(e)}
                            placeholder="example@gmail.com"
                        />


                        <Text style={{
                            textAlign: "left",
                            width: "100%",
                            paddingStart: 40,
                            paddingTop: 20,
                            paddingBottom: 10
                        }}>
                            Password
                        </Text>
                        <TextInput
                            style={{
                                height: 50,
                                width: "80%",
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 15
                            }}
                            value={userPassword}
                            onChangeText={(e) => setUserPassword(e)}
                            placeholder="............."
                        />


                        <TouchableOpacity
                            onPress={onUserSubmitHandler}
                            style={{
                                marginTop: 40,
                                backgroundColor: "#BD0606",
                                width: "50%",
                                padding: 15,
                                borderRadius: 50
                            }}>
                            <Text style={{
                                color: "white",
                                textAlign: "center"
                            }}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
            }





            <Text style={{
                paddingTop: 40,
                color: "gray"
            }}

                onPress={() => navigation.navigate("Login")}
            >
                Don't Have An Account ? <Text style={{
                    color: "#BD0606"
                }}>
                    Login
                </Text>
            </Text>


        </View >
    );
}

export default Signup;