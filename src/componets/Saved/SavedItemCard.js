import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FileText, Bookmark } from 'lucide-react-native';
import { theme } from '../../theme/theme';

const SavedItemCard = ({ item, onUnsave }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.typeBadge}>
          <FileText size={14} color={theme.colors.primary} />
          <Text style={styles.typeBadgeText}>{item.type}</Text>
        </View>

        <TouchableOpacity style={styles.unsaveButton} onPress={() => onUnsave?.(item.id)}>
          <Bookmark size={14} color={theme.colors.primary} fill={theme.colors.primary} />
          <Text style={styles.unsaveText}>Unsave</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authorRow}>
        <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
        <Text style={styles.authorName}>{item.authorName}</Text>
      </View>

      {item.imageUrl ? (
        <Image source={{ uri: item.imageUrl }} style={styles.contentImage} />
      ) : null}

      {item.caption ? <Text style={styles.caption}>{item.caption}</Text> : null}
    </View>
  );
};

export default SavedItemCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.divider,
    borderRadius: theme.radius.lg,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 6,
  },
  typeBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  unsaveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.radius.lg,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: theme.colors.border,
    gap: 6,
  },
  unsaveText: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: theme.spacing.sm,
  },
  authorName: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.text,
  },
  contentImage: {
    width: '100%',
    height: 170,
    borderRadius: theme.radius.sm,
    marginTop: theme.spacing.sm,
    resizeMode: 'cover',
  },
  caption: {
    fontSize: 14,
    color: theme.colors.bodyText,
    marginTop: theme.spacing.sm,
  },
});
