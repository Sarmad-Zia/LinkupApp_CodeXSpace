import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { User } from 'lucide-react-native';
import { styles } from '../../screens/MessageScreen/style';

const MessageListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.messageRow} activeOpacity={0.85}>
      <View style={styles.avatarWrap}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarFallback}>
            <User size={22} color="#94a3b8" />
          </View>
        )}
        {item.online && <View style={styles.onlineDot} />}
      </View>

      <View style={styles.messageContent}>
        <Text style={styles.messageName}>{item.name}</Text>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>

      <View style={styles.messageMeta}>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderMessageItem = ({ item }) => <MessageListItem item={item} />;

export default renderMessageItem;
