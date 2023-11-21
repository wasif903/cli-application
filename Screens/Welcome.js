import { ImageBackground, Text, TouchableOpacity, View, Image } from "react-native";


function Welcome({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/main.png")} // Replace with the actual path to your image
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            resizeMode="cover"
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 0, 0, 0.6)',
                    width: "100%"
                }}
            >

                <View style={{
                    flex: 0.2,

                    width: "100%"
                }}>

                </View>

                <View style={{
                    flex: 0.4,
                    alignItems: 'center',
                    width: "100%"
                }}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={{ width: "80%", height: 60, marginBottom: 20 }}
                        resizeMode="cover"
                    />
                    <Text style={{
                        textAlign: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: "100%",
                        color: "white"
                    }}>
                        An emergency service app is a mobile application that provides users with access to emergency services, such as calling 911, locating the nearest hospital, or finding the nearest police station.
                    </Text>
                </View>


                <View style={{
                    flex: 0.3,
                    alignItems: 'flex-end',
                    justifyContent: "center",
                    flexDirection: "row",
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: "100%",
                }}>

                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderColor: 'white',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 30,
                        paddingRight: 30,
                        borderRadius: 50,
                        marginEnd: 30
                    }} onPress={() => navigation.navigate("Signup")}>
                        <Text style={{ color: '#ffffff', fontSize: 18 }}>SIGNUP</Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderColor: 'white',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 30,
                        paddingRight: 30,
                        borderRadius: 50
                    }} onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: '#ffffff', fontSize: 18 }}>LOGIN</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </ImageBackground >
    );
}

export default Welcome;