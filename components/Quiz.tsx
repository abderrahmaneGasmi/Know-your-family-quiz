import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { gameofthrowns } from "../data/questions";

export default function Quiz({
  updateScore,
}: {
  updateScore: (score: number) => void;
}) {
  const [questionnumber, setQuestionnumber] = useState(1);
  const [progressstyle, setProgressstyle] = useState({
    color: "#845EC2",
    margin: 500,
  });
  const [totalscore, setTotalscore] = useState(0);
  const [selected, setSelected] = useState({
    question: "",
    score: 0,
  });
  const select = (question: string, score: number) => {
    setSelected({
      question: question,
      score: score,
    });
  };
  const nextquestion = () => {
    if (selected.question == "") {
      alert("Please select an answer");
      return;
    }
    if (questionnumber == gameofthrowns.length) {
      updateScore(totalscore + selected.score);
      setSelected({
        question: "",
        score: 0,
      });
      return;
    }

    setQuestionnumber(questionnumber + 1);
    setTotalscore(totalscore + selected.score);
    setSelected({
      question: "",
      score: 0,
    });
    setProgressstyle({
      color:
        questionnumber < 3
          ? "#845EC2"
          : questionnumber < 5
          ? "#D65DB1"
          : questionnumber < 7
          ? "#FF6F91"
          : questionnumber < 9
          ? "#FF9671"
          : "#FFC75F",
      margin: 500 - 50 * questionnumber + 1,
    });
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>Game of thrones Quiz</Text>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderWidth: 3,
          borderRadius: 25,
          height: 50,
        }}
      >
        <View
          style={{
            backgroundColor: progressstyle.color,
            flex: 1,
            borderRadius: 25,
            marginRight: progressstyle.margin,
          }}
        ></View>
      </View>
      <Text style={{ color: "#001A53", textAlign: "center", fontSize: 20 }}>
        Question {questionnumber} of {gameofthrowns.length}
      </Text>

      <View style={style.questioncontainer}>
        <Text style={style.questiontitle}>Question - {questionnumber}</Text>
        <Text style={{ fontSize: 30, color: "#001A53", fontWeight: "bold" }}>
          {gameofthrowns[questionnumber - 1].question}
        </Text>
        <View style={style.questionlist}>
          {gameofthrowns[questionnumber - 1].answers.map(
            (item, index: number) => (
              <QuestionItem
                key={index}
                question={item.text}
                selected={selected.question}
                select={select}
                score={item.score}
              />
            )
          )}
        </View>
        <Text
          onPress={nextquestion}
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#845EC2",
            alignSelf: "center",
            padding: 17,
          }}
        >
          Next Question
        </Text>
      </View>
    </View>
  );
}
const QuestionItem = ({
  question,
  selected,
  select,
  score,
}: {
  question: string;
  selected: string;
  select: (question: string, score: number) => void;
  score: number;
}) => {
  return (
    <View style={style.questionitem} onTouchEnd={() => select(question, score)}>
      <Text
        style={{
          fontSize: 19,
          backgroundColor: selected == question ? "#001A53" : "#fff",
          color: selected == question ? "#fff" : "#001A53",
          padding: 15,
          paddingLeft: 20,
          borderRadius: 17,
        }}
      >
        {question}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#001A53",
  },
  questioncontainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
    // marginBottom: 20,
  },
  questiontitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#845EC2",
  },
  questionlist: {
    flex: 1,
    gap: 30,
    marginTop: 50,
  },
  questionitem: {
    shadowColor: "#000",
    // backgroundColor: "white",
    borderRadius: 18,
    borderWidth: 1,

    // flex: 1,
    // borderRadius: 10,
    // justifyContent: "center",
    // alignContent: "flex-start",
    // alignItems: "flex-start",
    // alignSelf: "flex-start",
    // marginBottom: 20,
  },
});
