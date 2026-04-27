import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function NomborScreen() {
  const nomborList = [
    { jawi: '١', nama: 'SATU' },
    { jawi: '٢', nama: 'DUA' },
    { jawi: '٣', nama: 'TIGA' },
    { jawi: '٤', nama: 'EMPAT' },
    { jawi: '٥', nama: 'LIMA' },
    { jawi: '٦', nama: 'ENAM' },
    { jawi: '٧', nama: 'TUJUH' },
    { jawi: '٨', nama: 'LAPAN' },
    { jawi: '٩', nama: 'SEMBILAN' },
    { jawi: '١٠', nama: 'SEPULUH' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = nomborList[currentIndex];

  const nextNombor = () => {
    if (currentIndex < nomborList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevNombor = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const playSound = () => {
    Alert.alert('Audio', `Bunyi nombor ${currentItem.nama} nanti keluar sini.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KENAL NOMBOR JAWI</Text>

      <View style={styles.card}>
        <Text style={styles.jawi}>{currentItem.jawi}</Text>
        <Text style={styles.nama}>{currentItem.nama}</Text>
      </View>

      <View style={styles.arrowRow}>
        <Pressable style={styles.arrowButton} onPress={prevNombor}>
          <Text style={styles.arrowText}>◀</Text>
        </Pressable>

        <Text style={styles.counter}>
          {currentIndex + 1} / {nomborList.length}
        </Text>

        <Pressable style={styles.arrowButton} onPress={nextNombor}>
          <Text style={styles.arrowText}>▶</Text>
        </Pressable>
      </View>

      <Pressable style={styles.soundButton} onPress={playSound}>
        <Text style={styles.icon}>🔊</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fe8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#4b2e83',
  },
  card: {
    width: 280,
    height: 320,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  jawi: {
    fontSize: 110,
    color: '#000',
  },
  nama: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  arrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 25,
  },
  arrowButton: {
    backgroundColor: '#6f4ae6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 18,
    fontWeight: '600',
  },
  soundButton: {
    backgroundColor: '#ffe14d',
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
});