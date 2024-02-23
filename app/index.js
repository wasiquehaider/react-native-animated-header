import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const Page = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
          }}
          style={styles.image}
        />
        <View style={{ height: 2000, backgroundColor: "#fff" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Parallax Scroll
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
});
