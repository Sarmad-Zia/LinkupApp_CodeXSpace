import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20, // Rounded container edges
    padding: 20,
    borderWidth: 1,
    borderColor: '#eef2f6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginLeft: 10,
  },
  articlesList: {
    marginBottom: 4,
  },
  articleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#eff6ff', // Light blue background block
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 3,
  },
  articleDate: {
    fontSize: 12,
    color: '#94a3b8',
  },
  showAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    marginTop: 4,
  },
  showAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563eb',
    marginRight: 4,
  },
  organizationsContent: {
    minHeight: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#94a3b8',
    textAlign: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 16,
  },
  footerLink: {
    fontSize: 13,
    color: '#94a3b8',
    fontWeight: '500',
  },
});