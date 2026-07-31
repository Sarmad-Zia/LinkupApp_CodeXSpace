import React, { useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import articlesData from '../../data/articlesData.json';
import { styles } from './style';
import ArticlesHeader from '../../componets/Articles/ArticlesHeader';
import renderArticleItem from '../../componets/Articles/ArticleCard';

const ArticlesScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const filteredArticles = useMemo(() => {
    let data = articlesData;
    if (activeTab === 'Mine') {
      data = data.filter((item) => item.author === 'Abdullah Azalea');
    }
    if (searchText.trim()) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return data;
  }, [searchText, activeTab]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        renderItem={renderArticleItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ArticlesHeader
            navigation={navigation}
            searchText={searchText}
            setSearchText={setSearchText}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        }
      />
    </View>
  );
};

export default ArticlesScreen;
