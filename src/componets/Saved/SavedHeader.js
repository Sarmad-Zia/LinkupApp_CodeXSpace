import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft, Search } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../theme/theme';

const SavedHeader = ({ searchValue, onSearchChange, filters, activeFilter, onFilterChange }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.backRow}
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <ChevronLeft size={26} color={theme.colors.text} strokeWidth={2.5} />
        <Text style={styles.title}>Saved</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Your collection of saved content</Text>

      <View style={styles.searchBar}>
        <Search size={18} color={theme.colors.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search saved"
          placeholderTextColor={theme.colors.textMuted}
          value={searchValue}
          onChangeText={onSearchChange}
        />
      </View>

      <View style={styles.filterRow}>
        {filters.map((filter) => {
          const isActive = filter.key === activeFilter;
          return (
            <TouchableOpacity
              key={filter.key}
              style={[styles.filterPill, isActive && styles.filterPillActive]}
              onPress={() => onFilterChange(filter.key)}
            >
              <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                {filter.count !== undefined && filter.count > 0
                  ? `${filter.label} (${filter.count})`
                  : filter.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SavedHeader;

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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.md,
    height: 46,
    marginTop: theme.spacing.lg,
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    fontSize: 15,
    color: theme.colors.inputText,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  filterPill: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 8,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  filterPillActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filterText: {
    fontSize: 13,
    fontWeight: theme.typography.bodyWeight,
    color: theme.colors.secondaryText,
  },
  filterTextActive: {
    color: theme.colors.primaryText,
    fontWeight: '700',
  },
});
