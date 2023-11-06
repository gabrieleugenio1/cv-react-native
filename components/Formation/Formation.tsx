import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';


export default function Formation({}) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        
      <Text
          style={styles.title}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
         IFPE - Técnico em Informática para Internet
        </Text>
        <Text>Concluído em Janeiro de 2023</Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text
          style={styles.title}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
         SENAC - Superior em Análise e Desenvolvimento de sistemas
        </Text>
        <Text>Conclusão em Dezembro de 2024</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
