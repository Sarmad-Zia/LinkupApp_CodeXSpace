import React, { useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import marketplaceData from '../../data/marketplaceData.json';
import { styles } from './style';
import MarketplaceHeader from '../../componets/Marketplace/MarketplaceHeader';
import renderListingItem from '../../componets/Marketplace/ListingCard';

const MarketplaceScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const filteredListings = useMemo(() => {
    let data = marketplaceData;
    if (activeTab === 'Mine') {
      data = data.filter((item) => item.seller === 'Abdullah Azalea');
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
        data={filteredListings}
        keyExtractor={(item) => item.id}
        renderItem={renderListingItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <MarketplaceHeader
            navigation={navigation}
            searchText={searchText}
            setSearchText={setSearchText}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            listingCount={filteredListings.length}
          />
        }
      />
    </View>
  );
};

export default MarketplaceScreen;
