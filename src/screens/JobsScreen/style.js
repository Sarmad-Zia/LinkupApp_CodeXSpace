import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContent: {
    padding: 16,
    paddingBottom: 24,
  },

  headerWrap: {
    marginBottom: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 6,
  },
  pageSubtitle: {
    fontSize: 14,
    color: theme.colors.bodyText,
    marginBottom: 16,
  },

  actionRow: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  postJobButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 14,
    flex: 1,
    marginRight: 10,
  },
  postJobButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 6,
  },
  dashboardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.card,
    paddingVertical: 12,
    borderRadius: 14,
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  dashboardButtonText: {
    color: theme.colors.primary,
    fontWeight: '700',
    marginLeft: 6,
  },

  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 12,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: theme.colors.inputText },

  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 14,
    marginBottom: 12,
  },
  filtersButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.secondaryText,
    marginHorizontal: 6,
  },

  jobCountText: {
    fontSize: 13,
    color: theme.colors.textMuted,
    marginBottom: 14,
  },

  // Job card
  jobCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 16,
  },
  jobHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  jobIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  jobHeaderText: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.colors.text,
  },
  jobCompany: {
    fontSize: 14,
    color: theme.colors.bodyText,
    marginTop: 2,
  },
  bookmarkButton: {
    padding: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 13,
    color: theme.colors.textMuted,
    marginLeft: 4,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.secondaryText,
  },
  salaryRow: {
    marginBottom: 4,
  },
  salaryText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  postedText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginBottom: 14,
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 13,
    borderRadius: 14,
  },
  applyButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 8,
    fontSize: 15,
  },
});
