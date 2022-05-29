import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ItemCard = () => {
    return (
        <View style={styles.itemCardContainer}>
            <View style={styles.ImageContainer}>
                <Image style={styles.foodImage} resizeMode='cover' source={{ uri: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
            </View>
            <View style={styles.contentContainer}>
                <Text>
                    Content
                </Text>
            </View>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    itemCardContainer: {
        flexDirection: 'row',
        height: 200,
        margin: 10,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: 'white'

    },
    ImageContainer: {
        width: '40%'
    },
    contentContainer: {
        width: '60%',
        padding:10
    },
    foodImage: {
        width: '90%',
        height: '90%',
        borderRadius: 10,
        margin:10
    }
})