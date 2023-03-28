import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import NearbyJobs from "../components/home/nearby/Nearbyjobs";
import { COLORS, icons, SIZES } from "../constants";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            headerShadowVisible: false,
          },
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={search}
            setSearchTerm={setSearch}
            handleClick={() => {
              if (search) {
                router.push(`/search/${search}`);
              }
            }}
          />

          <Popularjobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
