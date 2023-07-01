import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_UTAMA } from '../../assets/utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
        <View style={styles.saldo}>
            <View style={styles.text}>
                <Text style={styles.labelSaldo}>Saldo :</Text>
                <Text style={styles.valueSaldo}>Rp.500.000</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.labelPoint}>Antar Point:</Text>
                <Text style={styles.valuePoint}>500 Point</Text>
            </View>
        </View>
        <View style={styles.buttonAksi}>
            <ButtonIcon title="Add Saldo"/>
            <Gap width={10}/>
            <ButtonIcon title="Get Point"/>
        </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;
export default Saldo

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 17, 
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginTop: -windowHeight * 0.05,
        flexDirection: 'row'
    },
    text:{
        flexDirection: 'row',
         justifyContent: 'space-between',
    },
    saldo:{
        width:'60%',
    },
    labelSaldo:{
        fontSize:20,
        fontFamily: 'TitilliumWeb-Regular'
    },
    valueSaldo:{
        fontSize:20,
        fontFamily: 'TitilliumWeb-Bold'
    },
    labelPoint:{
        fontSize:12,
        fontFamily: 'TitilliumWeb-Regular'
    },
    valuePoint:{
        fontSize:12,
        fontFamily: 'TitilliumWeb-Regular',
        color: WARNA_UTAMA
    },
    buttonAksi:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});