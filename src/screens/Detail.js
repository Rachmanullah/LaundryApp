import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Halaman Detail</Text>
                <Text>{  this.props.route.params.nama  }</Text>
                <Text>{  this.props.route.params.umur  }</Text>
                <Text>Halaman Detail</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                    <Text>Balik</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Detail;