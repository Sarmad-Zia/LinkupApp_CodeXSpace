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
  backChevron: {
    fontSize: 26,
    color: theme.colors.text,
    fontWeight: '600',
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconBadge: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  titleTextWrap: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 13,
    color: theme.colors.bodyText,
    lineHeight: 18,
  },

  postListingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 14,
  },
  postListingButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 8,
    fontSize: 15,
  },

  tabsRow: {
    flexDirection: 'row',
    marginBottom: 14,
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
  },

  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    marginBottom: 12,
  },
  categoryPillText: {
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 6,
    fontSize: 13,
  },

  listingCountText: {
    fontSize: 13,
    color: theme.colors.textMuted,
    marginBottom: 14,
  },

  // Listing card
  listingCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  listingBanner: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listingCategory: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 10,
  },
  listingBody: {
    padding: 16,
  },
  listingTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 6,
  },
  listingDescription: {
    fontSize: 13,
    color: theme.colors.bodyText,
    lineHeight: 19,
    marginBottom: 12,
  },

  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sellerAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  sellerAvatarText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
  sellerName: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
  },

  ratingLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
    marginLeft: 4,
  },
  reviewCountText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginLeft: 3,
  },
  locationIcon: {
    marginLeft: 12,
  },
  locationText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginLeft: 3,
  },

  listingFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listingPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.colors.primary,
    flexShrink: 1,
    marginRight: 8,
  },
  listingSeller: {
    fontSize: 12,
    color: theme.colors.textMuted,
  },
  footerActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 12,
  },
  viewButtonText: {
    color: theme.colors.primary,
    fontWeight: '700',
    fontSize: 13,
    marginLeft: 6,
  },
});
