import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
export default function Home({
  setStart,
}: {
  setStart: React.Dispatch<
    React.SetStateAction<{
      start: boolean;
      category: string;
      score: number;
    }>
  >;
}) {
  const startgame = (category: string) => {
    setStart({ start: true, category: category, score: 0 });
  };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <View style={{}}>
        <Text style={styles.headertitle}>Quiz App</Text>
        <Text style={styles.headersubtitle}>
          Welcome to the check your house or family quiz
        </Text>
      </View>
      <View style={styles.categorycontainer}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            color: "#001A53",
          }}
        >
          Choose a category
        </Text>
        <View style={styles.categoryitems}>
          <CategoryItem
            image={require("../assets/gameofthrones/gameofthrones.jpg")}
            title="Game of Thrones"
            startgame={startgame}
          />
          <CategoryItem
            image={require("../assets/harrypotter/harrypotter.jpg")}
            title="Harry Potter"
            startgame={startgame}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B2869",
    paddingTop: 50,
    // paddingBottom: "50px",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },

  headertitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  headersubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  categorycontainer: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: "10px",
    // margin: "10px",
    borderRadius: 10,
    marginBottom: 20,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.53,
    // shadowRadius: 13.97,
    // width: "70vw",
  },
  categoryitems: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "space-evenly",
    // alignItems: "center",
    // alignSelf: "stretch",
    // height: "100%",
  },
  categoryitem: {
    paddingHorizontal: 70,
    paddingVertical: 20,
  },
  categoryitemimage: {
    width: 270,
    height: 270,
    borderRadius: 10,
  },
});
function CategoryItem({
  image,
  title,
  startgame,
}: {
  image: ImageSourcePropType;
  title: string;
  startgame: (category: string) => void;
}) {
  return (
    <View style={styles.categoryitem} onTouchEnd={() => startgame(title)}>
      {/* <Image
        // source={require("./assets/game of thrones/game of thrones.jpg")}
        // source={require(imageurl)}
        source={image}
        style={styles.categoryitemimage}
      /> */}
      <Image source={image} style={styles.categoryitemimage} />
      <Text
        style={{
          // marginTop: "10px",
          fontSize: 25,
          fontWeight: "bold",
          color: "#001A53",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
