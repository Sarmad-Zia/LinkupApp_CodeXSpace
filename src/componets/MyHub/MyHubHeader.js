import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import { styles } from '../../screens/MyHubScreen/style';

const MyHubHeader = ({ searchText, setSearchText, linkUpCount }) => {
  return (
    <View style={styles.headerWrap}>
      <Text style={styles.eyebrow}>NETWORK HUB</Text>
      <Text style={styles.pageTitle}>My Hub</Text>
      <Text style={styles.pageSubtitle}>{linkUpCount} Link UPs across your network</Text>

      <View style={styles.searchBarContainer}>
        <Search size={18} color="#94a3b8" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Link UP..."
          placeholderTextColor="#94a3b8"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
};

export default MyHubHeader;
