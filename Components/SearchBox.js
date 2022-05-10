import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const SearchBox = (props) => {
  return (
    <View style={styles.searchbox}>
                <TextInput
                    placeholder={props.placeholder}
                />
            </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    searchbox: {
        backgroundColor: 'white',
        width:'90%',
        borderRadius:10,
        height:50,
        padding:10

    }
})