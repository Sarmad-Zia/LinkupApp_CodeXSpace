import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Box, Bookmark, Star, MapPin, Heart, Eye } from 'lucide-react-native';
import { styles } from '../../screens/MarketplaceScreen/style';

const ListingCard = ({ item }) => {
  const sellerInitial = item.seller ? item.seller.trim().charAt(0).toUpperCase() : '?';

  return (
    <View style={styles.listingCard}>
      <LinearGradient
        colors={item.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.listingBanner}
      >
        <TouchableOpacity style={styles.bookmarkButton}>
          <Bookmark size={16} color="#ffffff" />
        </TouchableOpacity>
        <Box size={40} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />
        <Text style={styles.listingCategory}>{item.category}</Text>
      </LinearGradient>

      <View style={styles.listingBody}>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingDescription} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.sellerRow}>
          <View style={styles.sellerAvatar}>
            <Text style={styles.sellerAvatarText}>{sellerInitial}</Text>
          </View>
          <Text style={styles.sellerName}>{item.seller}</Text>
        </View>

        <View style={styles.ratingLocationRow}>
          <Star size={14} color="#f59e0b" fill="#f59e0b" />
          <Text style={styles.ratingText}>{item.rating.toFixed(2)}</Text>
          <Text style={styles.reviewCountText}>({item.reviewCount})</Text>
          <MapPin size={14} color="#94a3b8" style={styles.locationIcon} />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>

        <View style={styles.listingFooterRow}>
          <Text style={styles.listingPrice}>
            Starting from {item.currency} {item.price}
          </Text>
          <View style={styles.footerActionsRow}>
            <TouchableOpacity style={styles.heartButton}>
              <Heart size={18} color="#94a3b8" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewButton} activeOpacity={0.85}>
              <Eye size={15} color={styles.viewButtonText.color} />
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const renderListingItem = ({ item }) => <ListingCard item={item} />;

export default renderListingItem;
