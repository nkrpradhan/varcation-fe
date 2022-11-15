import { StyleSheet, SafeAreaView } from "react-native";
import { LeafletView, Marker } from "react-native-leaflet-view";
import { useState } from "react";

export default function CustomMap() {
  const [defaultCoordinate, setDefaultCoordinate] = useState({
    lat: 51.5072,
    lng: 0.1276,
  });
  const [secondCoordinate, setSecondCoordinate] = useState({
    lat: 51.5,
    lng: 0.1276,
  });
  const [landMarks, setLandMarks] = useState([
    { position: defaultCoordinate, icon: "📍", size: [32, 32] },
    { position: secondCoordinate, icon: "📍", size: [32, 32] },
  ]);
  return (
    <>
      <SafeAreaView style={styles.root}>
        <LeafletView
          mapMarkers={[...landMarks]}
          mapCenterPosition={defaultCoordinate}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    height: 500,
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    marginBottom: 300,
    marginLeft: 10,
    borderRadius: 30,
  },
});
