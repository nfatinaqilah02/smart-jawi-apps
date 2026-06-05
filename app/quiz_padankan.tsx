import { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function QuizPadankanScreen() {
  const allQuestions = [
    {
      image: require('../assets/images/buku.png'),
      answer: 'ب',
      options: ['ب', 'ت', 'ن'],
    },
    {
      image: require('../assets/images/mata.png'),
      answer: 'م',
      options: ['م', 'ك', 'ب'],
    },
    {
      image: require('../assets/images/nun_nenas.png'),
      answer: 'ن',
      options: ['ن', 'ب', 'ت'],
    },
    {
      image: require('../assets/images/kaf_kucing.png'),
      answer: 'ك',
      options: ['ك', 'م', 'ن'],
    },
    {
      image: require('../assets/images/ta_tali.png'),
      answer: 'ت',
      options: ['ت', 'ب', 'ك'],
    },
  ];

  const [questions] = useState(
    [...allQuestions].sort(() => Math.random() - 0.5)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[currentQuestion];

  const checkAnswer = (selectedAnswer: string) => {
    let newScore = score;

    if (selectedAnswer === current.answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    // Soalan seterusnya
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Tamat quiz
      if (newScore >= 4) {
        Alert.alert(
          '🎉 Tahniah!',
          `Skor Anda: ${newScore}/5`,
          [
            {
              text: 'Main Lagi',
              onPress: () => {
                setCurrentQuestion(0);
                setScore(0);
              },
            },
            {
              text: 'Keluar',
              style: 'cancel',
            },
          ]
        );
      } else {
        Alert.alert(
          '🙂 Cuba Lagi',
          `Skor Anda: ${newScore}/5`,
          [
            {
              text: 'Cuba Lagi',
              onPress: () => {
                setCurrentQuestion(0);
                setScore(0);
              },
            },
            {
              text: 'Keluar',
              style: 'cancel',
            },
          ]
        );
      }
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            PILIH HURUF JAWI
          </Text>
          <Text style={styles.title}>
            YANG BETUL
          </Text>
        </View>

        <Text style={styles.progress}>
          SOALAN {currentQuestion + 1}/5
        </Text>

        <Text style={styles.score}>
          SKOR: {score}
        </Text>

        <View style={styles.card}>
          <Image
            source={current.image}
            style={styles.image}
          />
        </View>

        <View style={styles.answerContainer}>
          {current.options.map((option, index) => (
            <Pressable
              key={index}
              style={styles.answerButton}
              onPress={() => checkAnswer(option)}
            >
              <Text style={styles.answerText}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  titleBox: {
    marginTop: 150,
    backgroundColor: '#D89CB5',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  title: {
    color: '#FFE600',
    fontSize: 20,
    fontWeight: 'bold',
  },

  progress: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5E4BFF',
  },

  score: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5E4BFF',
  },

  card: {
    width: 250,
    height: 250,
    backgroundColor: '#F4CDBD',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },

  answerContainer: {
    marginTop: 30,
    width: '80%',
  },

  answerButton: {
    backgroundColor: '#F4CDBD',
    borderRadius: 20,
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: 'center',
  },

  answerText: {
    fontSize: 55,
    color: '#5E4BFF',
    fontWeight: 'bold',
  },
});