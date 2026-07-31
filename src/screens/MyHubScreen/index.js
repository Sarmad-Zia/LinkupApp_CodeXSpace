import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Sparkles, UserPlus2, Briefcase, Users2, Eye, ChevronRight, Mail } from 'lucide-react-native';

import myHubData from '../../data/myHubData.json';
import { styles } from './style';
import MyHubHeader from '../../componets/MyHub/MyHubHeader';
import StatsRow from '../../componets/MyHub/StatsRow';
import FiltersPanel from '../../componets/MyHub/FiltersPanel';
import SectionHeader from '../../componets/MyHub/SectionHeader';
import LinkUpRow from '../../componets/MyHub/LinkUpRow';
import PersonCard from '../../componets/MyHub/PersonCard';
import FollowSuggestionCard from '../../componets/MyHub/FollowSuggestionCard';
import {
  MarketplaceMiniItem,
  GroupItem,
  CommunityItem,
} from '../../componets/MyHub/MiniListItems';

const MyHubScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [industryRole, setIndustryRole] = useState('');
  const [location, setLocation] = useState('');

  const filteredLinkUps = useMemo(() => {
    if (!searchText.trim()) return myHubData.myLinkUps;
    return myHubData.myLinkUps.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <MyHubHeader
          searchText={searchText}
          setSearchText={setSearchText}
          linkUpCount={myHubData.stats[0].value}
        />

        <StatsRow stats={myHubData.stats} />

        <FiltersPanel
          industryRole={industryRole}
          setIndustryRole={setIndustryRole}
          location={location}
          setLocation={setLocation}
        />

        {/* Pending invitations */}
        {myHubData.pendingInvitations.length === 0 ? (
          <View style={styles.noticeBox}>
            <Mail size={16} color="#94a3b8" />
            <Text style={styles.noticeText}>No pending Link UP invitations.</Text>
          </View>
        ) : null}

        {/* My Link Ups */}
        <SectionHeader
          title="MY LINK UPS"
          count={myHubData.myLinkUps.length}
          actionLabel="View all"
        />
        <View style={styles.linkUpsList}>
          {filteredLinkUps.map((item) => (
            <LinkUpRow key={item.id} item={item} />
          ))}
        </View>

        {/* Discovery / People you may know */}
        <View style={styles.discoveryEyebrowRow}>
          <View style={styles.discoveryDot} />
          <Text style={styles.discoveryEyebrowText}>DISCOVERY</Text>
        </View>
        <SectionHeader
          icon={Sparkles}
          title="PEOPLE YOU MAY KNOW"
          count={myHubData.peopleYouMayKnow.length}
        />
        <FlatList
          data={myHubData.peopleYouMayKnow}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          renderItem={({ item }) => <PersonCard item={item} />}
        />

        {/* People to follow */}
        <SectionHeader
          icon={UserPlus2}
          title="PEOPLE TO FOLLOW"
          count={myHubData.peopleToFollow.length}
        />
        <FlatList
          data={myHubData.peopleToFollow}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          renderItem={({ item }) => <FollowSuggestionCard item={item} />}
        />

        {/* Popular marketplaces */}
        <SectionHeader
          icon={Briefcase}
          title="POPULAR MARKETPLACES"
          count={myHubData.popularMarketplaces.length}
        />
        <View style={styles.miniListWrap}>
          {myHubData.popularMarketplaces.map((item) => (
            <MarketplaceMiniItem key={item.id} item={item} />
          ))}
        </View>

        {/* Suggested groups */}
        <SectionHeader
          icon={Users2}
          title="SUGGESTED GROUPS"
          count={myHubData.suggestedGroups.length}
        />
        <View style={styles.miniListWrap}>
          {myHubData.suggestedGroups.map((item) => (
            <GroupItem key={item.id} item={item} />
          ))}
        </View>

        {/* Recommended communities */}
        <SectionHeader
          icon={Eye}
          title="RECOMMENDED COMMUNITIES"
          count={myHubData.recommendedCommunities.length}
        />
        <View style={styles.miniListWrap}>
          {myHubData.recommendedCommunities.map((item) => (
            <CommunityItem key={item.id} item={item} />
          ))}
        </View>

        <View style={styles.discoverMoreRow}>
          <Text style={styles.discoverMoreText}>Discover more</Text>
          <ChevronRight size={16} color="#3b82f6" />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyHubScreen;
