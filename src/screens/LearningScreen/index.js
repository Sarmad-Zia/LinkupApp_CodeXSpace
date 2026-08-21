import React, { useState } from 'react';
import { View, Text } from 'react-native';
import LearningHeader from '../../componets/Learning/LearningHeader';
import learningDataRaw from '../../data/learningData.json';
import { styles } from './style';

const LearningScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [continueLearning] = useState(learningDataRaw.continueLearning);

  return (
    <View style={styles.container}>
      <LearningHeader searchValue={searchValue} onSearchChange={setSearchValue} />

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>

        {continueLearning.length === 0 ? (
          <Text style={styles.emptyText}>No in-progress courses from the API yet.</Text>
        ) : (
          continueLearning.map((course) => (
            <Text key={course.id} style={styles.emptyText}>
              {course.title}
            </Text>
          ))
        )}
      </View>
    </View>
  );
};

export default LearningScreen;
