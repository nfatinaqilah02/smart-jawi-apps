import { useAudioPlayer } from 'expo-audio';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HurufScreen() {
  const [fontsLoaded] = useFonts({
    Amiri: require('../assets/fonts/Amiri-Regular.ttf'),
  });

  const hurufList = [
    {
      jawi: 'ا',
      nama: 'ALIF',
      image: require('../assets/images/ALIF.png'),
      audio: require('../assets/audio/alif.mp3'),
    },

    {
    jawi: 'ب',
    nama: 'BA',
    image: require('../assets/images/ba_bola.png'),
    audio: require('../assets/audio/ba.mp3'),
  },
  {
    jawi: 'ت',
    nama: 'TA',
    image: require('../assets/images/ta_tali.png'),
    audio: require('../assets/audio/ta.mp3'),
  },
  {
    jawi: 'ث',
    nama: 'THA',
    image: require('../assets/images/tha_salji.png'),
    audio: require('../assets/audio/tha.mp3'),
  },
  {
    jawi: 'ج',
    nama: 'JIM',
    image: require('../assets/images/jim_jari.png'),
    audio: require('../assets/audio/jim.mp3'),
  },
  {
    jawi: 'ح',
    nama: 'HA',
    image: require('../assets/images/ha_harimau.png'),
    audio: require('../assets/audio/ha.mp3'),
  },
  {
    jawi: 'خ',
    nama: 'KHA',
    image: require('../assets/images/kha_khemah.png'),
    audio: require('../assets/audio/kho.mp3'),
  },
  {
    jawi: 'د',
    nama: 'DAL',
    image: require('../assets/images/dal_dadu.png'),
    audio: require('../assets/audio/dal.mp3'),
  },
  {
    jawi: 'ذ',
    nama: 'ZAL',
    image: require('../assets/images/zal_zikir.png'),
    audio: require('../assets/audio/zal.mp3'),
  },
  {
    jawi: 'ر',
    nama: 'RA',
    image: require('../assets/images/ra_roti.png'),
    audio: require('../assets/audio/ra.mp3'),
  },
  {
    jawi: 'ز',
    nama: 'ZAI',
    image: require('../assets/images/zai_zebra.png'),
    audio: require('../assets/audio/zai.mp3'),
  },
  {
    jawi: 'س',
    nama: 'SIN',
    image: require('../assets/images/sin_sapu.png'),
    audio: require('../assets/audio/sin.mp3'),
  },
  {
    jawi: 'ش',
    nama: 'SYIN',
    image: require('../assets/images/syin_syampoo.png'),
    audio: require('../assets/audio/syin.mp3'),
  },
  {
    jawi: 'ص',
    nama: 'SAD',
    image: require('../assets/images/sad_sudu.png'),
    audio: require('../assets/audio/sod.mp3'),
  },
  {
    jawi: 'ض',
    nama: 'DAD',
    image: require('../assets/images/dad_dinasour.png'),
    audio: require('../assets/audio/dot.mp3'),
  },
  {
    jawi: 'ط',
    nama: 'TO',
    image: require('../assets/images/to_topi.png'),
    audio: require('../assets/audio/to.mp3'),
  },
  {
    jawi: 'ظ',
    nama: 'ZO',
    image: require('../assets/images/zo_zohor.png'),
    audio: require('../assets/audio/zo.mp3'),
  },
  {
    jawi: 'ع',
    nama: 'AIN',
    image: require('../assets/images/ain_aiskrim.png'),
    audio: require('../assets/audio/ain.mp3'),
  },
  {
    jawi: 'غ',
    nama: 'GHAIN',
    image: require('../assets/images/ghain_gajah.png'),
    audio: require('../assets/audio/ghain.mp3'),
  },
  {
    jawi: 'ف',
    nama: 'FA',
    image: require('../assets/images/fa_fail.png'),
    audio: require('../assets/audio/fa.mp3'),
  },
  {
    jawi: 'ق',
    nama: 'QAF',
    image: require('../assets/images/qaf_quran.png'),
    audio: require('../assets/audio/qaf.mp3'),
  },
  {
    jawi: 'ك',
    nama: 'KAF',
    image: require('../assets/images/kaf_kucing.png'),
    audio: require('../assets/audio/kaf.mp3'),
  },
  {
    jawi: 'ل',
    nama: 'LAM',
    image: require('../assets/images/lam_lampu.png'),
    audio: require('../assets/audio/lam.mp3'),
  },
  {
    jawi: 'م',
    nama: 'MIM',
    image: require('../assets/images/mim_meja.png'),
    audio: require('../assets/audio/mim.mp3'),
  },
  {
    jawi: 'ن',
    nama: 'NUN',
    image: require('../assets/images/nun_nenas.png'),
    audio: require('../assets/audio/nun.mp3'),
  },
  {
    jawi: 'و',
    nama: 'WAU',
    image: require('../assets/images/wau_wau.png'),
    audio: require('../assets/audio/waw.mp3'),
  },
  {
    jawi: 'ه',
    nama: 'HA',
    image: require('../assets/images/ha_hati.png'),
    audio: require('../assets/audio/haa.mp3'),
  },
  {
    jawi: 'ء',
    nama: 'HAMZAH',
    image: require('../assets/images/hamzah_arnab.png'),
    audio: require('../assets/audio/hamzah.mp3'),
  },
  {
    jawi: 'ي',
    nama: 'YA',
    image: require('../assets/images/ya_yoyo.png'),
    audio: require('../assets/audio/ya.mp3'),
  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = hurufList[currentIndex];

  const player = useAudioPlayer(currentItem.audio);

  useEffect(() => {
    if (fontsLoaded) {
      player.seekTo(0);
      player.play();
    }
  }, [fontsLoaded]);

  const playSound = () => {
    player.seekTo(0);
    player.play();
  };

  const repeatAudio = () => {
    player.seekTo(0);
    player.play();
  };

  const tapFlashcard = () => {
    console.log('RFID/NFC');
  };

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
        <View style={styles.subButton}>
          <Text style={styles.subButtonText}>
            KENAL HURUF JAWI
          </Text>
        </View>

        <View style={styles.cardRow}>
          <Pressable
            style={styles.arrowButton}
            onPress={prevHuruf}
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
              {currentItem.nama}
            </Text>
          </View>

          <Pressable
            style={styles.arrowButton}
            onPress={nextHuruf}
          >
            <Text style={styles.arrowText}>▶</Text>
          </Pressable>
        </View>

        <View style={styles.bottomBar}>
          <Pressable
            style={styles.iconButton}
            onPress={tapFlashcard}
          >
            <Text style={styles.icon}>📳</Text>
          </Pressable>

          <Pressable
            style={styles.iconButton}
            onPress={playSound}
          >
            <Text style={styles.icon}>🔊</Text>
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
    marginTop: 120,
    backgroundColor: '#5E4BFF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 35,
    marginBottom: 25,
    marginTop: 160,
  },

  subButtonText: {
    color: '#FFE600',
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
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginBottom: -70,
  },

  jawi: {
    fontFamily: 'Amiri',
    fontSize: 150,
    color: '#000',
    //marginBottom: 50,
    marginTop: 30,
  },

  nama: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginTop: -20,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#FFE13B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 80,
  },

  iconButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 32,
  },
});