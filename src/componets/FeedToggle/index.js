import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import {
    User,
    Home,
    Compass,
} from 'lucide-react-native'

const FeedToggle = ({currentSelection,setCurrentSelection}) => {
    return (
        <View style={styles.pillContainer}>
            <TouchableOpacity style={ currentSelection == 'Profile'? styles.activePill : styles.inactivePill} onPress={() => setCurrentSelection('Profile')}>
                <User size={18} color={currentSelection == 'Profile'? '#ffffff' : '#64748b'} style={styles.pillIcon} />
                <Text style={ currentSelection == 'Profile' ? styles.activePillText : styles.inactivePillText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={currentSelection == 'Feed' ? styles.activePill : styles.inactivePill} onPress={() => setCurrentSelection('Feed')}>
                <Home size={18} color={currentSelection == 'Feed'? '#ffffff' : '#64748b'} style={styles.pillIcon} />
                <Text style={ currentSelection == 'Feed' ? styles.activePillText : styles.inactivePillText}>Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={currentSelection == 'Discover' ? styles.activePill : styles.inactivePill} onPress={() => setCurrentSelection('Discover')}>
                <Compass size={18} color={currentSelection == 'Discover'? '#ffffff' : '#64748b'} style={styles.pillIcon} />
                <Text style={ currentSelection == 'Discover' ? styles.activePillText : styles.inactivePillText}>Discover</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FeedToggle