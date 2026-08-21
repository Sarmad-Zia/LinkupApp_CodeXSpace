import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bookmark, ThumbsUp, MessageSquare, Share2, Repeat2 } from 'lucide-react-native';
import { theme } from '../../theme/theme';

const formatPrice = (event) => {
  if (event.isFree) return 'Free';
  if (event.ticketPrice) return `${event.currency || 'USD'} ${event.ticketPrice}`;
  return 'Paid';
};

const EventCard = ({ event, onView, onAttend, onInterested, onSave, onStat }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cover, { backgroundColor: event.coverColor }]}>
        <Text style={styles.coverInitials}>{event.coverInitials}</Text>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => onSave?.(event.id)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Bookmark
            size={18}
            color={theme.colors.card}
            fill={event.isSaved ? theme.colors.card : 'transparent'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.dateLabel}</Text>
        <Text style={styles.meta}>
          {event.attendingCount} attending · {event.interestedCount} interested · {formatPrice(event)}
        </Text>

        <TouchableOpacity style={styles.viewButton} onPress={() => onView?.(event.id)}>
          <Text style={styles.viewButtonText}>View event</Text>
        </TouchableOpacity>

        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.actionButton, event.isAttending && styles.actionButtonActive]}
            onPress={() => onAttend?.(event.id)}
          >
            <Text
              style={[styles.actionButtonText, event.isAttending && styles.actionButtonTextActive]}
            >
              Attend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, event.isInterested && styles.actionButtonActive]}
            onPress={() => onInterested?.(event.id)}
          >
            <Text
              style={[styles.actionButtonText, event.isInterested && styles.actionButtonTextActive]}
            >
              Interested
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.statItem} onPress={() => onStat?.(event.id, 'likes')}>
            <ThumbsUp size={16} color={theme.colors.textMuted} />
            <Text style={styles.statText}>{event.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statItem} onPress={() => onStat?.(event.id, 'comments')}>
            <MessageSquare size={16} color={theme.colors.textMuted} />
            <Text style={styles.statText}>{event.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statItem} onPress={() => onStat?.(event.id, 'shares')}>
            <Share2 size={16} color={theme.colors.textMuted} />
            <Text style={styles.statText}>{event.shares}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statItem} onPress={() => onStat?.(event.id, 'reposts')}>
            <Repeat2 size={16} color={theme.colors.textMuted} />
            <Text style={styles.statText}>{event.reposts}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    marginBottom: theme.spacing.lg,
  },
  cover: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverInitials: {
    fontSize: 48,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.9)',
  },
  saveButton: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: theme.radius.sm,
    padding: 6,
  },
  body: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: theme.colors.text,
  },
  date: {
    fontSize: 14,
    color: theme.colors.textMuted,
    marginTop: 4,
  },
  meta: {
    fontSize: 14,
    color: theme.colors.bodyText,
    marginTop: 6,
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  viewButtonText: {
    color: theme.colors.primaryText,
    fontWeight: '700',
    fontSize: 15,
  },
  actionRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  actionButtonActive: {
    backgroundColor: theme.colors.divider,
    borderColor: theme.colors.primary,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  actionButtonTextActive: {
    color: theme.colors.primary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.divider,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 13,
    color: theme.colors.textMuted,
    fontWeight: '600',
  },
});
