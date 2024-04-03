/*
* File: InstrumentsScreen.java
* Author: Vitovszki Tamás
* Copyright: 2024, Vitovszki Tamás
* Group: Szoft II
* Date: 2024-04-03
* Github: https://github.com/Tomasman05/Hangszerek
* Licenc: GNU GPL
*/

import React, { useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';

export default function InstrumentsScreen() {
  const instrumentHost = "http://localhost:3000/";
  const instrumentEndpoint = "hangszerek";
  const instrumentUrl = `${instrumentHost}${instrumentEndpoint}`;

  const [instruments, setInstruments] = useState([]);

  function getInstruments() {
    fetch(instrumentUrl)
      .then(response => response.json())
      .then(result => {
        setInstruments(result);
        console.log(result)
      })
      .catch(error => console.error("Error fetching instruments data:", error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Text style={styles.title}>Hangszerek</Text>

      <Pressable onPress={getInstruments} style={styles.button}>
        <Text style={styles.buttonText}>Hangszerek lekérése</Text>
      </Pressable>

      {instruments.map((instrument, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{instrument.Név}</Text>
          <Text style={styles.cardText}>Típus: {instrument.Típus}</Text>
          <Text style={styles.cardText}>Márka: {instrument.Márka}</Text>
          <Text style={styles.cardText}>Év: {instrument.Év}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    color: '#5e35b1',
  },
  button: {
    backgroundColor: '#5e35b1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: 220,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ede7f6',
    borderWidth: 0,
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: '80%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#673ab7',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#9575cd',
  },
});


