import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './RelatedArticleCard.style';
import { useNavigation } from '@react-navigation/native';

const RelatedArticleCard = ({ article, onPress }) => {
  const navigation = useNavigation();
  if (!article) return null;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      // onPress={() => onPress?.(article)}
      onPress={() => {
        navigation.navigate('ArticleDetail', {
          article: article,
        });
      }}

    >
      <Image source={{ uri: article.image }} style={styles.thumbnail} />
      <View style={styles.textWrap}>
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {article.author} · {article.readTime}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RelatedArticleCard;
