import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { UserPlus2 } from 'lucide-react-native';
import { styles } from '../../screens/MyHubScreen/style';

const initialOf = (name) => (name ? name.trim().charAt(0).toUpperCase() : '?');

const FollowSuggestionCard = ({ item }) => {
  return (
    <View style={styles.followSuggestionCard}>
      {item.avatar ? (
        <Image source={{ uri: item.avatar }} style={styles.followSuggestionAvatar} />
      ) : (
        <View style={styles.followSuggestionAvatarFallback}>
          <Text style={styles.followSuggestionAvatarFallbackText}>{initialOf(item.name)}</Text>
        </View>
      )}
      <Text style={styles.followSuggestionName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.followSuggestionRole} numberOfLines={1}>
        {item.role}
      </Text>
      <TouchableOpacity style={styles.followSuggestionButton}>
        <UserPlus2 size={14} color="#ffffff" />
        <Text style={styles.followSuggestionButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FollowSuggestionCard;
