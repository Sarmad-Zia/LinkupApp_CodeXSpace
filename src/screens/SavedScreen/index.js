import React, { useMemo, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import SavedHeader from '../../componets/Saved/SavedHeader';
import SavedItemCard from '../../componets/Saved/SavedItemCard';
import savedDataRaw from '../../data/savedData.json';
import { styles } from './style';

const FILTER_LABELS = {
  all: 'All',
  Post: 'Posts',
  Article: 'Articles',
  Listing: 'Listings',
};

const SavedScreen = () => {
  const [savedItems, setSavedItems] = useState(savedDataRaw);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = useMemo(() => {
    const counts = savedItems.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});

    return [
      { key: 'all', label: FILTER_LABELS.all, count: savedItems.length },
      { key: 'Post', label: FILTER_LABELS.Post, count: counts.Post || 0 },
      { key: 'Article', label: FILTER_LABELS.Article, count: counts.Article || 0 },
      { key: 'Listing', label: FILTER_LABELS.Listing, count: counts.Listing || 0 },
    ];
  }, [savedItems]);

  const filteredItems = useMemo(() => {
    return savedItems.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
      const matchesSearch =
        !searchValue ||
        item.authorName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.caption.toLowerCase().includes(searchValue.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [savedItems, activeFilter, searchValue]);

  const handleUnsave = (id) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <SavedHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SavedItemCard item={item} onUnsave={handleUnsave} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nothing saved here yet.</Text>
        }
      />
    </View>
  );
};

export default SavedScreen;
