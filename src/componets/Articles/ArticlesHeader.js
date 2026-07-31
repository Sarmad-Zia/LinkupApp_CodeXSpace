import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Search, SlidersHorizontal, Plus, LayoutGrid, User, TrendingUp } from 'lucide-react-native';
import { styles } from '../../screens/ArticlesScreen/style';

const trendingTopics = ['Design', 'Leadership', 'Technology', 'Career', 'Marketing'];

const ArticlesHeader = ({
  navigation,
  searchText,
  setSearchText,
  activeTab,
  setActiveTab,
}) => {
  return (
    <View style={styles.headerWrap}>
      <View style={styles.titleRow}>
        {/* <TouchableOpacity onPress={() => navigation && navigation.goBack && navigation.goBack()}>
          <Text style={styles.backChevron}>{'<'}</Text>
        </TouchableOpacity> */}
        <Text style={styles.pageTitle}>Articles</Text>
      </View>
      <Text style={styles.pageSubtitle}>Insights and stories from professionals worldwide</Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBarContainer}>
          <Search size={18} color="#94a3b8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#94a3b8"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal size={18} color="#475569" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.writeButton}>
          <Plus size={18} color="#ffffff" />
          <Text style={styles.writeButtonText}>Write</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={activeTab === 'All' ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTab('All')}
        >
          <LayoutGrid size={16} color={activeTab === 'All' ? '#ffffff' : '#475569'} />
          <Text style={activeTab === 'All' ? styles.activeTabText : styles.inactiveTabText}>
            All Articles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 'Mine' ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTab('Mine')}
        >
          <User size={16} color={activeTab === 'Mine' ? '#ffffff' : '#475569'} />
          <Text style={activeTab === 'Mine' ? styles.activeTabText : styles.inactiveTabText}>
            My Articles
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trendingRow}>
        <TrendingUp size={16} color="#3b82f6" />
        <Text style={styles.trendingTitle}>Trending in Articles</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillsScroll}>
        {trendingTopics.map((topic) => (
          <TouchableOpacity key={topic} style={styles.trendingPill}>
            <Text style={styles.trendingPillText}>{topic}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ArticlesHeader;
