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

export default function SukuKataScreen() {

  const [fontsLoaded] = useFonts({
    Amiri: require('../assets/fonts/Amiri-Regular.ttf'),
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const sukuKataList = [
    {
      huruf1: 'ا',
      huruf2: 'ب',
      jawi: 'با',
      rumi: 'BA',
      perkataan: 'BASIKAL',
      image: require('../assets/images/basikal.png'),
    },
    {
      huruf1: 'ي',
      huruf2: 'ب',
      jawi: 'بي',
      rumi: 'BI',
      perkataan: 'BISKUT',
      image: require('../assets/images/biskut.png'),
    },
    {
      huruf1: 'و',
      huruf2: 'ب',
      jawi: 'بو',
      rumi: 'BU',
      perkataan: 'BUKU',
      image: require('../assets/images/buku.png'),
    },
    {
      huruf1: 'ا',
      huruf2: 'ت',
      jawi: 'تا',
      rumi: 'TA',
      perkataan: 'TALI',
      image: require('../assets/images/ta_tali.png'),
    },
    {
      huruf1: 'ي',
      huruf2: 'ت',
      jawi: 'تي',
      rumi: 'TI',
      perkataan: 'TISU',
      image: require('../assets/images/tisu.png'),
    },
    {
      huruf1: 'و',
      huruf2: 'ت',
      jawi: 'تو',
      rumi: 'TU',
      perkataan: 'TUPAI',
      image: require('../assets/images/tupai.png'),
    },
    {
      huruf1: 'ا',
      huruf2: 'م',
      jawi: 'ما',
      rumi: 'MA',
      perkataan: 'MATA',
      image: require('../assets/images/mata.png'),
    },
    {
      huruf1: 'ي',
      huruf2: 'م',
      jawi: 'مي',
      rumi: 'MI',
      perkataan: 'MEE',
      image: require('../assets/images/mee.png'),
    },
    {
      huruf1: 'و',
      huruf2: 'م',
      jawi: 'مو',
      rumi: 'MU',
      perkataan: 'MUKA',
      image: require('../assets/images/muka.png'),
    },
    {
      huruf1: 'ا',
      huruf2: 'ن',
      jawi: 'نا',
      rumi: 'NA',
      perkataan: 'NANAS',
      image: require('../assets/images/nun_nenas.png'),
    },
  ];

  const currentItem = sukuKataList[currentIndex];

  const nextItem = () => {
    if (currentIndex < sukuKataList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.titleButton}>
          <Text style={styles.titleText}>
            SUKU KATA JAWI
          </Text>
        </View>

        <View style={styles.cardRow}>
          <Pressable
            style={styles.arrowButton}
            onPress={prevItem}
          >
            <Text style={styles.arrowText}>◀</Text>
          </Pressable>

          <View style={styles.card}>
            <Image
              source={currentItem.image}
              style={styles.image}
            />

            <View style={styles.sukuRow}>
              <Text style={styles.huruf}>
                {currentItem.huruf1}
              </Text>

              <Text style={styles.plus}>
                +
              </Text>

              <Text style={styles.huruf}>
                {currentItem.huruf2}
              </Text>
            </View>

            <Text style={styles.equal}>
              ↓
            </Text>

            <Text style={styles.sukuKata}>
              {currentItem.jawi}
            </Text>

            <Text style={styles.rumi}>
              {currentItem.rumi}
            </Text>

            <Text style={styles.perkataan}>
              {currentItem.perkataan}
            </Text>
          </View>

          <Pressable
            style={styles.arrowButton}
            onPress={nextItem}
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

  titleButton: {
    marginTop: 150,
    backgroundColor: '#5E4BFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 35,
  },

  titleText: {
    color: '#FF4D4D',
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },

  arrowButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#5E4BFF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: -10,
    marginLeft: -10,
  },

  arrowText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  card: {
    width: 260,
    height: 480,
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',

    marginTop: 20,
    marginBottom: -10,
  },

  sukuRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  plus: {
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#000',
  },

  equal: {
    fontSize: 45,
    color: '#000',
    marginVertical: 5,
    marginTop: -20,
  },

  huruf: {
  fontFamily: 'Amiri',
  fontSize: 70,
  color: '#0066FF',
  },

  sukuKata: {
    fontFamily: 'Amiri',
    fontSize: 90,
    color: '#FF0000',
    marginTop: -40,
    },

  rumi: {
    fontSize: 30,
    color: '#00AA00',
    fontWeight: 'bold',
    marginTop: -20,
  },

  perkataan: {
    fontSize: 30,
    color: '#FF7A00',
    fontWeight: 'bold',
    marginTop: 5,
  },
});