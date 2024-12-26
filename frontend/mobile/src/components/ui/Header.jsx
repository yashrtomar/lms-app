import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header({text}) {
  return (
    <View style={[styles.flexRow, {paddingEnd: 24}]}>
      <Text style={styles.headerText}>{text}</Text>
      <View>
        <Text
          style={[
            styles.headerText,
            {
              color: 'dodgerblue',
              display: 'flex',
              flexDirection: 'row',
            },
          ]}>
          More
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 900,
    padding: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});
