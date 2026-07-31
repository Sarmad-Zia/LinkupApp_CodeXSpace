import React, { useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import jobsData from '../../data/jobsData.json';
import { styles } from './style';
import JobsHeader from '../../componets/Jobs/JobsHeader';
import renderJobItem from '../../componets/Jobs/JobCard';

const JobsScreen = () => {
  const [searchText, setSearchText] = useState('');

  const filteredJobs = useMemo(() => {
    if (!searchText.trim()) return jobsData;
    const q = searchText.toLowerCase();
    return jobsData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) || item.company.toLowerCase().includes(q)
    );
  }, [searchText]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderJobItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <JobsHeader
            searchText={searchText}
            setSearchText={setSearchText}
            jobCount={filteredJobs.length}
          />
        }
      />
    </View>
  );
};

export default JobsScreen;
