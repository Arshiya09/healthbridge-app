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
  Switch,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";

export default function AppointmentConfirmationScreen({ route, navigation }) {
  const { doctor, date, time } = route.params;
  const [calendarSync, setCalendarSync] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

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
        <Text style={styles.headerTitle}>Appointment Details</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Confirmation hero */}
        <View style={styles.heroBlock}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>
          <Text style={styles.confirmedTitle}>Booking Confirmed</Text>
          <Text style={styles.confirmedSubtitle}>
            Your appointment has been successfully scheduled.
          </Text>
        </View>

        {/* Appointment details card */}
        <View style={styles.detailCard}>
          {/* Physician row */}
          <View style={styles.physicianRow}>
            <View style={styles.physicianLeft}>
              <Text style={styles.detailLabel}>PHYSICIAN</Text>
              <Text style={styles.physicianName}>{doctor.name}</Text>
              <Text style={styles.physicianSpecialty}>{doctor.specialty}</Text>
            </View>
            <Image
              source={{ uri: doctor.image }}
              style={styles.physicianAvatar}
            />
          </View>

          {/* Date & Time row */}
          <View style={styles.infoRow}>
            <View style={styles.infoIconCircle}>
              <Text style={styles.infoIcon}>📅</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.detailLabel}>DATE & TIME</Text>
              <Text style={styles.infoValueBold}>
                {date || "Friday June 19, 2025"}
              </Text>
              <Text style={styles.infoValueSub}>
                {time ? `${time} EST` : "10:30 AM EST"}
              </Text>
            </View>
          </View>

          {/* Location row */}
          <View style={styles.infoRow}>
            <View style={styles.infoIconCircle}>
              <Text style={styles.infoIcon}>📍</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.detailLabel}>LOCATION</Text>
              <Text style={styles.infoValueBold}>
                HealthBridge Medical Center
              </Text>
              <Text style={styles.infoValueSub}>
                123 Wellness Way, Suite 400{"\n"}San Francisco, CA 94103
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.cardDivider} />

          {/* Fee breakdown */}
          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Consultation Fee</Text>
            <Text style={styles.feeStrike}>$240.00</Text>
          </View>
          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Insurance Coverage</Text>
            <Text style={styles.feeDiscount}>– $240.00</Text>
          </View>
          <View style={styles.cardDivider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Due</Text>
            <View style={styles.totalRight}>
              <Text style={styles.totalAmount}>$0.00</Text>
              <View style={styles.coveredBadge}>
                <Text style={styles.coveredText}>FULLY COVERED</Text>
              </View>
            </View>
          </View>

          {/* Confirmation ID */}
          <View style={styles.confirmIdRow}>
            <Text style={styles.confirmId}>CONFIRMATION ID: HB-992-04X</Text>
          </View>
        </View>

        {/* Settings toggles card */}
        <View style={styles.toggleCard}>
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>
              Automatically sync to my{"\n"}Google Calendar
            </Text>
            <Switch
              value={calendarSync}
              onValueChange={setCalendarSync}
              trackColor={{ false: "#D0D0D0", true: "#4B2FBF" }}
              thumbColor="#FFFFFF"
            />
          </View>
          <View
            style={[
              styles.toggleRow,
              { borderTopWidth: 1, borderTopColor: "#F0F0F0", paddingTop: 14 },
            ]}
          >
            <Text style={styles.toggleLabel}>
              Turn off duplicate SMS alerts
            </Text>
            <Switch
              value={smsAlerts}
              onValueChange={setSmsAlerts}
              trackColor={{ false: "#D0D0D0", true: "#4B2FBF" }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        {/* Share receipt card */}
        <TouchableOpacity style={styles.shareCard} activeOpacity={0.8}>
          <Text style={styles.shareIcon}>💬</Text>
          <Text style={styles.shareText}>
            Send appointment receipt details to family or caregiver via text
            message
          </Text>
        </TouchableOpacity>

        {/* Done button */}
        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.85}
        >
          <Text style={styles.doneBtnText}>Done</Text>
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

  // Hero / confirmation block
  heroBlock: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 24,
  },

  checkCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#B8960C",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  checkIcon: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "700",
  },

  confirmedTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1A2E",
    marginBottom: 8,
  },

  confirmedSubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },

  // Detail card
  detailCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },

  physicianRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  physicianLeft: {
    flex: 1,
    marginRight: 12,
  },

  detailLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#6C4DFF",
    letterSpacing: 1,
    marginBottom: 4,
  },

  physicianName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1A1A2E",
    marginBottom: 3,
  },

  physicianSpecialty: {
    fontSize: 13,
    color: "#888",
  },

  physicianAvatar: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  infoIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0EDFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 2,
  },

  infoIcon: {
    fontSize: 18,
  },

  infoContent: {
    flex: 1,
  },

  infoValueBold: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 2,
  },

  infoValueSub: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },

  cardDivider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 12,
    borderStyle: "dashed",
  },

  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  feeLabel: {
    fontSize: 14,
    color: "#555",
  },

  feeStrike: {
    fontSize: 14,
    color: "#AAA",
    textDecorationLine: "line-through",
  },

  feeDiscount: {
    fontSize: 14,
    color: "#555",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
  },

  totalRight: {
    alignItems: "flex-end",
  },

  totalAmount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#4B2FBF",
    marginBottom: 4,
  },

  coveredBadge: {
    backgroundColor: "#E8F8F1",
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },

  coveredText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#27AE60",
    letterSpacing: 0.8,
  },

  confirmIdRow: {
    marginTop: 16,
    alignItems: "center",
  },

  confirmId: {
    fontSize: 10,
    color: "#AAA",
    letterSpacing: 0.8,
    fontWeight: "600",
  },

  // Toggle card
  toggleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 14,
  },

  toggleLabel: {
    fontSize: 14,
    color: "#333",
    flex: 1,
    marginRight: 12,
    lineHeight: 20,
  },

  // Share card
  shareCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E8E4FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },

  shareIcon: {
    fontSize: 22,
    marginRight: 12,
  },

  shareText: {
    flex: 1,
    fontSize: 13,
    color: "#4B2FBF",
    fontWeight: "600",
    lineHeight: 18,
    textAlign: "center",
  },

  // Done button
  doneBtn: {
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

  doneBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
});
