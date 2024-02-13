import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable, SafeAreaView } from 'react-native';
import Button from './Partials/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState({})

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login/', {
            email: email,
            password: password,
          })
          navigation.navigate("Home");
        } catch (error) {
            let err = {}
            err.invalid = error.response.data.message
            toast.error(error.response.data.message || 'An error occurred');
            console.error('Error response:', error.response.data);
          setErrors(err)
          throw error; 
        }
      };
    const validateForm = () => {
        let errors = {}
        if (!email) errors.email = "Email is required"
        if (!password) errors.password = "Password is required"
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const handleSubmit = async () => {
        try {
            if (validateForm()) {
            await handleLogin();
            setEmail("")
            setPassword("")
            setErrors({})
        }
    }
    catch (error) {
        console.error(error.response.data.message);
        let err = {}
        err.invalid= error.response.data.message
        setErrors(err)
        toast.error(error.response.data.message || 'An error occurred');
    }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.main}>
                <View style={styles.welcome_container}>
                    <Text style={styles.welcome_heading}>Sign In</Text>
                    <View>
                        <Text style={styles.welcome_txt}>Welcome back !</Text>
                        <Text style={styles.welcome_txt}>You've been missed</Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.signin_form}>
                    {
                        errors.invalid ? <Text style={styles.error}>{errors.invalid}</Text> : null
                    }
                    <TextInput placeholder='Email' style={styles.input_field} value={email} onChangeText={(text) => setEmail(text)} />
                    {
                        errors.email ? <Text style={styles.error}>{errors.email}</Text> : null
                    }
                    <TextInput placeholder='Password' secureTextEntry style={styles.input_field} value={password} onChangeText={(text) => setPassword(text)} />
                    {
                        errors.password ? <Text style={styles.error}>{errors.password}</Text> : null
                    }

                    <View style={styles.btn_container}>
                        <Button title="Sign in" color="white" background="#008080" font_size={20} onPress={handleSubmit} />
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.signup_alt}>
                    <Text style={{ color: "#5B7E7E", fontSize: 14 }}>
                        don't have an account ? <Pressable style={{ color: "#D2ACA0" }} onPress={() => navigation.navigate("Signup")}><Text>sign up</Text></Pressable>
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: "#B3EBE9",
        gap: 32
    },
    welcome_container: {
        gap: 16,
        alignItems: 'center'
    },
    welcome_heading: {
        color: "#008080",
        fontSize: 32
    },
    welcome_txt: {
        color: "#5B7E7E",
        textAlign: "center",
        fontSize: 14
    },
    signin_form: {
        gap: 16,

    },
    input_field: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "white",
        color: "#5E7171",
        borderRadius: 50,
        fontSize: 18

    },
    btn_container: {
        marginHorizontal: "auto",
        maxWidth: 240
    },

    signup_alt: {
        paddingVertical: 36,
        alignItems: "center"
    },
    error: {
        color: "red",
        paddingHorizontal: 16,
    }
})
export default Login;
