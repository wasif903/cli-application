import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native';


function Login({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
            <Image
                source={require("../assets/logo-color.png")}
                style={{ width: "50%", height: 35, marginBottom: 50 }}
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
                placeholder="............."
            />


            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}

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

                onPress={() => navigation.navigate("Signup")}
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