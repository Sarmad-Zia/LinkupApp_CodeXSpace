import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Building2, MapPin, Bookmark, CheckCircle2 } from 'lucide-react-native';
import { styles } from '../../screens/JobsScreen/style';

const JobCard = ({ item }) => {
  return (
    <View style={styles.jobCard}>
      <View style={styles.jobHeaderRow}>
        <View style={styles.jobIconWrap}>
          <Building2 size={22} color="#3b82f6" />
        </View>
        <View style={styles.jobHeaderText}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.jobCompany}>{item.company}</Text>
        </View>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Bookmark size={18} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <View style={styles.locationRow}>
        <MapPin size={14} color="#94a3b8" />
        <Text style={styles.locationText}>{item.location}</Text>
      </View>

      <View style={styles.tagsRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.type}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.mode}</Text>
        </View>
      </View>

      <View style={styles.salaryRow}>
        <Text style={styles.salaryText}>{item.salary}</Text>
      </View>
      <Text style={styles.postedText}>{item.posted}</Text>

      <TouchableOpacity style={styles.applyButton} activeOpacity={0.85}>
        <CheckCircle2 size={18} color="#ffffff" />
        <Text style={styles.applyButtonText}>Easy Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderJobItem = ({ item }) => <JobCard item={item} />;

export default renderJobItem;
