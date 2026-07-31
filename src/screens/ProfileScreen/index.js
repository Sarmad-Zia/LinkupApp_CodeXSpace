import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import {
  User, Home, Compass, Search, Image as ImageIcon, Video, Smile,
  FileText, Store, Briefcase, MoreHorizontal, ThumbsUp, MessageSquare,
  Bookmark, ChevronRight, Star, Calendar, Bookmark as Ribbon,
  Users, GraduationCap
} from 'lucide-react-native';

import { styles } from './style';

const ProfileScreen = () => {
  const [currentSelection, setCurrentSelection] = useState('Profile');

  // Dynamically using online source links matching WhatsApp Image 2026-06-29 at 4.03.16 PM.jpeg
  const profileData = {
    "name": "Abdullah Azalea",
    "bio": "Test",
    "profileViewers": 1,
    "postImpressions": 45200,
    "linkUps": 7,
    "profileStrength": "60%",
    "strengthLevel": "INTERMEDIATE",
    "bannerUrl": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600",
    "avatarUrl": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=200"
  }


  return (
    <View style={styles.feedContainer}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.profileScrollBody}>

        {/* Main profile identity container */}
        <View style={styles.profileMainCard}>
          <Image
            source={{ uri: profileData.bannerUrl }}
            style={styles.bannerImage}
          />
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: profileData.avatarUrl }}
              style={styles.avatarImage}
            />
          </View>

          <Text style={styles.userNameText}>{profileData.name}</Text>
          <Text style={styles.userBioText}>{profileData.bio}</Text>

          <View style={styles.dividerLine} />

          {/* Metrics Matrix Blocks */}
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Profile viewers</Text>
            <Text style={styles.analyticsValue}>{profileData.profileViewers}</Text>
          </View>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Post impressions</Text>
            <Text style={[styles.analyticsValue, { color: '#1d4ed8' }]}>
              {profileData.postImpressions.toLocaleString()}
            </Text>
          </View>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Link UPs</Text>
            <Text style={styles.analyticsValue}>{profileData.linkUps}</Text>
          </View>
        </View>

        {/* Setup Progress Matrix */}
        <View style={styles.strengthCard}>
          <View style={styles.strengthHeaderRow}>
            <View style={styles.strengthIconBox}>
              <Star size={18} color="#1d4ed8" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.strengthTitle}>Profile Strength</Text>
              <Text style={styles.strengthSubTitle}>{profileData.strengthLevel}</Text>
            </View>
            <Text style={styles.strengthPercentage}>{profileData.profileStrength}</Text>
          </View>

          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: profileData.profileStrength }]} />
          </View>

          <TouchableOpacity style={styles.completeProfileButton}>
            <Text style={styles.completeButtonText}>Complete your profile</Text>
            <ChevronRight size={18} color="#1d4ed8" />
          </TouchableOpacity>
        </View>

        {/* Extended Action List Links */}
        <View style={styles.menuLinksCard}>
          <TouchableOpacity style={styles.menuItemRow}>
            <Ribbon size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Saved items</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemRow}>
            <Users size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Communities / Groups</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemRow}>
            <Calendar size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Events</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemRow}>
            <FileText size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Articles</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItemRow, { borderBottomWidth: 0 }]}>
            <GraduationCap size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Learning</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default ProfileScreen;