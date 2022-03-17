import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import MapView, { Callout, LatLng, Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

export function Maps() {
  const mapRef = useRef<MapView>(null);

  const [location, setLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    (async () => {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        let { coords } = await getCurrentPositionAsync();

        setLocation(coords);
      }
    })();
  }, []);

  useEffect(() => {
    mapRef.current!.animateToRegion(
      {
        ...location,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      },
      2000
    );
  }, [location]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Maps</Text>
      <MapView
        ref={mapRef}
        followsUserLocation={false}
        showsMyLocationButton={true}
        style={styles.map}
      >
        <Marker title="Mi ubicacion" coordinate={location}>
          <Entypo name="home" size={24} color="#00a8ff" />
        </Marker>
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width,
    height: width,
  },
});
