import { useAudioPlayer } from 'expo-audio';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

export default function PadankanScreen() {
  const router = useRouter();

  const questions = [
    { gambar: '👕', soalan: 'BAJU', answer: 'ب', options: ['ت', 'ب', 'ك'] },
    { gambar: '👟', soalan: 'KASUT', answer: 'ك', options: ['ك', 'ب', 'ت'] },
    { gambar: '🧺', soalan: 'BAKUL', answer: 'ب', options: ['ن', 'ب', 'م'] },
    { gambar: '🐟', soalan: 'IKAN', answer: 'ا', options: ['ا', 'س', 'م'] },
    { gambar: '🌹', soalan: 'BUNGA', answer: 'ب', options: ['ج', 'ب', 'د'] },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showLine, setShowLine] = useState(false);

  const current = questions[index];

  const correctSound = useAudioPlayer(require('../assets/audio/correct.mp3'));
  const wrongSound = useAudioPlayer(require('../assets/audio/wrong.mp3'));

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.05, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  };

  const resetQuestion = () => {
    setShowLine(false);
    setSelectedAnswer(null);
  };

  const finishQuiz = (finalScore: number) => {
    Alert.alert('Selesai 🎉', `Markah anda: ${finalScore}/5`, [
      { text: 'Ulang', onPress: restartGame },
      { text: 'Keluar', onPress: () => router.push('/quiz') },
    ]);
  };

  const restartGame = () => {
    setIndex(0);
    setScore(0);
    resetQuestion();
  };

  const goNext = (newScore: number) => {
    resetQuestion();

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
      setShowLine(true);
      correctSound.seekTo(0);
      correctSound.play();

      const newScore = score + 1;
      setScore(newScore);

      Alert.alert('Betul!', 'Tahniah 🎉', [
        { text: 'OK', onPress: () => goNext(newScore) },
      ]);
    } else {
      setShowLine(false);
      wrongSound.seekTo(0);
      wrongSound.play();

      Alert.alert('Salah', `Jawapan betul ialah ${current.answer}`, [
        { text: 'OK', onPress: () => goNext(score) },
      ]);
    }
  };

  const selectedIndex = current.options.indexOf(selectedAnswer ?? '');
  const lineX = selectedIndex === 0 ? 67 : selectedIndex === 1 ? 155 : 243;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SMART JAWI</Text>
      <Text style={styles.score}>Markah: {score}</Text>

      <Text style={styles.title}>PADANKAN GAMBAR DAN HURUF YANG BETUL</Text>

      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.matchArea}>
          {showLine && (
            <Svg style={StyleSheet.absoluteFill}>
              <Line
                x1="155"
                y1="160"
                x2={lineX}
                y2="245"
                stroke="#2ecc71"
                strokeWidth="6"
              />
            </Svg>
          )}

          <Text style={styles.word}>{current.soalan}</Text>
          <Text style={styles.image}>{current.gambar}</Text>

          <View style={styles.options}>
            {current.options.map((option, i) => (
              <Pressable
                key={i}
                style={[
                  styles.option,
                  selectedAnswer === option && styles.selectedOption,
                ]}
                onPress={() => checkAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Animated.View>

      <Text style={styles.counter}>Soalan {index + 1} / {questions.length}</Text>
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
    width: 310,
    backgroundColor: '#fff3dc',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  matchArea: {
    width: 290,
    height: 330,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  },
  word: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    fontSize: 85,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: '#90ee90',
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