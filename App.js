import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const YourApp = () => {
  const [outPutText, setOutPutText] = useState('Try editing me! 🎉')
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45 }}>{outPutText}</Text>
      <Button title='Change Text' onPress={()=>setOutPutText("You updated me🍟🍟")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

})

export default YourApp;