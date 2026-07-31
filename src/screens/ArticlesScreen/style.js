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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  backChevron: {
    fontSize: 26,
    color: theme.colors.text,
    marginRight: 10,
    fontWeight: '600',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: theme.colors.text,
  },
  pageSubtitle: {
    fontSize: 14,
    color: theme.colors.bodyText,
    marginBottom: 16,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 14,
    height: 50,
    marginRight: 10,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 15, color: theme.colors.inputText },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  writeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 16,
  },
  writeButtonText: {
    color: theme.colors.primaryText,
    fontWeight: '700',
    marginLeft: 6,
    fontSize: 15,
  },

  tabsRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  activeTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 14,
    flex: 1,
    marginRight: 8,
  },
  inactiveTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    paddingVertical: 12,
    borderRadius: 14,
    flex: 1,
  },
  activeTabText: { color: '#ffffff', fontWeight: '700', marginLeft: 6 },
  inactiveTabText: { color: theme.colors.secondaryText, fontWeight: '600', marginLeft: 6 },

  trendingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginLeft: 6,
  },
  pillsScroll: {
    marginBottom: 18,
  },
  trendingPill: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    marginRight: 10,
  },
  trendingPillText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
  },

  // Article card
  articleCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  articleImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#dbeafe',
  },
  articleBody: {
    padding: 16,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  categoryPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.secondaryText,
  },
  articleTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 6,
  },
  articleExcerpt: {
    fontSize: 14,
    color: theme.colors.bodyText,
    lineHeight: 20,
    marginBottom: 10,
  },
  articleMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleMetaText: {
    fontSize: 12,
    color: theme.colors.textMuted,
  },
  articleMetaDot: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginHorizontal: 6,
  },
});
