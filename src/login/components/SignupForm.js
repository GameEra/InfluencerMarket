import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { emailChanged, passwordChanged, signupUser, typeUpdate, resetError} from '../actions';
import { Picker } from '@react-native-community/picker';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, TextInput} from 'react-native';
class SignupForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        if (this.props.email != '' && this.props.password != '') {
            const { email, password, usertype } = this.props;
            this.props.signupUser({ email, password, usertype });
        }
    }

    toSignin() {
        this.props.resetError();
        Actions.login();
    }

    renderError() {
        if (this.props.error) {
            return (
                <Text style={{ color: 'white', fontWeight: 'bold'}}>
                    {this.props.error}
                </Text>
            )
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../logo.png')}>
                    </Image>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View style={styles.infoContainer}>

                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='rgba(225,225,225,0.8)'
                        keyboardType='email-address'
                        autoCorrect={false}
                        returnKeyType='next'
                        onSubmitEditing={() => this.refs.txtPassword.focus()}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    <TextInput style={styles.inputPassword}
                        placeholder="Password"
                        placeholderTextColor='rgba(225,225,225,0.8)'
                        autoCorrect={false}
                        returnKeyType='go'
                        secureTextEntry={true}
                        ref={"txtPassword"}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Picker
                            style={{ flex: 1, color: 'white' }}
                            selectedValue={this.props.usertype}
                            onValueChange={value => this.props.typeUpdate(value)}>
                            <Picker.Item label="Influencer" value="influencer" />
                            <Picker.Item label="Company" value="company" />
                        </Picker>
                        {this.renderError()}
                    </View>
                    <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Already have an account? <Text onPress={() => this.toSignin()} style={{ fontWeight: 'bold' }}>Sign In.</Text></Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(208, 174, 150)',
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40,
        flex: 1
    },
    logo: {
        width: 111,
        height: 111,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 311,
        padding: 20,
        // backgroundColor: 'red'
    },
    title: {
        fontFamily: 'sans-serif',
        fontSize: 33,
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        marginBottom: 50
    },
    input: {
        color: 'white',
        height: 60,
        backgroundColor: 'rgb(193, 119, 103)',
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 25
    },
    inputPassword: {
        color: 'white',
        height: 60,
        backgroundColor: 'rgb(193, 119, 103)',
        paddingHorizontal: 10,
        marginBottom: 2,
        borderRadius: 25
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(109, 152, 186)',
        fontWeight: 'bold',
        fontSize: 18
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    bottomText: {
        fontFamily: 'sans-serif',
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
    }
})

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        usertype: state.auth.usertype,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, signupUser, typeUpdate, resetError})(SignupForm);