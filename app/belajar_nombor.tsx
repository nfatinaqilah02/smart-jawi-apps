import { useFonts } from 'expo-font';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function NomborScreen() {
  const [fontsLoaded] = useFonts({
  Amiri: require('../assets/fonts/Amiri-Regular.ttf'),
});

  const [currentIndex, setCurrentIndex] = useState(0);

  const nomborList = [
    {
      jawi: '١',
      nombor: '1 - SATU',
      image: require('../assets/images/1_ayam.png'),
    },
    {
      jawi: '٢',
      nombor: '2 - DUA',
      image: require('../assets/images/2_ayam.png'),
    },
    {
      jawi: '٣',
      nombor: '3 - TIGA',
      image: require('../assets/images/3_ayam.png'),
    },
    {
      jawi: '٤',
      nombor: '4 - EMPAT',
      image: require('../assets/images/4_ayam.png'),
    },
    {
      jawi: '٥',
      nombor: '5 - LIMA',
      image: require('../assets/images/5_ayam.png'),
    },
    {
      jawi: '٦',
      nombor: '6 - ENAM',
      image: require('../assets/images/6_ayam.png'),
    },
    {
      jawi: '٧',
      nombor: '7 - TUJUH',
      image: require('../assets/images/7_ayam.png'),
    },
    {
      jawi: '٨',
      nombor: '8 - LAPAN',
      image: require('../assets/images/8_ayam.png'),
    },
    {
      jawi: '٩',
      nombor: '9 - SEMBILAN',
      image: require('../assets/images/9_ayam.png'),
    },
    {
      jawi: '١٠',
      nombor: '10 - SEPULUH',
      image: require('../assets/images/10_ayam.png'),
    },
  ];

if (!fontsLoaded) {
  return null;
}

  const currentItem = nomborList[currentIndex];

  const nextNumber = () => {
    if (currentIndex < nomborList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevNumber = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.subButton}>
          <Text style={styles.subButtonText}>
            KENAL NOMBOR JAWI
          </Text>
        </View>

        <View style={styles.cardRow}>
          <Pressable
            style={styles.arrowButton}
            onPress={prevNumber}
          >
            <Text style={styles.arrowText}>◀</Text>
          </Pressable>

          <View style={styles.card}>
            <Image
              source={currentItem.image}
              style={styles.image}
            />

            <Text style={styles.jawi}>
              {currentItem.jawi}
            </Text>

            <Text style={styles.nama}>
              {currentItem.nombor}
            </Text>
          </View>

          <Pressable
            style={styles.arrowButton}
            onPress={nextNumber}
          >
            <Text style={styles.arrowText}>▶</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  subButton: {
    marginTop: 160,
    backgroundColor: '#5E4BFF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 35,
    marginBottom: 25,
  },

  subButtonText: {
    color: '#32CD32',
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#5E4BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -2,
  },

  arrowText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  card: {
    width: 280,
    height: 400,
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -90,
  },

    jawi: {
    fontFamily: 'Amiri',
    fontSize: 140,
    color: '#000',
    marginBottom: -60,
    marginTop: 30,

  },

  nama: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
  },
});