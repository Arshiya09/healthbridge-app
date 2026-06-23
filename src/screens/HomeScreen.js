import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";

import doctors from "../data/doctors.json";
import DoctorCard from "../components/DoctorCard";
import QuickCareBanner from "../components/QuickCareBanner";
import BottomTabBar from "../components/BottomTabBar";

const FILTERS = [
  { key: "network", label: "In-Network", icon: "✓" },
  { key: "nearest", label: "Nearest to Me", icon: "➤" },
  { key: "available", label: "Available Today", icon: "◷" },
];

const QUICK_CARE_INDEX = 3;

export default function HomeScreen({ navigation }) {
  const [activeFilters, setActiveFilters] = useState(["network"]);

  const toggleFilter = (key) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const listData = [];
  doctors.forEach((doc, i) => {
    listData.push({ type: "doctor", data: doc });
    if (i === QUICK_CARE_INDEX - 1) {
      listData.push({ type: "quickcare" });
    }
  });

  const renderItem = ({ item }) => {
    if (item.type === "quickcare") return <QuickCareBanner />;
    return (
      <DoctorCard
        doctor={item.data}
        onPress={() =>
          navigation.navigate("DoctorDetails", { doctor: item.data })
        }
      />
    );
  };

  const ListHeader = (
    <View>
      {/* ── Top bar ── */}
      <View style={styles.topBar}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.brandName}>HealthBridge</Text>
        <TouchableOpacity style={styles.swapBtn}>
          <Text style={styles.swapIcon}>⇄</Text>
        </TouchableOpacity>
      </View>

      {/* ── Filter pills ── */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilters.includes(f.key);
          return (
            <TouchableOpacity
              key={f.key}
              style={[styles.filterPill, isActive && styles.filterPillActive]}
              onPress={() => toggleFilter(f.key)}
              activeOpacity={0.8}
            >
              <Text
                style={[styles.filterIcon, isActive && styles.filterIconActive]}
              >
                {f.icon}
              </Text>
              <Text
                style={[
                  styles.filterLabel,
                  isActive && styles.filterLabelActive,
                ]}
              >
                {f.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* ── Divider ── */}
      <View style={styles.divider} />

      {/* ── Results meta row ── */}
      <View style={styles.metaRow}>
        <Text style={styles.metaResults}>
          <Text style={styles.metaCount}>148 </Text>
          Results for{"\n"}
          <Text style={styles.metaBold}>Specialists</Text>
        </Text>
        <View style={styles.metaSorted}>
          <Text style={styles.metaSortedLabel}>SORTED BY{"\n"}RELEVANCE</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F2FF" />
      <View style={styles.container}>
        <FlatList
          data={listData}
          keyExtractor={(item, index) =>
            item.type === "doctor" ? item.data.id.toString() : `qc-${index}`
          }
          renderItem={renderItem}
          ListHeaderComponent={ListHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
        <BottomTabBar
          activeTab="Search"
          onTabPress={(tab) => {
            if (tab === "Profile") navigation.navigate("Profile");
            if (tab === "Timeline") navigation.navigate("Timeline");
            // etc.
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F2FF",
  },

  container: {
    flex: 1,
    backgroundColor: "#F4F2FF",
  },

  listContent: {
    paddingBottom: 8,
  },

  // ── Top bar ──
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: "#F4F2FF",
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#D0C8F8",
    marginRight: 12,
  },

  brandName: {
    flex: 1,
    fontSize: 26,
    fontWeight: "800",
    color: "#4B2FBF",
    letterSpacing: -0.5,
  },

  swapBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EAE6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  swapIcon: {
    fontSize: 18,
    color: "#4B2FBF",
    fontWeight: "700",
  },

  // ── Filter pills ──
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    paddingBottom: 20,
  },

  filterPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#D0D0D0",
    backgroundColor: "#FFFFFF",
    gap: 7,
  },

  filterPillActive: {
    backgroundColor: "#4B2FBF",
    borderColor: "#4B2FBF",
  },

  filterIcon: {
    fontSize: 13,
    color: "#555",
    fontWeight: "700",
  },

  filterIconActive: {
    color: "#FFFFFF",
  },

  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  filterLabelActive: {
    color: "#FFFFFF",
  },

  // ── Divider ──
  divider: {
    height: 1,
    backgroundColor: "#E0DCF8",
    marginHorizontal: 0,
    marginBottom: 20,
  },

  // ── Results meta ──
  metaRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  metaResults: {
    fontSize: 16,
    color: "#1A1A2E",
    lineHeight: 26,
  },

  metaCount: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A2E",
  },

  metaBold: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A2E",
  },

  metaSorted: {
    alignItems: "flex-end",
    paddingTop: 4,
  },

  metaSortedLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#999",
    letterSpacing: 0.5,
    textAlign: "right",
    lineHeight: 17,
  },
});
