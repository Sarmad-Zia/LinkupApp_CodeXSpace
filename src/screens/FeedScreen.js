/* ==========================================
   Formated By jsformatter (Prettier) - https://prettier.io
   ========================================== */

import React from 'react';
import { 
  StyleSheet, 
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
import postsData from '../data/mockData.json';

const FeedScreen = () => {

  // Sub-header components at the very top of the scroll list
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

  // Individual Render Function for Post Cards
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

  return (
    <FlatList
      data={postsData}
      renderItem={renderPostItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
      style={styles.feedContainer}
      contentContainerStyle={styles.feedContentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedScreen;

/* ==========================================
   STYLING SPEC SHEET
   ========================================== */
const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  feedContentContainer: {
    padding: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 14,
    height: 46,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1e293b',
  },
  pillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 14,
    flex: 0.31,
    justifyContent: 'center',
  },
  activePillText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  inactivePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flex: 0.31,
    justifyContent: 'center',
  },
  inactivePillText: {
    color: '#475569',
    fontWeight: '500',
    fontSize: 14,
  },
  pillIcon: {
    marginRight: 6,
  },
  createPostCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  createPostInput: {
    fontSize: 16,
    color: '#1e293b',
    height: 40,
    marginBottom: 16,
  },
  mediaActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mediaButton: {
    alignItems: 'center',
    flex: 1,
  },
  mediaText: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 4,
    fontWeight: '500',
  },
  metaDividerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  metaTitleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#94a3b8',
    letterSpacing: 0.5,
  },
  metaSortText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1e293b',
  },
  postCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  postUserName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  postTimeText: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  postContentText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 10,
    marginBottom: 10,
  },
  statsText: {
    fontSize: 13,
    color: '#64748b',
    marginLeft: 12,
    fontWeight: '500',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionItemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    marginLeft: 4,
  },
});