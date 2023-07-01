import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Halaman Home</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',{
                    nama: 'Rachman',
                    umur: '19'
                })}>
                    <Text>Pindah</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;