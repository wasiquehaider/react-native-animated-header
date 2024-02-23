import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import Header from "../../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 350;

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });
  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const alpha = interpolate(scrollOffset.value, [0, 100], [0, 1]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${alpha})`,
    };
  });

  const statusBackgroundAnimatedStyle = useAnimatedStyle(() => {
    const alpha = interpolate(scrollOffset.value, [0, 100], [0, 1]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${alpha})`,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.statusBarContainer, statusBackgroundAnimatedStyle]}
      >
        <StatusBar translucent barStyle="dark-content" />
      </Animated.View>

      <Header
        title="React Native Scroll"
        onLeftPress={() => {}}
        onRightPress={() => {}}
        customStyles={[
          styles.customHeader,
          { position: "absolute", top: insets.top },
        ]}
        titleAnimatedStyle={titleAnimatedStyle}
        backgroundAnimatedStyle={backgroundAnimatedStyle}
      />
      <View style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Animated.Image
            source={{
              uri: "https://images.unsplash.com/photo-1708555298096-5b3f26f0e1d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            progressiveRenderingEnabled
            style={[styles.image, imageAnimatedStyle]}
          />
          <View style={styles.scrollArea}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              React Native Scroll
            </Text>
            <Text>
              Sint Lorem id aliqua tempor amet fugiat culpa magna sint dolore
              officia sit commodo labore. Lorem anim enim non consequat eiusmod
              ad exercitation labore qui do tempor laborum in mollit. Aliqua
              duis ullamco officia excepteur cupidatat aute. Cillum exercitation
              sint ea dolor enim nostrud pariatur officia.
            </Text>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;

const getStyles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    statusBarContainer: {
      height: insets.top,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    },

    scrollArea: {
      height: 2000,
      backgroundColor: "#d3d3d3",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: -50,
      padding: 10,
    },
    image: {
      width: width,
      height: IMG_HEIGHT,
    },
    header: {
      backgroundColor: "#fff",
      height: 100,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    customHeader: {
      width: "100%",
      zIndex: 2,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
