import { StyleSheet, Text, View, ImageBackground, Dimensions,Image,ScrollView } from 'react-native'
import React from 'react'
import { ImageHeader,Logo } from '../../assets'
import { ButtonIcon, PesananAktif, Saldo } from '../../components'
import { WARNA_ABU } from '../../assets/utils/constant'

const Home = () => {
  return (
    <View style={ styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
            <Image source={Logo} styles={styles.logo} />
            <View style={styles.hello}> 
              <Text style={styles.selamat}>Selamat Datang,</Text>
              <Text style={styles.username}>Rachmanullah</Text>
            </View>
        </ImageBackground>
        <Saldo/>
        <View style={styles.layanan}>
            <Text style={styles.label}>Layanan Kami</Text>
            <View style={styles.iconLayanan}>
                <ButtonIcon title="Kiloan" type="layanan"/>
                <ButtonIcon title="Satuan" type="layanan"/>
                <ButtonIcon title="VIP" type="layanan"/>
                <ButtonIcon title="Karpet" type="layanan"/>
                <ButtonIcon title="Setrika Saja" type="layanan"/>
                <ButtonIcon title="Ekspress" type="layanan"/>
            </View>
        </View>
        <View style={styles.pesananAktif}>
            <Text style={styles.label}>Pesanan Aktif</Text>
            <PesananAktif title="Pesanan No. 0002145" status="Sudah Selesai"/>
            <PesananAktif title="Pesanan No. 0002146" status="Masih Dicuci"/>
            <PesananAktif title="Pesanan No. 0002147" status="Sudah Dikirim"/>
            <PesananAktif title="Pesanan No. 0002148" status="Masih Dicuci"/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page:{
      flex: 1,
      backgroundColor: 'white'
    },
    header:{
        width : windowWidth,
        height: windowHeight * 0.30,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo:{
        width: windowWidth * 0.25,
        height: windowHeight * 0.5
    },
    hello:{
      marginTop: windowHeight * 0.030
    },
    selamat:{
      fontSize: 25,
      fontFamily: 'Bitter-ExtraLight'
    },
    username:{
      fontSize:16,
      fontFamily: 'Bitter-SemiBoldItalic'
    },
    layanan:{
      paddingLeft: 30,
      paddingTop: 15
    },
    label:{
      fontSize: 18,
      fontFamily: 'TitilliumWeb-Bold'
    },
    iconLayanan:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
      flexWrap: 'wrap'
    },
    pesananAktif:{
      paddingHorizontal: 30,
      backgroundColor: WARNA_ABU,
      flex: 1,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingTop: 10
    }
})