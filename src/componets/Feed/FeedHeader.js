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
 
 
 const renderHeader = () => (
    <View>
      {/* 1. Search Bar and Profile Icon Row */}
      <View style={styles.searchRow}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=150' }} 
          style={styles.profileAvatar} 
        />
        <View style={styles.searchBarContainer}>
          <Search size={20} color="#94a3b8" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search people, jobs, posts..." 
            placeholderTextColor="#94a3b8"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* 2. Top Navigation Sub-Pill Selection Filter */}
      <View style={styles.pillContainer}>
        <TouchableOpacity style={styles.inactivePill}>
          <User size={18} color="#64748b" style={styles.pillIcon} />
          <Text style={styles.inactivePillText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.activePill}>
          <Home size={18} color="#ffffff" style={styles.pillIcon} />
          <Text style={styles.activePillText}>Feed</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.inactivePill}>
          <Compass size={18} color="#64748b" style={styles.pillIcon} />
          <Text style={styles.inactivePillText}>Discover</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Create Creation Box Section */}
      <View style={styles.createPostCard}>
        <TextInput 
          placeholder="Start a post..." 
          placeholderTextColor="#94a3b8" 
          style={styles.createPostInput}
        />
        <View style={styles.mediaActionsRow}>
          <TouchableOpacity style={styles.mediaButton}><ImageIcon size={22} color="#64748b" /><Text style={styles.mediaText}>Photo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mediaButton}><Video size={22} color="#64748b" /><Text style={styles.mediaText}>Video</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mediaButton}><Smile size={22} color="#64748b" /><Text style={styles.mediaText}>Feeling</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mediaButton}><FileText size={22} color="#64748b" /><Text style={styles.mediaText}>Article</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mediaButton}><Store size={22} color="#64748b" /><Text style={styles.mediaText}>Marketpla...</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mediaButton}><Briefcase size={22} color="#64748b" /><Text style={styles.mediaText}>Job</Text></TouchableOpacity>
        </View>
      </View>

      {/* 4.Feed and Sort Text */}
      <View style={styles.metaDividerRow}>
        <Text style={styles.metaTitleText}>FEED</Text>
        <Text style={styles.metaSortText}>Sort</Text>
      </View>
    </View>
  );

  export default renderHeader;