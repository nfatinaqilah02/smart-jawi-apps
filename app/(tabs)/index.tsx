import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.sun} />
      <View style={styles.cloud}>
        <Text style={styles.cloudSmall}>PANDAI JAWI DENGAN</Text>
        <Text style={styles.cloudTitle}>SMART JAWI</Text>
      </View>

      <Text style={styles.decor1}>ع</Text>
      <Text style={styles.decor2}>ن</Text>
      <Text style={styles.decor3}>م</Text>
      <Text style={styles.decor4}>ر</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.button1]} onPress={() => router.push('/learn')}>
          <Text style={styles.buttonText}>BELAJAR JAWI</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.button2]} onPress={() => router.push('/quiz')}>
          <Text style={styles.buttonText}>JOM MAIN GAME</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.button3]} onPress={() => router.push('/songs')}>
          <Text style={styles.buttonText}>JOM MENYANYI</Text>
        </Pressable>
      </View>

      <View style={styles.hill1} />
      <View style={styles.hill2} />

      <Text style={styles.kidLeft}>📖</Text>
      <Text style={styles.mouse}>🐭</Text>
      <Text style={styles.kidRight}>🎧</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fe8ff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  sun: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffd84d',
  },
  cloud: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 30,
    elevation: 3,
  },
  cloudSmall: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
  },
  cloudTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 80,
  },
  button: {
    width: 250,
    paddingVertical: 18,
    borderRadius: 22,
    marginBottom: 18,
    borderWidth: 3,
    borderColor: '#7a3cff',
    elevation: 5,
  },
  button1: {
    backgroundColor: '#9be22d',
  },
  button2: {
    backgroundColor: '#b7ef3a',
  },
  button3: {
    backgroundColor: '#b5e63a',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff5a00',
  },
  hill1: {
    position: 'absolute',
    bottom: 0,
    left: -40,
    width: 260,
    height: 140,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 140,
    backgroundColor: '#8dcf5c',
  },
  hill2: {
    position: 'absolute',
    bottom: 0,
    right: -30,
    width: 260,
    height: 160,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 0,
    backgroundColor: '#a7dd6e',
  },
  decor1: {
    position: 'absolute',
    top: 150,
    left: 35,
    fontSize: 44,
    color: '#d84cf5',
    fontWeight: 'bold',
  },
  decor2: {
    position: 'absolute',
    top: 230,
    right: 35,
    fontSize: 48,
    color: '#000',
    fontWeight: 'bold',
  },
  decor3: {
    position: 'absolute',
    top: 120,
    right: 28,
    fontSize: 50,
    color: '#000',
    fontWeight: 'bold',
  },
  decor4: {
    position: 'absolute',
    bottom: 130,
    right: 70,
    fontSize: 42,
    color: '#ff33cc',
    fontWeight: 'bold',
  },
  kidLeft: {
    position: 'absolute',
    bottom: 55,
    left: 40,
    fontSize: 42,
  },
  mouse: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    fontSize: 30,
  },
  kidRight: {
    position: 'absolute',
    bottom: 55,
    right: 40,
    fontSize: 42,
  },
});