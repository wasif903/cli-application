import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native';
import { useLoginMutation } from "../Redux/reducers/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Login({ navigation }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login] = useLoginMutation();

    const onLoginHandler = async () => {
        try {
            const res = await login({ email, password });
            if (!res.error) {
                alert("Login success");
                await AsyncStorage.setItem("userdata", JSON.stringify(res.data));
                navigation.navigate("Home");
            } else {
                alert("Login failed")
                console.log(res.error)
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

            <Text style={{
                textAlign: "left",
                width: "100%",
                paddingStart: 40,
                paddingBottom: 10,
                color: "grey"
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
                onChangeText={(e) => setEmail(e)}
                value={email}
                placeholder="example@gmail.com"
            />


            <Text style={{
                textAlign: "left",
                width: "100%",
                paddingStart: 40,
                paddingTop: 20,
                paddingBottom: 10,
                color: "grey"
            }}>
                Password
            </Text>
            <TextInput
                placeholderTextColor="gray" //hugaya
                style={{
                    height: 50,
                    width: "80%",
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 15,

                }}
                onChangeText={(e) => setPassword(e)}
                value={password}
                placeholder="............."
            />


            <TouchableOpacity
                // onPress={() => navigation.navigate("Home")}
                onPress={onLoginHandler}
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
                    SIGN IN
                </Text>
            </TouchableOpacity>

            <Text style={{
                paddingTop: 40,
                color: "grey"
            }}

                onPress={onLoginHandler}
            >
                Don't Have An Account ? <Text style={{
                    color: "#BD0606"
                }}>
                    Sign up
                </Text>
            </Text>


        </View>
    );
}

export default Login;