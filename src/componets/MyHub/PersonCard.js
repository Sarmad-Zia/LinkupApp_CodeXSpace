import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MoreHorizontal, Check, UserCheck, UserPlus2 } from 'lucide-react-native';
import { styles } from '../../screens/MyHubScreen/style';

const initialOf = (name) => (name ? name.trim().charAt(0).toUpperCase() : '?');

const PersonCard = ({ item }) => {
  const isLinked = item.status === 'linked';

  return (
    <View style={styles.personCard}>
      <View style={styles.personCoverWrap}>
        <View style={isLinked ? styles.personCoverDark : styles.personCoverLight} />
        <TouchableOpacity style={styles.personMoreButton}>
          <MoreHorizontal size={16} color="#ffffff" />
        </TouchableOpacity>

        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.personAvatar} />
        ) : (
          <View style={styles.personAvatarFallback}>
            <Text style={styles.personAvatarFallbackText}>{initialOf(item.name)}</Text>
          </View>
        )}
      </View>

      <View style={styles.personBody}>
        <Text style={styles.personName}>{item.name}</Text>
        <Text style={styles.personRole}>{item.role}</Text>
        <Text style={styles.personMutual}>{item.mutualLinkUps} mutual Link UPs</Text>

        {isLinked ? (
          <>
            <TouchableOpacity style={styles.linkedOutlineButton}>
              <UserCheck size={16} color="#16a34a" />
              <Text style={styles.linkedOutlineButtonText}>Linked</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followBackButton}>
              <UserPlus2 size={16} color="#1e293b" />
              <Text style={styles.followBackButtonText}>Follow Back</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.linkUpFilledButton}>
              <UserPlus2 size={16} color="#ffffff" />
              <Text style={styles.linkUpFilledButtonText}>Link UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followingButton}>
              <Check size={16} color="#94a3b8" />
              <Text style={styles.followingButtonText}>Following</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default PersonCard;
