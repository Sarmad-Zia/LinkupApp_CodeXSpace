import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Search, Plus } from 'lucide-react-native';
import { styles } from '../../screens/MessageScreen/style';

const MessagesHeader = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.headerWrap}>
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.eyebrow}>INBOX</Text>
          <Text style={styles.pageTitle}>Messages</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={22} color="#3b82f6" />
        </TouchableOpacity>
      </View>
      <Text style={styles.pageSubtitle}>Direct conversations with your network</Text>

      <View style={styles.searchBarContainer}>
        <Search size={18} color="#94a3b8" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages"
          placeholderTextColor="#94a3b8"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
};

export default MessagesHeader;
