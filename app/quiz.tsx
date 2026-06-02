import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function QuizScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cloud}>
        <Text style={styles.small}>PANDAI JAWI DENGAN</Text>
        <Text style={styles.logo}>SMART JAWI</Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push('/quiz_padankan')}>
        <Text style={styles.buttonText}>PADANKAN HURUF</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/quiz_dengar')}>
        <Text style={styles.buttonText}>DENGAR & PILIH</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/quiz_mengeja')}>
        <Text style={styles.buttonText}>BELAJAR MENGEJA</Text>
      </Pressable>
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
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 45,
    alignItems: 'center',
  },
  small: {
    fontSize: 11,
    fontWeight: '600',
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  button: {
    width: 280,
    backgroundColor: '#c47c9b',
    paddingVertical: 20,
    borderRadius: 30,
    marginBottom: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffe94d',
    fontSize: 18,
    fontWeight: 'bold',
  },
});