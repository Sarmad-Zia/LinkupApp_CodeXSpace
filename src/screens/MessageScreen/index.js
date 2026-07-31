import React, { useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import messagesData from '../../data/messagesData.json';
import { styles } from './style';
import MessagesHeader from '../../componets/Messages/MessagesHeader';
import renderMessageItem from '../../componets/Messages/MessageListItem';

const MessagesScreen = () => {
  const [searchText, setSearchText] = useState('');

  const filteredMessages = useMemo(() => {
    if (!searchText.trim()) return messagesData;
    return messagesData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <MessagesHeader searchText={searchText} setSearchText={setSearchText} />
        }
      />
    </View>
  );
};

export default MessagesScreen;
