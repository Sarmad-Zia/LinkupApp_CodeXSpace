import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  containerLast: {
    borderBottomWidth: 0,
  },
  rank: {
    width: 28,
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textMuted,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: theme.typography.titleWeight,
    color: theme.colors.text,
    marginBottom: 2,
  },
  author: {
    fontSize: 12,
    color: theme.colors.textMuted,
  },
});
