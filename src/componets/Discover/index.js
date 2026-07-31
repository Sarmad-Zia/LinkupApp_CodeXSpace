import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, Newspaper, Building2, ChevronRight } from 'lucide-react-native';
import styles from './style'; // Importing from your style file

// Safely importing your data file
import rawUserData from '../../data/UserData.json';

const Discover = () => {
  // Gracefully fallback if fields are nested differently or missing
  const articles = rawUserData?.articles || rawUserData?.user?.articles || [];
  const organizations = rawUserData?.organizations || rawUserData?.user?.organizations || [];

  return (
    <View style={styles.container}>
      
      {/* ------ Latest Articles Section ------ */}
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <BookOpen size={20} color="#2563eb" strokeWidth={2.5} />
          <Text style={styles.headerTitle}>Latest Articles</Text>
        </View>

        <View style={styles.articlesList}>
          {articles.length > 0 ? (
            articles.slice(0, 3).map((item, index) => (
              <View key={item.id || index} style={styles.articleItem}>
                <View style={styles.iconContainer}>
                  <Newspaper size={18} color="#2563eb" strokeWidth={2} />
                </View>
                <View style={styles.articleTextContainer}>
                  <Text style={styles.articleTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.articleDate}>
                    {item.date}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No articles yet</Text>
          )}
        </View>

        {articles.length > 0 && (
          <TouchableOpacity style={styles.showAllButton} activeOpacity={0.7}>
            <Text style={styles.showAllText}>Show all articles</Text>
            <ChevronRight size={16} color="#2563eb" strokeWidth={2.5} />
          </TouchableOpacity>
        )}
      </View>

      {/* ------ Latest Organizations Section ------ */}
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Building2 size={20} color="#2563eb" strokeWidth={2.5} />
          <Text style={styles.headerTitle}>Latest Organizations</Text>
        </View>

        <View style={styles.organizationsContent}>
          {organizations.length > 0 ? (
            organizations.map((org, index) => (
              <Text key={org.id || index} style={styles.orgText}>
                {org.name}
              </Text>
            ))
          ) : (
            <Text style={styles.emptyText}>No organizations yet</Text>
          )}
        </View>
      </View>

      {/* ------ Footer Links ------ */}
      <View style={styles.footerRow}>
        <Text style={styles.footerLink}>About</Text>
        <Text style={styles.footerLink}>Accessibility</Text>
        <Text style={styles.footerLink}>Help</Text>
        <Text style={styles.footerLink}>Privacy</Text>
      </View>
    </View>
  );
};

export default Discover;