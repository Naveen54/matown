import { StyleSheet, Text, View, TextInput } from 'react-native'
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants'
import React from 'react'
import SearchBox from './SearchBox'

const HeaderCard = () => {
    return (
        <View style={styles.headercard}>
            <SearchBox placeholder={"Search Items for Shop"}/>
        </View>
    )
}

export default HeaderCard

const styles = StyleSheet.create({
    headercard: {
        width: '100%',
        height: 350,
        flexDirection: 'row',
        backgroundColor: 'lightgreen',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
        justifyContent:'center'
    },
    
})