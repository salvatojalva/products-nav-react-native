import React from 'react'
import { Text,View, StyleSheet  } from 'react-native'

export const Home = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Tienda la bendicion</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#CCC',
    fontSize: 34,
    fontWeight: "800"
  }
});