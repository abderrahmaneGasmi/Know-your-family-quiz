import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

export default function App() {
  const [start, setStart] = useState({
    start: false,
    category: "",
    score: 0,
  });
  const updateScore = (score: number) => {
    setStart({ ...start, score: score });
  };
  const startagain = () => {
    setStart({ start: false, category: "", score: 0 });
  };
  return (
    <>
      {!start.start ? (
        <Home setStart={setStart} />
      ) : start.score == 0 ? (
        <Quiz updateScore={updateScore} />
      ) : (
        <Result res={start.score} startagain={startagain} />
      )}
    </>
  );
  // return <Quiz />;
  // return <Result res={9} startagain={startagain} />;
}
