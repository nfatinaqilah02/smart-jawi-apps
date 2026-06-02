import { useAudioPlayer } from 'expo-audio';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
    Alert,
    Animated,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function MengejaScreen() {
  const router = useRouter();

  const questions = [
    {
      gambar: '👕',
      word: '_اجو',
      answer: 'ب',
      options: ['ب', 'ت', 'ن'],
    },
    {
      gambar: '🐱',
      word: '_وچيڠ',
      answer: 'ك',
      options: ['ك', 'م', 'ل'],
    },
    {
      gambar: '🍚',
      word: '_اسي',
      answer: 'ن',
      options: ['ب', 'ن', 'م'],
    },
    {
      gambar: '🚗',
      word: '_ريتا',
      answer: 'ك',
      options: ['ك', 'ت', 'ج'],
    },
    {
      gambar: '💡',
      word: '_مڤو',
      answer: 'ل',
      options: ['ل', 'ب', 'د'],
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const current = questions[index];

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
    <View style={styles.container}>
      <Text style={styles.logo}>SMART JAWI</Text>

      <Text style={styles.score}>
        Markah: {score}
      </Text>

      <Text style={styles.title}>
        BELAJAR MENGEJA
      </Text>

      <Animated.View
        style={[
          styles.card,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.image}>
          {current.gambar}
        </Text>

        <Text style={styles.word}>
          {current.word}
        </Text>

        <Text style={styles.instruction}>
          Pilih huruf yang hilang
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

  image: {
    fontSize: 90,
    marginBottom: 15,
  },

  word: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4b2e83',
  },

  instruction: {
    fontSize: 16,
    marginBottom: 20,
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
});