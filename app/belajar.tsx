import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LearnScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cloud}>
        <Text style={styles.cloudText}>PANDAI JAWI DENGAN</Text>
        <Text style={styles.cloudTitle}>SMART JAWI</Text>
      </View>

      <Text style={styles.pageTitle}>BELAJAR JAWI</Text>

      <Pressable style={styles.button} onPress={() => router.push('/belajar_huruf')}>
        <Text style={styles.buttonText}>KENAL HURUF JAWI</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/belajar_nombor')}>
        <Text style={styles.buttonText}>KENAL NOMBOR JAWI</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/belajar_sukukata')}>
        <Text style={styles.buttonText}>SUKU KATA JAWI</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ee3ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cloud: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  cloudText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  cloudTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b2e83',
    marginBottom: 30,
  },
  button: {
    width: 260,
    backgroundColor: '#6f4ae6',
    paddingVertical: 18,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#ffe600',
    fontSize: 18,
    fontWeight: 'bold',
  },
});