import { useRouter } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function BelajarScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/home_bg.png')}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.overlay}>
        <View style={styles.buttonContainer}>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/belajar_huruf')}
          >
            <Text style={styles.hurufText}>
              KENAL HURUF JAWI
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/belajar_nombor')}
          >
            <Text style={styles.nomborText}>
              KENAL NOMBOR JAWI
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/belajar_sukukata')}
          >
            <Text style={styles.sukuText}>
              SUKU KATA JAWI
            </Text>
          </Pressable>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 50,
    alignItems: 'center',
  },

  button: {
    width: 250,
    height: 65,

    backgroundColor: '#5B6DFF', // biru

    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 8,
  },

  hurufText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFE600', // kuning
  },

  nomborText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7CFF4D', // hijau
  },

  sukuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4D4D', // merah
  },
});