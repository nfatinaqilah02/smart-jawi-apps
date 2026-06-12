import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function TestFirebase() {

  const [hurufList, setHurufList] = useState<any[]>([]);

  useEffect(() => {

    const getData = async () => {

      try {

        const querySnapshot = await getDocs(
          collection(db, "huruf_jawi")
        );

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        data.sort((a, b) => a.id.localeCompare(b.id));

        setHurufList(data);

      } catch (error) {

        console.log(error);

      }

    };

    getData();

  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 30,
      }}
    >
      {hurufList.map((item) => (
        <View
          key={item.id}
          style={{
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 80 }}>
            {item.huruf}
          </Text>

          <Text style={{ fontSize: 30 }}>
            {item.nama}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}