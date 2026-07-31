import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../screens/MyHubScreen/style';

const SectionHeader = ({ icon: Icon, title, count, actionLabel, onActionPress }) => {
  return (
    <View style={styles.sectionHeaderRow}>
      <View style={styles.sectionHeaderLeft}>
        {Icon && <Icon size={15} color="#3b82f6" />}
        <Text style={styles.sectionHeaderTitle}>{title}</Text>
        {typeof count === 'number' && (
          <View style={styles.sectionCountBadge}>
            <Text style={styles.sectionCountBadgeText}>{count}</Text>
          </View>
        )}
      </View>
      {actionLabel ? (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={styles.sectionActionLabel}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SectionHeader;
