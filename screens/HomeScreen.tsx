import * as React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from '../components/Carousel';
import CategoryCard from '../components/CategoryCard';

import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import { RootDrawerScreenProps } from '../types';



export default function HomeScreen({ navigation }: RootDrawerScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ padding: 5 }}>

        <Carousel />
        <CategoryCard />
        <CategoryCard />

        <View style={{ height: 10 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
