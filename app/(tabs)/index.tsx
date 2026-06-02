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
            <Text style={styles.buttonText}>
              BELAJAR JAWI
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/quiz')}
          >
            <Text style={styles.buttonText}>
              JOM MAIN GAME
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/lagu')}
          >
            <Text style={styles.buttonText}>
              JOM MENYANYI
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
    marginTop: 30,
  },

  button: {
    width: 270,
    height: 75,
    backgroundColor: '#A7D820',
    borderRadius: 18,

    borderWidth: 3,
    borderColor: '#8E2DE2',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 6,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5F00',
  },
});