import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TABS = [
  { key: "Timeline", label: "Timeline", icon: "📅" },
  { key: "Coverage", label: "Coverage", icon: "🛡" },
  { key: "Search", label: "Search", icon: "🔍" },
  { key: "Profile", label: "Profile", icon: "👤" },
];

export default function BottomTabBar({ activeTab = "Search", onTabPress }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress && onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconWrap, isActive && styles.activeIconWrap]}>
              <Text style={[styles.icon, isActive && styles.activeIcon]}>
                {tab.icon}
              </Text>
            </View>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingBottom: 20,
    paddingTop: 10,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },

  activeIconWrap: {
    backgroundColor: "#EFEAFF",
  },

  icon: {
    fontSize: 18,
  },

  activeIcon: {
    // tint handled by emoji — active state shown via background
  },

  label: {
    fontSize: 11,
    color: "#999",
    fontWeight: "500",
  },

  activeLabel: {
    color: "#6C4DFF",
    fontWeight: "700",
  },
});
