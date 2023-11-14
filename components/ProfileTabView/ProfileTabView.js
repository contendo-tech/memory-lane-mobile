import React, { useState, useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import mediaTabs from '../../assets/dummy_data/profile_tabs'
import styles from './ProfileTabViewStyles'
import MediaGrid from '../MediaGrid/MediaGrid';

const ProfileTabView = (props) => {
    const itemsRef = useRef([])
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.profileTabViewContainer}>
            <View style={styles.mediaTabContainer}>
                {mediaTabs.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        ref={(el) => itemsRef.current[index] = el}
                        style={activeIndex === index ? styles.activeTab : styles.inactiveTab}
                        // style={styles.activeTab}
                        onPress={() => { { setActiveIndex(index) } }}
                    >
                        <Entypo name={item.image} size={24} color={activeIndex === index ? "black" : "grey"} />
                    </TouchableOpacity>
                ))}
            </View>
            <MediaGrid />
        </View>
    )
}

export default ProfileTabView