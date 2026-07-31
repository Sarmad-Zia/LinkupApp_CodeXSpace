import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../screens/ArticlesScreen/style';

const ArticleCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.articleCard} activeOpacity={0.85}>
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.articleBody}>
        <View style={styles.categoryPill}>
          <Text style={styles.categoryPillText}>{item.author}</Text>
        </View>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleExcerpt} numberOfLines={2}>
          {item.excerpt}
        </Text>
        <View style={styles.articleMetaRow}>
          <Text style={styles.articleMetaText}>{item.readTime}</Text>
          <Text style={styles.articleMetaDot}>•</Text>
          <Text style={styles.articleMetaText}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const renderArticleItem = ({ item }) => <ArticleCard item={item} />;

export default renderArticleItem;
