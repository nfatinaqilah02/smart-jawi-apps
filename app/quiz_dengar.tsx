import { useAudioPlayer } from 'expo-audio';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function DengarPilihScreen() {
  const router = useRouter();

  const questions = [
    {
      audio: require('../assets/audio/alif.mp3'),
      answer: 'ا',
      options: ['ا', 'ب', 'ت'],
    },
    {
      audio: require('../assets/audio/ba.mp3'),
      answer: 'ب',
      options: ['ب', 'ج', 'ت'],
    },
    {
      audio: require('../assets/audio/ta.mp3'),
      answer: 'ت',
      options: ['ب', 'ت', 'ج'],
    },
    {
      audio: require('../assets/audio/jim.mp3'),
      answer: 'ج',
      options: ['ح', 'ج', 'خ'],
    },
    {
      audio: require('../assets/audio/mim.mp3'),
      answer: 'م',
      options: ['ن', 'م', 'ل'],
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const current = questions[index];

  const questionAudio = useAudioPlayer(current.audio);
  const correctSound = useAudioPlayer(
    require('../assets/audio/correct.mp3')
  );
  const wrongSound = useAudioPlayer(
    require('../assets/audio/wrong.mp3')
  );

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const playAudio = () => {
    questionAudio.seekTo(0);
    questionAudio.play();
  };

  const restartGame = () => {
    setIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const finishQuiz = (finalScore: number) => {
    Alert.alert(
      'Selesai 🎉',
      `Markah anda: ${finalScore}/5`,
      [
        { text: 'Ulang', onPress: restartGame },
        { text: 'Keluar', onPress: () => router.push('/quiz') },
      ]
    );
  };

  const goNext = (newScore: number) => {
    setSelectedAnswer(null);

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      finishQuiz(newScore);
    }
  };

  const checkAnswer = (option: string) => {
    animate();
    setSelectedAnswer(option);

    if (option === current.answer) {
      correctSound.seekTo(0);
      correctSound.play();

      const newScore = score + 1;
      setScore(newScore);

      Alert.alert('Betul!', 'Tahniah 🎉', [
        {
          text: 'OK',
          onPress: () => goNext(newScore),
        },
      ]);
    } else {
      wrongSound.seekTo(0);
      wrongSound.play();

      Alert.alert(
        'Salah',
        `Jawapan betul ialah ${current.answer}`,
        [
          {
            text: 'OK',
            onPress: () => goNext(score),
          },
        ]
      );
    }
  };

  return (
  <ImageBackground
    source={require('../assets/images/background.png')}
    style={styles.background}
    resizeMode="stretch"
  >
    <View style={styles.container}>
      <Text style={styles.logo}>SMART JAWI</Text>

      <Text style={styles.score}>
        Markah: {score}
      </Text>

      <Text style={styles.title}>
        DENGAR DAN PILIH HURUF YANG BETUL
      </Text>

      <Animated.View
        style={[
          styles.card,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Pressable
          style={styles.audioButton}
          onPress={playAudio}
        >
          <Text style={styles.audioIcon}>🔊</Text>
        </Pressable>

        <Text style={styles.audioText}>
          Tekan untuk dengar
        </Text>

        <View style={styles.options}>
          {current.options.map((option, i) => (
            <Pressable
              key={i}
              style={[
                styles.option,
                selectedAnswer === option &&
                  (option === current.answer
                    ? styles.correctOption
                    : styles.wrongOption),
              ]}
              onPress={() => checkAnswer(option)}
            >
              <Text style={styles.optionText}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>

      <Text style={styles.counter}>
        Soalan {index + 1} / {questions.length}
      </Text>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
},

  logo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4b2e83',
  },

  title: {
    backgroundColor: '#c47c9b',
    color: '#ffe94d',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 25,
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    width: 320,
    backgroundColor: '#fff3dc',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },

  audioButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffd36b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  audioIcon: {
    fontSize: 50,
  },

  audioText: {
    marginTop: 10,
    marginBottom: 25,
    fontWeight: 'bold',
  },

  options: {
    flexDirection: 'row',
    gap: 15,
  },

  option: {
    backgroundColor: '#ffd36b',
    width: 75,
    height: 75,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  correctOption: {
    backgroundColor: '#2ecc71',
  },

  wrongOption: {
    backgroundColor: '#e74c3c',
  },

  optionText: {
    fontSize: 45,
    color: '#6f4ae6',
    fontWeight: 'bold',
  },

  counter: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  background: {
  flex: 1,
  },
  });