// Imports

import { ReactNode, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Feather } from "@expo/vector-icons";

// Code

export default function Playground() {
  const [visible, setVisible] = useState(true);
  const [last, setLast] = useState("");
  const [current, setCurrent] = useState(new Date());
  const [bestString, setBestString] = useState("");
  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);
  function compareDates(date1: any, date2: any) {
    const diff = Math.abs(date1 - date2);

    const milliseconds = diff;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    let result = "";

    if (weeks > 0) {
      result += weeks + (weeks === 1 ? " Woche " : " Wochen ");
    }
    if (days > 0) {
      result += days + (days === 1 ? " Tag " : " Tage ");
    }
    if (hours > 0) {
      result += hours + (hours === 1 ? " Stunde " : " Stunden ");
    }
    if (minutes > 0) {
      result += minutes + (minutes === 1 ? " Minute " : " Minuten ");
    }
    if (seconds > 0) {
      result += seconds + (seconds === 1 ? " Sekunde " : " Sekunden ");
    }
    if (milliseconds > 0) {
      result +=
        milliseconds +
        (milliseconds === 1 ? " Millisekunde " : " Millisekunden ");
    }
    setLast(result);
    if (
      parseInt(result.replaceAll("[^0-9]", "")) <
      parseInt(bestString.replaceAll("[^0-9]", ""))
    ) {
      setBestString(result);
    }
    SecureStore.setItemAsync("best", result);
    return result.trim();
  }
  function placeObject() {
    setX(-1);
    setY(-1);
    setTimeout(() => {
      setCurrent(new Date());
      setX(Math.floor(Math.random() * 550));
      setY(Math.floor(Math.random() * 350));
    }, Math.floor(Math.random() * 1000));
  }
  async function revealer() {
    await SecureStore.getItemAsync("best")
      .then((value) => {
        return value;
      })
      .catch((err) => {
        return err;
      });
  }
  return (
    <View style={styles.base}>
      <View
        style={
          !visible
            ? { ...styles.playable }
            : { ...styles.playable, display: "none" }
        }
      >
        <TouchableOpacity
          onPress={() => {
            compareDates(current, new Date());
            setVisible(true);
          }}
          style={
            x > -1 && y > -1
              ? { ...styles.clicker, top: x, left: y }
              : { display: "none" }
          }
        ></TouchableOpacity>
      </View>
      <View
        style={
          visible ? { ...styles.stats } : { ...styles.stats, display: "none" }
        }
      >
        <View style={styles.highScoreContainer}>
          <Text style={{ fontSize: 30, color: "#E28413" }}>Last Score</Text>
          <Text style={{ fontSize: 20, color: "#E28413" }}>{last}</Text>
        </View>
        <TouchableOpacity
          style={styles.start}
          onPress={() => {
            setVisible(false);
            placeObject();
          }}
        >
          <Feather name="flag" size={30} color="#3957CF" />
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles

const styles = StyleSheet.create({
  base: {
    width: 400,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E28413",
    borderWidth: 3,
    borderRadius: 10,
  },
  playable: {
    width: 400,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    width: 500,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    backgroundColor: "#E28413",
    width: 200,
    height: 60,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  clicker: {
    width: 50,
    height: 50,
    backgroundColor: "#E28413",
    position: "absolute",
  },
  highScoreContainer: {
    width: 400,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
});
