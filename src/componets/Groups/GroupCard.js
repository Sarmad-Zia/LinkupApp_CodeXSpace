import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

const GroupCard = ({ group, onJoin }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: group.imageUrl }} style={styles.image} />

      <View style={styles.body}>
        <Text style={styles.name}>{group.name}</Text>
        <Text style={styles.meta}>
          {group.membersCount} members · {group.visibility}
        </Text>
        <Text style={styles.description}>{group.description}</Text>

        <TouchableOpacity style={styles.joinButton} onPress={() => onJoin?.(group.id)}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    marginBottom: theme.spacing.lg,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  body: {
    padding: theme.spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  meta: {
    fontSize: 13,
    color: theme.colors.textMuted,
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: theme.colors.bodyText,
    marginTop: theme.spacing.xs,
  },
  joinButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  joinButtonText: {
    color: theme.colors.primaryText,
    fontWeight: '700',
    fontSize: 15,
  },
});
