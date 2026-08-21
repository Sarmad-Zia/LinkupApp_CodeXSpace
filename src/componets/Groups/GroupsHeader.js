import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft, Search, Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../theme/theme';

const GroupsHeader = ({
  searchValue,
  onSearchChange,
  onCreatePress,
  activeTab,
  onTabChange,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.backRow}
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <ChevronLeft size={26} color={theme.colors.text} strokeWidth={2.5} />
        <Text style={styles.title}>Groups</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Private and interest-based groups</Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Search size={18} color={theme.colors.textMuted} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search groups"
            placeholderTextColor={theme.colors.textMuted}
            value={searchValue}
            onChangeText={onSearchChange}
          />
        </View>

        <TouchableOpacity style={styles.createButton} onPress={onCreatePress}>
          <Plus size={18} color={theme.colors.primaryText} strokeWidth={2.5} />
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tabPill, activeTab === 'your' && styles.tabPillActive]}
          onPress={() => onTabChange('your')}
        >
          <Text style={[styles.tabText, activeTab === 'your' && styles.tabTextActive]}>
            Your Groups
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabPill, activeTab === 'discover' && styles.tabPillActive]}
          onPress={() => onTabChange('discover')}
        >
          <Text style={[styles.tabText, activeTab === 'discover' && styles.tabTextActive]}>
            Discover Groups
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupsHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    backgroundColor: theme.colors.background,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: theme.typography.headingWeight,
    color: theme.colors.text,
    marginLeft: theme.spacing.xs,
  },
  subtitle: {
    fontSize: 15,
    color: theme.colors.secondaryText,
    marginTop: theme.spacing.xs,
    marginLeft: 34,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.md,
    height: 46,
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    fontSize: 15,
    color: theme.colors.inputText,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    height: 46,
    gap: 6,
  },
  createButtonText: {
    color: theme.colors.primaryText,
    fontWeight: '700',
    fontSize: 15,
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  tabPill: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 10,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  tabPillActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  tabTextActive: {
    color: theme.colors.primaryText,
  },
});
