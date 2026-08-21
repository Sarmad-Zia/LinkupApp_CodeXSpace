import React, { useMemo, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import GroupsHeader from '../../componets/Groups/GroupsHeader';
import GroupCard from '../../componets/Groups/GroupCard';
import groupsDataRaw from '../../data/groupsData.json';
import { styles } from './style';

const GroupsScreen = () => {
  const [yourGroups] = useState(groupsDataRaw.yourGroups);
  const [discoverGroups] = useState(groupsDataRaw.discoverGroups);
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('your');

  const filteredDiscoverGroups = useMemo(() => {
    if (!searchValue) return discoverGroups;
    return discoverGroups.filter((group) =>
      group.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [discoverGroups, searchValue]);

  const handleJoin = (id) => {
    // Hook up to your join-group API call here.
    console.log('Join group', id);
  };

  const handleCreate = () => {
    // Hook up to your create-group flow here.
    console.log('Create group pressed');
  };

  const dataToRender = activeTab === 'your' ? yourGroups : filteredDiscoverGroups;

  return (
    <View style={styles.container}>
      <GroupsHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onCreatePress={handleCreate}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <FlatList
        data={dataToRender}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard group={item} onJoin={handleJoin} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {activeTab === 'your'
              ? 'You are not in any groups yet.'
              : 'No groups found.'}
          </Text>
        }
      />
    </View>
  );
};

export default GroupsScreen;
