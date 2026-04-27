import { useAudioPlayer } from 'expo-audio';
import { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HurufScreen() {
  const hurufList = [
  { jawi: 'ا', nama: 'ALIF', audio: require('../assets/audio/alif.mp3') },
  { jawi: 'ب', nama: 'BA', audio: require('../assets/audio/ba.mp3') },
  { jawi: 'ت', nama: 'TA', audio: require('../assets/audio/ta.mp3') },
  { jawi: 'ث', nama: 'THA', audio: require('../assets/audio/tha.mp3') },
  { jawi: 'ج', nama: 'JIM', audio: require('../assets/audio/jim.mp3') },
  { jawi: 'ح', nama: 'HA', audio: require('../assets/audio/ha.mp3') },
  { jawi: 'خ', nama: 'KHA', audio: require('../assets/audio/kho.mp3') }, // ikut file awak
  { jawi: 'د', nama: 'DAL', audio: require('../assets/audio/dal.mp3') },
  { jawi: 'ذ', nama: 'ZAL', audio: require('../assets/audio/zal.mp3') },
  { jawi: 'ر', nama: 'RA', audio: require('../assets/audio/ra.mp3') },
  { jawi: 'ز', nama: 'ZAI', audio: require('../assets/audio/zai.mp3') },
  { jawi: 'س', nama: 'SIN', audio: require('../assets/audio/sin.mp3') },
  { jawi: 'ش', nama: 'SYIN', audio: require('../assets/audio/syin.mp3') },
  { jawi: 'ص', nama: 'SAD', audio: require('../assets/audio/sod.mp3') }, // ikut file awak
  { jawi: 'ض', nama: 'DAD', audio: require('../assets/audio/dot.mp3') }, // ikut file awak
  { jawi: 'ط', nama: 'TO', audio: require('../assets/audio/to.mp3') },
  { jawi: 'ظ', nama: 'ZO', audio: require('../assets/audio/zo.mp3') },
  { jawi: 'ع', nama: 'AIN', audio: require('../assets/audio/ain.mp3') },
  { jawi: 'غ', nama: 'GHAIN', audio: require('../assets/audio/ghain.mp3') },
  { jawi: 'ف', nama: 'FA', audio: require('../assets/audio/fa.mp3') },
  { jawi: 'ق', nama: 'QAF', audio: require('../assets/audio/qaf.mp3') },
  { jawi: 'ك', nama: 'KAF', audio: require('../assets/audio/kaf.mp3') },
  { jawi: 'ل', nama: 'LAM', audio: require('../assets/audio/lam.mp3') },
  { jawi: 'م', nama: 'MIM', audio: require('../assets/audio/mim.mp3') },
  { jawi: 'ن', nama: 'NUN', audio: require('../assets/audio/nun.mp3') },
  { jawi: 'و', nama: 'WAW', audio: require('../assets/audio/waw.mp3') },
  { jawi: 'ه', nama: 'HA', audio: require('../assets/audio/haa.mp3') },
  { jawi: 'ء', nama: 'HAMZAH', audio: require('../assets/audio/hamzah.mp3') },
  { jawi: 'ي', nama: 'YA', audio: require('../assets/audio/ya.mp3') },
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = hurufList[currentIndex];

  const player = useAudioPlayer(currentItem.audio);
  useEffect(() => {
  player.seekTo(0);
  player.play();
}, [currentIndex]);
  
  const nextHuruf = () => {
    if (currentIndex < hurufList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevHuruf = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const playSound = () => {
    player.seekTo(0);
    player.play();
  };

  const tapFlashcard = () => {
    Alert.alert('RFID/NFC', 'Nanti bila tap flashcard, bunyi huruf akan keluar.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cloud}>
        <Text style={styles.cloudSmall}>PANDAI JAWI DENGAN</Text>
        <Text style={styles.cloudTitle}>SMART JAWI</Text>
      </View>

      <Pressable style={styles.topButton}>
        <Text style={styles.topButtonText}>KENAL HURUF JAWI</Text>
      </Pressable>

      <View style={styles.card}>
        <Text style={styles.jawi}>{currentItem.jawi}</Text>
        <Text style={styles.nama}>{currentItem.nama}</Text>
      </View>

      <View style={styles.arrowRow}>
        <Pressable
          style={[styles.arrowButton, currentIndex === 0 && styles.disabledButton]}
          onPress={prevHuruf}
          disabled={currentIndex === 0}
        >
          <Text style={styles.arrowText}>◀</Text>
        </Pressable>

        <Text style={styles.counter}>
          {currentIndex + 1} / {hurufList.length}
        </Text>

        <Pressable
          style={[
            styles.arrowButton,
            currentIndex === hurufList.length - 1 && styles.disabledButton,
          ]}
          onPress={nextHuruf}
          disabled={currentIndex === hurufList.length - 1}
        >
          <Text style={styles.arrowText}>▶</Text>
        </Pressable>
      </View>

      <View style={styles.bottomRow}>
        <Pressable style={styles.smallButton} onPress={tapFlashcard}>
          <Text style={styles.icon}>📳</Text>
        </Pressable>

        <Pressable style={styles.smallButton} onPress={playSound}>
          <Text style={styles.icon}>🔊</Text>
        </Pressable>
      </View>
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
  cloud: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  cloudSmall: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
  },
  cloudTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  topButton: {
    backgroundColor: '#6f4ae6',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginBottom: 25,
  },
  topButtonText: {
    color: '#ffe600',
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    width: 280,
    height: 320,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    padding: 20,
  },
  jawi: {
    fontSize: 110,
    color: '#000',
    marginBottom: 15,
  },
  nama: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
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
  disabledButton: {
    backgroundColor: '#b9b9b9',
  },
  arrowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  bottomRow: {
    flexDirection: 'row',
    gap: 20,
  },
  smallButton: {
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