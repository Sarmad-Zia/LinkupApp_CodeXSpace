import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Briefcase, Users2 } from 'lucide-react-native';
import { styles } from '../../screens/MyHubScreen/style';

export const MarketplaceMiniItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.miniRow} activeOpacity={0.85}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.miniThumb} />
      ) : (
        <View style={styles.miniIconWrap}>
          <Briefcase size={18} color="#3b82f6" />
        </View>
      )}
      <View style={styles.miniContent}>
        <Text style={styles.miniTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.miniSubtitle}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const GroupItem = ({ item }) => {
  return (
    <View style={styles.miniRow}>
      <View style={styles.miniIconWrap}>
        <Users2 size={18} color="#3b82f6" />
      </View>
      <View style={styles.miniContent}>
        <Text style={styles.miniTitle}>{item.name}</Text>
        <Text style={styles.miniSubtitle}>{item.members} members</Text>
      </View>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CommunityItem = ({ item }) => {
  return (
    <View style={styles.miniRow}>
      <View style={styles.miniIconWrap}>
        <Users2 size={18} color="#3b82f6" />
      </View>
      <View style={styles.miniContent}>
        <Text style={styles.miniTitle}>{item.name}</Text>
        <Text style={styles.miniSubtitle}>{item.members} members</Text>
      </View>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};
