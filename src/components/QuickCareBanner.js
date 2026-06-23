import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuickCareBanner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.label}>QUICK CARE</Text>
      <Text style={styles.title}>Urgent Care Wait Times</Text>
      <Text style={styles.body}>
        Nearby facility at Westside Clinic has only a 15-minute wait currently.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#4B2FBF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },

  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "rgba(255,255,255,0.65)",
    letterSpacing: 1,
    marginBottom: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 10,
    lineHeight: 28,
  },

  body: {
    fontSize: 14,
    color: "rgba(255,255,255,0.82)",
    lineHeight: 20,
    marginBottom: 18,
  },

  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignSelf: "flex-start",
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4B2FBF",
  },
});
