import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LaguScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 PILIH LAGU</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/lagu_alifbata')}
      >
        <Text style={styles.buttonText}>LAGU ALIF BA TA</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/lagu_nombor')}
      >
        <Text style={styles.buttonText}>LAGU NOMBOR JAWI</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/lagu_haiwan')}
      >
        <Text style={styles.buttonText}>LAGU HAIWAN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fe8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#4b2e83',
  },

  button: {
    width: 280,
    backgroundColor: '#9be22d',
    paddingVertical: 20,
    borderRadius: 25,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#7a3cff',
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff5a00',
  },
});