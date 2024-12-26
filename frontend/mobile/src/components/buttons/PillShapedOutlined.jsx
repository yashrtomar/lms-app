import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PillShapedOutlined({text, styling}) {
  return (
    <View style={[styles.pillShape, styling]}>
      <Text style={styles.textPrimary}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pillShape: {
    borderWidth: 1,
    borderColor: '#0077B5',
    borderRadius: 50,
    padding: 8,
  },
  textPrimary: {
    color: '#0077B5',
  },
});
