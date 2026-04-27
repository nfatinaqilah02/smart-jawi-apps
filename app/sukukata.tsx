import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SukuKataScreen() {
  const sukuList = [
    { jawi: 'با', nama: 'BA' },
    { jawi: 'بي', nama: 'BI' },
    { jawi: 'بو', nama: 'BU' },
    { jawi: 'تا', nama: 'TA' },
    { jawi: 'تي', nama: 'TI' },
  ];

  const [index, setIndex] = useState(0);
  const item = sukuList[index];

  const next = () => {
    if (index < sukuList.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SUKU KATA JAWI</Text>

      <View style={styles.card}>
        <Text style={styles.jawi}>{item.jawi}</Text>
        <Text style={styles.nama}>{item.nama}</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button} onPress={prev}>
          <Text>◀</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={next}>
          <Text>▶</Text>
        </Pressable>
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: 250,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  jawi: {
    fontSize: 80,
  },
  nama: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#ffe14d',
    padding: 15,
    borderRadius: 10,
  },
});