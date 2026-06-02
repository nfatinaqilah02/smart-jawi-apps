import { useAudioPlayer } from 'expo-audio';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LaguAlifBataScreen() {
  const song = useAudioPlayer(
    require('../assets/audio/alifbata.mp3')
  );

  const playSong = () => {
    song.seekTo(0);
    song.play();
  };

  const pauseSong = () => {
    song.pause();
  };

  const restartSong = () => {
    song.seekTo(0);
    song.play();
  };

  return (
    <View style={styles.container}>
      <View style={styles.cloud}>
        <Text style={styles.cloudSmall}>
          PANDAI JAWI DENGAN
        </Text>

        <Text style={styles.cloudTitle}>
          SMART JAWI
        </Text>
      </View>

      <Text style={styles.title}>
        🎵 LAGU ALIF BA TA
      </Text>

      <View style={styles.card}>
        <Text style={styles.jawi}>
          ا ب ت
        </Text>

        <Text style={styles.mic}>
          🎤
        </Text>

        <Text style={styles.songTitle}>
          Alif Ba Ta
        </Text>

        <Text style={styles.subtitle}>
          Mari belajar huruf Jawi
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.play]}
            onPress={playSong}
          >
            <Text style={styles.buttonText}>
              ▶ MAIN
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.pause]}
            onPress={pauseSong}
          >
            <Text style={styles.buttonText}>
              ⏸ PAUSE
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.restart]}
            onPress={restartSong}
          >
            <Text style={styles.buttonText}>
              🔄 ULANG
            </Text>
          </Pressable>
        </View>
      </View>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
  },

  cloudSmall: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
  },

  cloudTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b2e83',
    marginBottom: 20,
  },

  card: {
    width: 320,
    backgroundColor: '#fff3dc',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },

  jawi: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#6f4ae6',
    marginBottom: 10,
  },

  mic: {
    fontSize: 70,
    marginBottom: 10,
  },

  songTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },

  buttonContainer: {
    width: '100%',
  },

  button: {
    paddingVertical: 14,
    borderRadius: 18,
    marginBottom: 12,
  },

  play: {
    backgroundColor: '#2ecc71',
  },

  pause: {
    backgroundColor: '#f39c12',
  },

  restart: {
    backgroundColor: '#3498db',
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});