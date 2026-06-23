import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";

const DAYS = [
  {
    key: "mon",
    day: "MON",
    date: "OCT 23",
    slots: ["09:00 AM", "10:30 AM", "02:00 PM"],
  },
  {
    key: "tue",
    day: "TUE",
    date: "OCT 24",
    slots: ["08:30 AM", "11:00 AM", "03:30 PM"],
  },
  {
    key: "wed",
    day: "WED",
    date: "OCT 25",
    slots: ["09:30 AM", "12:00 PM", "04:00 PM"],
  },
  {
    key: "thu",
    day: "THU",
    date: "OCT 26",
    slots: ["08:00 AM", "01:00 PM", "05:00 PM"],
  },
];

export default function DoctorDetailsScreen({ route, navigation }) {
  const { doctor } = route.params;

  const [selectedDay, setSelectedDay] = useState("tue");
  const [selectedSlot, setSelectedSlot] = useState("08:30 AM");

  const handleBook = () => {
    const day = DAYS.find((d) => d.key === selectedDay);
    navigation.navigate("AppointmentConfirmation", {
      doctor,
      date: `${day.day}, ${day.date}`,
      time: selectedSlot,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F2FF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Profile</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero card */}
        <View style={styles.heroCard}>
          <Image source={{ uri: doctor.image }} style={styles.heroImage} />
          <View style={styles.heroBody}>
            <Text style={styles.heroName}>{doctor.name}</Text>
            <View style={styles.tagRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  {doctor.specialty.split(" ")[0]}
                </Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>15+ Yrs Exp.</Text>
              </View>
            </View>
            <Text style={styles.aboutText}>
              Board-certified internist specializing in holistic preventative
              care and chronic disease management. Committed to providing
              unhurried, patient-centered diagnostics.
            </Text>
            <Text style={styles.insuranceLabel}>ACCEPTED INSURANCE</Text>
            <View style={styles.insuranceRow}>
              {["BLUE CROSS", "AETNA GOLD", "UNITEDHEALTH", "CIGNA PPO"].map(
                (ins) => (
                  <View key={ins} style={styles.insuranceChip}>
                    <Text style={styles.insuranceChipText}>{ins}</Text>
                  </View>
                ),
              )}
            </View>
          </View>
        </View>

        {/* Available Appointments */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Available Appointments</Text>
          <Text style={styles.sectionSub}>Select a time to book</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.calendarScroll}
        >
          {DAYS.map((col) => {
            const isActiveDay = col.key === selectedDay;
            return (
              <TouchableOpacity
                key={col.key}
                style={[
                  styles.dayColumn,
                  isActiveDay && styles.dayColumnActive,
                ]}
                onPress={() => {
                  setSelectedDay(col.key);
                  setSelectedSlot(col.slots[0]);
                }}
                activeOpacity={0.85}
              >
                <Text
                  style={[
                    styles.dayLabel,
                    isActiveDay && styles.dayLabelActive,
                  ]}
                >
                  {col.day}
                </Text>
                <Text
                  style={[
                    styles.dateLabel,
                    isActiveDay && styles.dateLabelActive,
                  ]}
                >
                  {col.date}
                </Text>
                <View style={styles.slotList}>
                  {col.slots.map((slot) => {
                    const isSelected = isActiveDay && slot === selectedSlot;
                    return (
                      <TouchableOpacity
                        key={slot}
                        style={[
                          styles.slotBtn,
                          isSelected && styles.slotBtnSelected,
                        ]}
                        onPress={() => {
                          setSelectedDay(col.key);
                          setSelectedSlot(slot);
                        }}
                        activeOpacity={0.8}
                      >
                        <Text
                          style={[
                            styles.slotText,
                            isSelected && styles.slotTextSelected,
                          ]}
                        >
                          {slot}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Phone booking */}
        <View style={styles.phoneCard}>
          <View style={styles.phoneIconCircle}>
            <Text style={styles.phoneIcon}>📞</Text>
          </View>
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneTitle}>
              Prefer to book over the phone?
            </Text>
            <Text style={styles.phoneBody}>
              Call Dr. Rao's Front Desk{"\n"}
              Directly at{" "}
              <Text style={styles.phoneLink}>+1 (555) 123–4567</Text>
            </Text>
            <Text style={styles.phoneHours}>
              Open Mon–Fri, 8:00 AM – 5:00 PM EST
            </Text>
          </View>
        </View>

        {/* Office Location */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationPin}>📍</Text>
            <Text style={styles.locationTitle}>Office Location</Text>
          </View>
          <Text style={styles.locationAddress}>
            1221 Health Plaza, Suite 400{"\n"}Medical District, New York, NY
            10021
          </Text>
          {/* Map placeholder */}
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapGrid}>⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿</Text>
            <View style={styles.mapPin}>
              <Text style={styles.mapPinIcon}>📍</Text>
            </View>
          </View>
        </View>

        {/* Verified Care */}
        <View style={styles.verifiedCard}>
          <View style={styles.verifiedHeader}>
            <Text style={styles.verifiedBadge}>✦</Text>
            <Text style={styles.verifiedTitle}>Verified Care</Text>
          </View>
          <View style={styles.verifiedRow}>
            <Text style={styles.verifiedIcon}>☆</Text>
            <Text style={styles.verifiedText}>4.9 / 5.0 Patient Rating</Text>
          </View>
          <View style={styles.verifiedRow}>
            <Text style={styles.verifiedIcon}>👍</Text>
            <Text style={styles.verifiedText}>98% Recommend Dr. Rao</Text>
          </View>
          <View style={styles.verifiedRow}>
            <Text style={styles.verifiedIcon}>⏱</Text>
            <Text style={styles.verifiedText}>Low wait times (Avg 8 mins)</Text>
          </View>
        </View>

        {/* Book CTA */}
        <TouchableOpacity
          style={[styles.bookBtn, !selectedSlot && styles.bookBtnDisabled]}
          onPress={handleBook}
          activeOpacity={0.85}
          disabled={!selectedSlot}
        >
          <Text style={styles.bookBtnText}>
            {selectedSlot
              ? `Book ${selectedSlot} Appointment`
              : "Select a time slot"}
          </Text>
        </TouchableOpacity>

        <View style={{ height: 8 }} />
      </ScrollView>

      <BottomTabBar activeTab="Search" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F2FF",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#F4F2FF",
  },

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  backArrow: {
    fontSize: 26,
    color: "#1A1A2E",
    lineHeight: 30,
    marginTop: -2,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
  },

  headerRight: { width: 38 },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  // Hero card
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },

  heroImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#B2EDE7",
    resizeMode: "cover",
  },

  heroBody: {
    padding: 18,
  },

  heroName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#4B2FBF",
    marginBottom: 10,
  },

  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
  },

  tag: {
    backgroundColor: "#F0EDFF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },

  tagText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B2FBF",
  },

  aboutText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
    marginBottom: 16,
  },

  insuranceLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 1,
    marginBottom: 10,
  },

  insuranceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  insuranceChip: {
    borderWidth: 1.5,
    borderColor: "#27AE60",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  insuranceChipText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#27AE60",
  },

  // Appointments section
  sectionHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1A1A2E",
  },

  sectionSub: {
    fontSize: 12,
    color: "#999",
  },

  calendarScroll: {
    paddingBottom: 4,
    gap: 10,
    marginBottom: 20,
  },

  dayColumn: {
    width: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#E8E8E8",
  },

  dayColumnActive: {
    borderColor: "#4B2FBF",
    borderWidth: 2,
  },

  dayLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.8,
    marginBottom: 2,
    textAlign: "center",
  },

  dayLabelActive: {
    color: "#4B2FBF",
  },

  dateLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1A1A2E",
    marginBottom: 12,
    textAlign: "center",
  },

  dateLabelActive: {
    color: "#4B2FBF",
  },

  slotList: {
    gap: 8,
  },

  slotBtn: {
    backgroundColor: "#F4F2FF",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  slotBtnSelected: {
    backgroundColor: "#4B2FBF",
  },

  slotText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  slotTextSelected: {
    color: "#FFFFFF",
  },

  // Phone card
  phoneCard: {
    backgroundColor: "#F0EDFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  phoneIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#DDD7FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    marginTop: 2,
  },

  phoneIcon: {
    fontSize: 20,
  },

  phoneInfo: {
    flex: 1,
  },

  phoneTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 6,
    lineHeight: 20,
  },

  phoneBody: {
    fontSize: 13,
    color: "#444",
    lineHeight: 20,
    marginBottom: 4,
  },

  phoneLink: {
    color: "#4B2FBF",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  phoneHours: {
    fontSize: 11,
    color: "#999",
  },

  // Location card
  locationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  locationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  locationPin: {
    fontSize: 16,
    marginRight: 6,
  },

  locationTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4B2FBF",
  },

  locationAddress: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 12,
  },

  mapPlaceholder: {
    height: 140,
    backgroundColor: "#C8E6F5",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  mapGrid: {
    fontSize: 10,
    color: "rgba(255,255,255,0.4)",
    letterSpacing: 8,
    lineHeight: 18,
  },

  mapPin: {
    position: "absolute",
    bottom: "30%",
    left: "50%",
    marginLeft: -16,
  },

  mapPinIcon: {
    fontSize: 32,
  },

  // Verified care
  verifiedCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  verifiedHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  verifiedBadge: {
    fontSize: 16,
    color: "#4B2FBF",
    marginRight: 6,
  },

  verifiedTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4B2FBF",
  },

  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  verifiedIcon: {
    fontSize: 16,
    marginRight: 10,
    width: 22,
  },

  verifiedText: {
    fontSize: 14,
    color: "#333",
  },

  // Book button
  bookBtn: {
    backgroundColor: "#4B2FBF",
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: "center",
    shadowColor: "#4B2FBF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },

  bookBtnDisabled: {
    backgroundColor: "#B0A8D8",
  },

  bookBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
});
