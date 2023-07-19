import { Image, ImageSource } from "expo-image";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Family, families, getFamily, getFamilyImage } from "../data/questions";

export default function Result({
  res,
  startagain,
}: {
  res: number;
  startagain: () => void;
}) {
  const [Result, setResult] = useState<Family>();

  useEffect(() => {
    setResult(getFamily(res) as Family);
  }, []);
  if (!Result?.name) return <View></View>;

  return (
    <View
      style={{
        flex: 1,
        gap: 25,
        alignItems: "center",
        backgroundColor: Result.bgcolor,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Result
      </Text>
      <Image
        source={getFamilyImage(Result?.name)}
        style={{
          width: 350,
          height: 420,
          resizeMode: "contain",
          marginTop: 50,
        }}
      />
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
        }}
      >
        You are house {Result?.name}
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center", color: "#001A53" }}>
        {Result?.text}
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          padding: 17,
          alignSelf: "center",
          // flex: 1,
          // alignItems: "flex-end",
          marginTop: 50,
          borderWidth: 2,
          borderColor: "#fff",
        }}
        onPress={startagain}
      >
        Start Again
      </Text>
    </View>
  );
}
