import React, { Component } from 'react';
import { Text,View,Image,TouchableOpacity,StatusBar, Switch,TextInput,ScrollView,FlatList,Alert,BackHandler,ToastAndroid } from 'react-native';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            header: 'Home', 
            username: '',
            data:[
                {
                nama: 'Rachmanullah',
                role: 'Admin',
                },
                {
                    nama: 'Tania',
                    role: 'owner',
                },
                {
                    nama: 'Estu',
                    role: 'user',
                },
            ],
        };
    }

    backaction = () => {
        Alert.alert('Perhatian', 'Apakah Anda Yakin ?', [
            {
                text: 'cancel',
                onPress: () => null,
                style: 'cancel'
            },
            {
                text: 'Yakin',
                onPress: () => BackHandler.exitApp(),
            }
        ]);
        return true;
    };
    componentDidMount(){
        this.BackHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            this.backaction,
        );
    }
    componentWillUnmount(){
        this.BackHandler.remove();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ 
                    backgroundColor: 'cyan',
                    paddingVertical: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 10,
                 }}>
                    <Text style={{ color:'Black', fontWeight:'bold', fontSize:20 }}>{this.state.header}</Text>
                 </View>
                 <View style={{ justifyContent:'center', alignItems:'center' }}>
                    <Image 
                        source={require('./image/civic2.jpg')}
                        style={{ 
                            width: 500,
                            height: 300
                        }}
                        resizeMode="stretch"
                    />
                 </View>
                 <FlatList 
                    style={{ flex:1 }}
                    data={this.state.data}
                    renderItem={({item, index})=>(
                        <TouchableOpacity 
                        style={{ 
                            margin:10, 
                            backgroundColor:'cyan',
                            borderRadius:15, 
                            padding:10 
                        }}
                        onPress={()=> ToastAndroid.show(item.nama+ ' DiPilih',ToastAndroid.LONG)}>
                            <Text> {item.nama} </Text>
                            <Text> {item.role} </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.nama}
                 />
                 <TextInput 
                    value={this.state.username} 
                    style={{
                        margin: 10,
                        borderWidth:1,
                        marginHorizontal:20,
                        paddingHorizontal:10,
                        
                    }}
                    onChangeText={(value) => this.setState({username: value})}
                />
                 <TouchableOpacity style={{ 
                    backgroundColor:'cyan',
                    paddingVertical: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    elevation:10,
                    marginHorizontal:20,
                    borderRadius:10
                  }} onPress={() => Alert.alert('Penting', this.state.username, [
                    {
                        text:'Close',
                        onPress:() => null,
                        style: 'cancel'
                    },
                    {
                        text:'Submit',
                        onPress:() => console.log('Dikirim')
                    }
                    ])}>
                    <Text style={{ color:'black' , fontFamily:'courier new', fontWeight: 'bold', fontSize:20}}>Click</Text>
                 </TouchableOpacity>
            </View>
        );
    }
}

export default App;