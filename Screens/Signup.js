import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native';


function Signup({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
            <Image
                source={require("../assets/logo-color.png")}
                style={{ width: "50%", height: 35, marginBottom: 50 }}
                resizeMode="cover"
            />

            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                paddingBottom: 25
            }}>
                <Text style={{
                    backgroundColor: "#BD0606",
                    color: "white",
                    fontSize: 15,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 20,
                    fontWeight: "600"
                }}>
                    User
                </Text>


                {/* <Text style={{
                    backgroundColor: "#BD0606",
                    color: "white",
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 20
                }}>
                    Ambulance
                </Text> */}

                <Text style={{
                    fontSize: 15,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 20,
                    color: "gray"
                }}>
                    Ambulance
                </Text>
            </View>


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
                    SIGN UP
                </Text>
            </TouchableOpacity>

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


        </View>
    );
}

export default Signup;