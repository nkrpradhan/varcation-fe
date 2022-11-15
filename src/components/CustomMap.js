import { StyleSheet, SafeAreaView } from "react-native";
import { LatLng, LeafletView } from "react-native-leaflet-view";

const DEFAULT_COORDINATE = {
  lat: 51.5072,
  lng: 0.1276,
};

export default function CustomMap() {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <LeafletView
          mapMarkers={[
            {
              position: DEFAULT_COORDINATE,
              icon: "📍",
              size: [32, 32],
            },
          ]}
          mapCenterPosition={DEFAULT_COORDINATE}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    height: 480,
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    marginBottom: 350,
    marginLeft: 10,
    borderRadius: 30,
  },
});
