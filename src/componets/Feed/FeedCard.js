 /* ==========================================
   Formated By jsformatter (Prettier) - https://prettier.io
   ========================================== */

import React from 'react';
import { styles } from './style';
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
 

const renderPostItem = ({ item }) => (
    <View style={styles.postCard}>
      {/* Post Owner Header Info Row */}
      <View style={styles.postHeaderRow}>
        <View style={styles.postHeaderLeft}>
          <Image source={{ uri: item.userAvatar }} style={styles.postAvatar} />
          <View>
            <Text style={styles.postUserName}>{item.userName}</Text>
            <Text style={styles.postTimeText}>{item.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MoreHorizontal size={20} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Optional Card Content Text Body */}
      {item.content ? <Text style={styles.postContentText}>{item.content}</Text> : null}

      {/* Stats Counter Metadata Row */}
      <View style={styles.statsRow}>
        <Text style={styles.statsText}>{item.commentsCount} comments</Text>
        <Text style={styles.statsText}>{item.sharesCount} shares</Text>
      </View>

      {/* Bottom Engagement Actions Interaction Footer */}
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity style={styles.actionItemButton}><ThumbsUp size={18} color="#475569" /><Text style={styles.actionButtonText}>Like</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionItemButton}><MessageSquare size={18} color="#475569" /><Text style={styles.actionButtonText}>{item.commentsCount}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionItemButton}><Repeat size={18} color="#475569" /><Text style={styles.actionButtonText}>Repost</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionItemButton}><Share2 size={18} color="#475569" /><Text style={styles.actionButtonText}>Share</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionItemButton}><Bookmark size={18} color="#475569" /><Text style={styles.actionButtonText}>Save</Text></TouchableOpacity>
      </View>
    </View>
  );

export default renderPostItem;