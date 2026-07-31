import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Users, UserPlus, CheckCircle2, Users2 } from 'lucide-react-native';
import { styles } from '../../screens/MyHubScreen/style';

const iconMap = {
  Users,
  UserPlus,
  CheckCircle2,
  Users2,
};

const StatsRow = ({ stats }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.statsScroll}
      contentContainerStyle={styles.statsScrollContent}
    >
      {stats.map((stat) => {
        const IconComponent = iconMap[stat.icon] || Users;
        return (
          <View key={stat.id} style={styles.statCard}>
            <IconComponent size={22} color="#475569" />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default StatsRow;
