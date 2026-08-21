import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TrendingListItem.style';

const TrendingListItem = ({ item, index, onPress, isLast }) => {
  if (!item) return null;

  return (
    <TouchableOpacity
      style={[styles.container, isLast && styles.containerLast]}
      activeOpacity={0.7}
      onPress={() => onPress?.(item)}
    >
      <Text style={styles.rank}>{String(index + 1).padStart(2, '0')}</Text>
      <View style={styles.textWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingListItem;
