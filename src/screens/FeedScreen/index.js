/* ==========================================
   Formated By jsformatter (Prettier) - https://prettier.io
   ========================================== */

import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList
} from 'react-native';


// Import our JSON feed data file
import postsData from '../../data/mockData.json';
import { styles } from './style';
import renderPostItem from '../../componets/Feed/FeedCard';
import renderHeader from '../../componets/Feed/FeedHeader';
import FeedToggle from '../../componets/FeedToggle/index';
import ProfileScreen from '../ProfileScreen/index';
import Discover from '../../componets/Discover/index';

const FeedScreen = () => {
  // Inside your parent component (e.g., HomeScreen.js)
  const [currentSelection, setCurrentSelection] = useState('Feed');

  useEffect(() => {
    console.log('Current Selection:', currentSelection);
  }, [currentSelection]);

  return (
    <View style={styles.feedContainer}>
      <FeedToggle
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection} // <-- Make sure this line exists!
      />
      {
        currentSelection === 'Feed' && (
          <FlatList
            data={postsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPostItem}
            ListHeaderComponent={renderHeader}
            showsVerticalScrollIndicator={false}
          />)
      }
      {
        currentSelection === 'Profile' && (
          <ProfileScreen/>
        )
      }
      {
        currentSelection === 'Discover' && (
          <Discover />
        )
      }
    </View>
  );
};

export default FeedScreen;


