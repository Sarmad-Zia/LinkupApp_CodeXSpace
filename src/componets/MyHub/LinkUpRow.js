import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MessageCircle, Link2, MapPin } from 'lucide-react-native';
import { styles } from '../../screens/MyHubScreen/style';

const initialOf = (name) => (name ? name.trim().charAt(0).toUpperCase() : '?');

const LinkUpRow = ({ item }) => {
  return (
    <View style={styles.linkUpRow}>
      {item.avatar ? (
        <Image source={{ uri: item.avatar }} style={styles.linkUpAvatar} />
      ) : (
        <View style={styles.linkUpAvatarFallback}>
          <Text style={styles.linkUpAvatarFallbackText}>{initialOf(item.name)}</Text>
        </View>
      )}

      <View style={styles.linkUpContent}>
        <Text style={styles.linkUpName}>{item.name}</Text>
        <Text style={styles.linkUpRole}>{item.role}</Text>
        <View style={styles.linkUpStatusRow}>
          <View style={styles.linkedBadge}>
            <Link2 size={12} color="#16a34a" />
            <Text style={styles.linkedBadgeText}>{item.status}</Text>
          </View>
          {item.location && (
            <View style={styles.linkUpLocationRow}>
              <MapPin size={12} color="#94a3b8" />
              <Text style={styles.linkUpLocationText}>{item.location}</Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.chatIconButton}>
        <MessageCircle size={18} color="#3b82f6" />
      </TouchableOpacity>
    </View>
  );
};

export default LinkUpRow;
