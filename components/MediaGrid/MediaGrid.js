import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './MediaGridStyles'
let stockPhotos = require("../../assets/image_urls.json");

const renderImages = (photo) => {
    return (<View style={styles.heroImageContainer}>
        <TouchableOpacity
            onPress={() => {
                console.log(photo.item.url)
                // setModalImage(photo.item.url);
                // setShowModal(true);
            }}
        >
            <Image source={{ uri: photo.item.url }} style={styles.image} />
        </TouchableOpacity>
    </View>)
}

const MediaGrid = () => {
    return (
        <View style={styles.mediaGridContainter}>
            <FlatList
                horizontal={false}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                data={stockPhotos}
                renderItem={renderImages}
            />
        </View >
    )
}

export default MediaGrid