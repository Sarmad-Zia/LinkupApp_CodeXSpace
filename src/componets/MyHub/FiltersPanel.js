import React, { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { Briefcase, MapPin } from 'lucide-react-native';
import { theme } from '../../theme/theme';
import { styles } from '../../screens/MyHubScreen/style';

const FiltersPanel = ({ industryRole, setIndustryRole, location, setLocation }) => {
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  return (
    <View style={styles.filtersPanel}>
      <Text style={styles.filtersEyebrow}>FILTERS</Text>

      <View style={styles.filterInputRow}>
        <Briefcase size={18} color="#94a3b8" />
        <TextInput
          style={styles.filterInput}
          placeholder="Industry / Role"
          placeholderTextColor="#94a3b8"
          value={industryRole}
          onChangeText={setIndustryRole}
        />
      </View>

      <View style={styles.filterInputRow}>
        <MapPin size={18} color="#94a3b8" />
        <TextInput
          style={styles.filterInput}
          placeholder="Location"
          placeholderTextColor="#94a3b8"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.verifiedRow}>
        <Text style={styles.verifiedLabel}>Verified only</Text>
        <Switch
          value={verifiedOnly}
          onValueChange={setVerifiedOnly}
          trackColor={{ false: '#e2e8f0', true: theme.colors.primary }}
          thumbColor="#ffffff"
        />
      </View>
    </View>
  );
};

export default FiltersPanel;
