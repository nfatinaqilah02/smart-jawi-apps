import { useRouter } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/images/home_bg.png')}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.overlay}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => router.push('/belajar')}
          >
            <Text style={styles.belajarText}>
               BELAJAR JAWI
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/quiz')}
          >
            <Text style={styles.gameText}>
              QUIZ & GAME
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/lagu')}
          >
            <Text style={styles.laguText}>
              LAGU JAWI
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
    marginTop: -10, // adjust kalau nak naik/turun
    alignItems: 'center',
  },

  button: {
    width: 250,
    height: 65,

    backgroundColor: '#A7D820',

    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#8E2DE2',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 6,
  },

  belajarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0066FF', // biru
  },

  gameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF1493', // hot pink
  },

  laguText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C65D3B', // orange brick
  },
});