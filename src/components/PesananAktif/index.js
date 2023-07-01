import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { IconMesin } from '../../assets'
import { WARNA_ABU, WARNA_UTAMA, WARNA_WARNING } from '../../assets/utils/constant'

const PesananAktif = ({title,status}) => {
  return (
        <TouchableOpacity style={styles.container}>
            <IconMesin/>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status(status)}>{status}</Text>
            </View>
        </TouchableOpacity>
  )
}
const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;
export default PesananAktif

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        padding: 17,
        backgroundColor: 'white',
        marginVertical: windowHeight * 0.02,
        alignItems:'center'
    },
    text:{
        marginLeft: windowWidth * 0.02,
    },
    title:{
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 18,
    },
    status:(status)=>({
        fontFamily: 'TitilliumWeb-light',
        fontSize: 14,
        color: status === "Masih Dicuci" ? WARNA_WARNING : status === "Sudah Selesai" ? WARNA_UTAMA : 'blue',
    })
})