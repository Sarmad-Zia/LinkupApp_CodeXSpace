import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Plus, BarChart3, Search, SlidersHorizontal, ChevronDown } from 'lucide-react-native';
import { styles } from '../../screens/JobsScreen/style';

const JobsHeader = ({ searchText, setSearchText, jobCount }) => {
  return (
    <View style={styles.headerWrap}>
      <Text style={styles.pageTitle}>Find your next opportunity</Text>
      <Text style={styles.pageSubtitle}>Discover jobs that match your skills and aspirations</Text>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.postJobButton}>
          <Plus size={18} color="#ffffff" />
          <Text style={styles.postJobButtonText}>Post a Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardButton}>
          <BarChart3 size={18} color="#3b82f6" />
          <Text style={styles.dashboardButtonText}>Hiring Dashboard</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <Search size={18} color="#94a3b8" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title, company, or keywords"
          placeholderTextColor="#94a3b8"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <TouchableOpacity style={styles.filtersButton}>
        <SlidersHorizontal size={16} color="#475569" />
        <Text style={styles.filtersButtonText}>Filters</Text>
        <ChevronDown size={16} color="#475569" />
      </TouchableOpacity>

      <Text style={styles.jobCountText}>{jobCount} jobs</Text>
    </View>
  );
};

export default JobsHeader;
