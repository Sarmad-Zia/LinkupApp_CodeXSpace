/* ==========================================
   Formated By jsformatter (Prettier) - https://prettier.io
   ========================================== */

import React from 'react';
import { 
  Text, 
  View, 
  TextInput,
  TouchableOpacity, 
  Image, 
  FlatList 
} from 'react-native';
import { 
  User, 
  Home, 
  Compass, 
  Search, 
  Image as ImageIcon, 
  Video, 
  Smile, 
  FileText, 
  Store, 
  Briefcase, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageSquare, 
  Repeat, 
  Share2, 
  Bookmark 
} from 'lucide-react-native';

// Import our JSON feed data file
import postsData from '../../data/mockData.json';
import { styles } from './style';
import renderPostItem from '../../componets/Feed/FeedCard';
import renderHeader from '../../componets/Feed/FeedHeader';

const FeedScreen = () => {

  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;


