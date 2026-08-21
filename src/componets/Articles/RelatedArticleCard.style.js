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
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.divider,
  },
  textWrap: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  title: {
    fontSize: 14,
    fontWeight: theme.typography.titleWeight,
    color: theme.colors.text,
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: theme.colors.textMuted,
  },
});
