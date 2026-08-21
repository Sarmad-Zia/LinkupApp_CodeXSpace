import React, { useMemo, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import EventsHeader from '../../componets/Events/EventsHeader';
import EventCard from '../../componets/Events/EventCard';
import CreateEventModal from '../../componets/Events/CreateEventModal';
import eventsDataRaw from '../../data/eventsData.json';
import { styles } from './style';

const FILTERS = [
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'attending', label: 'Attending' },
  { key: 'interested', label: 'Interested' },
  { key: 'mine', label: 'My Events' },
];

const RANDOM_COVER_COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444'];

let nextId = 1000;

const EventsScreen = () => {
  const [events, setEvents] = useState(eventsDataRaw);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('upcoming');
  const [isModalVisible, setModalVisible] = useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        !searchValue || event.title.toLowerCase().includes(searchValue.toLowerCase());

      if (!matchesSearch) return false;

      if (activeFilter === 'attending') return event.isAttending;
      if (activeFilter === 'interested') return event.isInterested;
      if (activeFilter === 'mine') return event.isMine;
      return true; // upcoming: show everything matching search for now
    });
  }, [events, activeFilter, searchValue]);

  const updateEvent = (id, updater) => {
    setEvents((prev) => prev.map((event) => (event.id === id ? updater(event) : event)));
  };

  const handleAttend = (id) => {
    updateEvent(id, (event) => ({
      ...event,
      isAttending: !event.isAttending,
      attendingCount: event.isAttending ? event.attendingCount - 1 : event.attendingCount + 1,
    }));
  };

  const handleInterested = (id) => {
    updateEvent(id, (event) => ({
      ...event,
      isInterested: !event.isInterested,
      interestedCount: event.isInterested ? event.interestedCount - 1 : event.interestedCount + 1,
    }));
  };

  const handleSave = (id) => {
    updateEvent(id, (event) => ({ ...event, isSaved: !event.isSaved }));
  };

  const handleStat = (id, statKey) => {
    updateEvent(id, (event) => ({ ...event, [statKey]: event[statKey] + 1 }));
  };

  const handleView = (id) => {
    // Hook up to an EventDetail screen/navigation call here.
    console.log('View event', id);
  };

  const handleCreateEvent = (payload) => {
    const initials = payload.title
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join('');

    const newEvent = {
      id: String(nextId++),
      title: payload.title,
      coverInitials: initials || 'EV',
      coverColor: RANDOM_COVER_COLORS[events.length % RANDOM_COVER_COLORS.length],
      dateLabel: payload.startDateTime,
      attendingCount: 0,
      interestedCount: 0,
      isFree: payload.isFree,
      ticketPrice: payload.ticketPrice,
      currency: payload.currency,
      isAttending: false,
      isInterested: false,
      isSaved: false,
      isMine: true,
      likes: 0,
      comments: 0,
      shares: 0,
      reposts: 0,
    };

    setEvents((prev) => [newEvent, ...prev]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <EventsHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onCreatePress={() => setModalVisible(true)}
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onView={handleView}
            onAttend={handleAttend}
            onInterested={handleInterested}
            onSave={handleSave}
            onStat={handleStat}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No events found.</Text>}
      />

      <CreateEventModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={handleCreateEvent}
      />
    </View>
  );
};

export default EventsScreen;
