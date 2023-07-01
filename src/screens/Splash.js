import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { StackActions } from '@react-navigation/native';
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 5000)
    }

    render() {
        return (
            <View>
                <Text>Halaman Splash</Text>
            </View>
        );
    }
}

export default Splash;