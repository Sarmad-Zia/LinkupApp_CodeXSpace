import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Briefcase, Zap, LayoutGrid, User, Search, SlidersHorizontal } from 'lucide-react-native';
import { styles } from '../../screens/MarketplaceScreen/style';

const MarketplaceHeader = ({
  navigation,
  searchText,
  setSearchText,
  activeTab,
  setActiveTab,
  listingCount,
}) => {
  return (
    <View style={styles.headerWrap}>
      {/* <TouchableOpacity onPress={() => navigation && navigation.goBack && navigation.goBack()}>
        <Text style={styles.backChevron}>{'<'}</Text>
      </TouchableOpacity> */}

      <View style={styles.titleRow}>
        <View style={styles.iconBadge}>
          <Briefcase size={28} color="#3b82f6" />
        </View>
        <View style={styles.titleTextWrap}>
          <Text style={styles.pageTitle}>Marketplace</Text>
          <Text style={styles.pageSubtitle}>
            Discover professional services and digital products from your network.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.postListingButton}>
        <Zap size={18} color="#ffffff" />
        <Text style={styles.postListingButtonText}>Post a Listing</Text>
      </TouchableOpacity>

      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={activeTab === 'All' ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTab('All')}
        >
          <LayoutGrid size={16} color={activeTab === 'All' ? '#ffffff' : '#475569'} />
          <Text style={activeTab === 'All' ? styles.activeTabText : styles.inactiveTabText}>
            All Listings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 'Mine' ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTab('Mine')}
        >
          <User size={16} color={activeTab === 'Mine' ? '#ffffff' : '#475569'} />
          <Text style={activeTab === 'Mine' ? styles.activeTabText : styles.inactiveTabText}>
            My Listings
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBarContainer}>
          <Search size={18} color="#94a3b8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search listings..."
            placeholderTextColor="#94a3b8"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal size={18} color="#475569" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.categoryPill}>
        <Briefcase size={14} color="#ffffff" />
        <Text style={styles.categoryPillText}>All</Text>
      </TouchableOpacity>

      <Text style={styles.listingCountText}>{listingCount} listings found</Text>
    </View>
  );
};

export default MarketplaceHeader;
