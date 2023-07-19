type quiz = {
  question: string;
  answers: {
    score: number;
    text: string;
  }[];
};

export const gameofthrowns: quiz[] = [
  {
    question: "The best villains to watch on TV are the…",
    answers: [
      {
        score: 1,
        text: "The ones who are just misunderstood",
      },
      {
        score: 2,
        text: "The crazeist one",
      },
      {
        score: 4,
        text: "The ones who are just plain evil",
      },
      {
        score: 4,
        text: "creepy ones",
      },
    ],
  },
  {
    question: "do you ever root for the bad guys?",
    answers: [
      {
        score: 1,
        text: "of course not",
      },
      {
        score: 4,
        text: "only if i like the actor",
      },
      {
        score: 2,
        text: "sometimes,to make things interesting",
      },
      {
        score: 4,
        text: "All the time",
      },
    ],
  },
  {
    question:
      "Your friend has invited you to his/her birthday party, but you really don’t feel like going. What do you do?",
    answers: [
      {
        score: 4,
        text: "make an excuse and not go",
      },

      {
        score: 2,
        text: "I’ll go, but I’ll be late",
      },

      {
        score: 3,
        text: "dont go but send a nice gift",
      },
      {
        score: 1,
        text: "I’ll go, but I’ll leave early",
      },
    ],
  },
  {
    question: "Which is the best tool for controlling others?",
    answers: [
      {
        score: 4,
        text: "Fear",
      },
      {
        score: 5,
        text: "Money",
      },
      {
        score: 1,
        text: "Love",
      },
      {
        score: 2,
        text: "Religion",
      },
      {
        score: 3,
        text: "Politics",
      },
    ],
  },
  {
    question: "Which of these would most improve your life?",
    answers: [
      {
        score: 5,
        text: "More money",
      },
      {
        score: 1,
        text: "More love",
      },
      {
        score: 4,
        text: "More power",
      },
      {
        score: 2,
        text: "More time",
      },
      {
        score: 3,
        text: "More friends",
      },
    ],
  },
  {
    question: "Which of these is most important to you?",
    answers: [
      {
        score: 1,
        text: "Family & Friends",
      },
      {
        score: 2,
        text: "Love",
      },
      {
        score: 4,
        text: "Power",
      },
      {
        score: 5,
        text: "Money",
      },
    ],
  },
  {
    question: "How are your public speaking skills?",
    answers: [
      {
        score: 5,
        text: "I can charm anyone",
      },
      {
        score: 4,
        text: "i can persuade people to see my point of view",
      },
      {
        score: 3,
        text: "i can make people laugh",
      },
      {
        score: 2,
        text: "i dont like to speak in public",
      },
      {
        score: 1,
        text: "i tend to get nervous",
      },
    ],
  },
  {
    question: "which sport do you prefer?",
    answers: [
      {
        score: 3,
        text: "physical sports",
      },
      {
        score: 2,
        text: "tactical & strategic sports",
      },
      {
        score: 1,
        text: "sports that require teamwork",
      },
      {
        score: 4,
        text: "e-sports ",
      },
      {
        score: 5,
        text: "i dont like sports",
      },
    ],
  },
  {
    question: "which animal is the king of animals?",
    answers: [
      {
        score: 5,
        text: "lion",
      },
      {
        score: 2,
        text: "shark",
      },
      {
        score: 3,
        text: "kraken",
      },
      {
        score: 4,
        text: "dragon",
      },
      {
        score: 1,
        text: "wolf",
      },
    ],
  },
  {
    question: "Do you sometimes think you might be going crazy? ",
    answers: [
      {
        score: 4,
        text: "all the time",
      },
      {
        score: 3,
        text: "yeah i can be a little crazy sometimes",
      },
      {
        score: 2,
        text: "it possible but i dont think so",
      },
      {
        score: 1,
        text: "no,im always in control",
      },
    ],
  },
];

export type Family = {
  name: string;
  range: { min: number; max: number };
  text: string;
  // image: { uri: string; name: string };
  image: any;
  bgcolor: string;
};
export const families: Family[] = [
  {
    name: "Stark",
    range: { min: 10, max: 16 },
    text: ` You are a true Stark, you are loyal and brave. You are a true friend and
        a true leader. you’re willing to see things through to the end, to make
        sacrifices for the benefit of all, and to get murdered`,
    // image: {
    //   uri: require("../assets/gameofthrones/stark.jpg"),
    //   // uri: "../assets/gameofthrones/stark.jpg",
    //   name: "stark",
    // },

    image: require("../assets/gameofthrones/stark.jpg"),
    bgcolor: "#939393",
  },
  {
    name: "Lannister",
    range: { min: 23, max: 29 },
    text: `If you’re not rich, then you certainly should be! Although much reviled for their awesome power, the Lannisters are not an entirely bad bunch. There is, after all, a certain little person who, in addition to “always paying his debts”, is also quite keen on mentally harpooning buffoons. That’s just the sort of guy I’d love to have in my family!`,
    // image: {
    //   uri: require("../assets/gameofthrones/lannister.jpg"),
    //   // uri: "../assets/gameofthrones/lannister.jpg",
    //   name: "lannister",
    // },
    image: require("../assets/gameofthrones/lannister.jpg"),
    bgcolor: "#8A0904",
  },
  {
    name: "Targaryen",
    range: { min: 30, max: 36 },
    text: `That means there is a very good chance that you’re not firing on all cylinders, that you’re off your rocker, that you’re five cans short of a six-pack and an olive short of a pizza. In short: you’re probably crazy. But you’re also probably pretty hot and you may be packing dragons so I’m just going to smile and nod at everything you say.`,
    // image: {
    //   uri: require("../assets/gameofthrones/targerien.jpg"),
    //   // uri: "../assets/gameofthrones/targerien.jpg",
    //   name: "targaryen",
    // },
    image: require("../assets/gameofthrones/targerien.jpg"),
    bgcolor: "#BD1D07",
  },
  {
    name: "Baratheon",
    range: { min: 16, max: 22 },
    text: "To be honest, you’re not much of a leader. You’re more interested in drunken carousing than getting stuff done. On the other hand, there are many, many people in the world who also enjoy drunken carousing and not getting stuff done, so you’ll never be lonely!",
    // image: {
    //   uri: require("../assets/gameofthrones/bratheon.jpg"),
    //   // uri: "../assets/gameofthrones/bratheon.jpg",
    //   name: "baratheon",
    // },
    image: require("../assets/gameofthrones/bratheon.jpg"),
    bgcolor: "#E3C606",
  },
  {
    name: "Greyjoy",
    range: { min: 37, max: 42 },
    text: `
Thanks to all that “We do not sow, We take what is ours” nonsense, you’re probably a horrible person. I know, I know. It’s a tough pill to swallow. But hey, it could be worse. You could be House Frey. Those people are REALLY messed up, man`,
    // image: {
    //   uri: require("../assets/gameofthrones/greygoy.jpg"),
    //   // uri: "../assets/gameofthrones/greygoy.jpg",
    //   name: "greyjoy",
    // },
    image: require("../assets/gameofthrones/greygoy.jpg"),
    bgcolor: "#050000",
  },
  {
    name: "Frey",
    range: { min: 43, max: 46 },
    text: `You are incredibly creepy. Twisted, some might say. I don’t want to have anything to do with you or your conniving, lecherous, murderous family.`,
    // image: {
    //   uri: require("../assets/gameofthrones/frey.jpg"),
    //   // uri: "../assets/gameofthrones/frey.jpg",
    //   name: "frey",
    // },
    image: require("../assets/gameofthrones/frey.jpg"),
    bgcolor: "#7E7E7E",
  },
];

export const getFamily = (score: number) => {
  const family = families.find(
    (family) => score >= family.range.min && score <= family.range.max
  );
  return family;
};
export const getFamilyImage = (familyName: string) => {
  const family = families.find((family) => family.name === familyName);
  return family?.image || families[0].image;
};
