import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function DoctorCard({ doctor, onPress }) {
  const isInNetwork = doctor.network === "In-Network";

  return (
    <View style={styles.card}>
      {/* Top section: photo + name + badge */}
      <View style={styles.topRow}>
        <Image source={{ uri: doctor.image }} style={styles.avatar} />
        <View style={styles.nameBlock}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
        </View>
        <View
          style={[
            styles.networkBadge,
            isInNetwork ? styles.inNetworkBadge : styles.outNetworkBadge,
          ]}
        >
          <View
            style={[
              styles.networkDot,
              isInNetwork ? styles.inNetworkDot : styles.outNetworkDot,
            ]}
          />
          <Text
            style={[
              styles.networkText,
              isInNetwork ? styles.inNetworkText : styles.outNetworkText,
            ]}
          >
            {doctor.network}
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Rating + Distance */}
      <View style={styles.metaRow}>
        <Text style={styles.star}>★</Text>
        <Text style={styles.rating}>{doctor.rating.toFixed(1)}</Text>
        <Text style={styles.metaSpacer}> </Text>
        <Text style={styles.pinIcon}>📍</Text>
        <Text style={styles.distance}>{doctor.distance}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Next Slot */}
      <View style={styles.slotBox}>
        <Text style={styles.slotLabel}>NEXT SLOT</Text>
        <Text style={styles.slotTime}>{doctor.nextSlot}</Text>
      </View>

      {/* View Profile & Book */}
      <TouchableOpacity onPress={onPress} style={styles.bookRow}>
        <Text style={styles.bookLink}>View Profile &amp; Book &gt;</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    // subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    paddingBottom: 0,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
  },

  nameBlock: {
    flex: 1,
    marginLeft: 12,
    paddingBottom: 16,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
    lineHeight: 22,
  },

  specialty: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },

  networkBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 8,
    maxWidth: 90,
  },

  inNetworkBadge: {
    backgroundColor: "#E8F8F1",
  },

  outNetworkBadge: {
    backgroundColor: "#FFF8E6",
  },

  networkDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 5,
  },

  inNetworkDot: {
    backgroundColor: "#27AE60",
  },

  outNetworkDot: {
    backgroundColor: "#F5A623",
  },

  networkText: {
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 14,
    flexShrink: 1,
  },

  inNetworkText: {
    color: "#27AE60",
  },

  outNetworkText: {
    color: "#E08A00",
  },

  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginHorizontal: 16,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  star: {
    fontSize: 15,
    color: "#F5A623",
  },

  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A2E",
    marginLeft: 4,
  },

  metaSpacer: {
    fontSize: 14,
    color: "#ccc",
  },

  pinIcon: {
    fontSize: 13,
  },

  distance: {
    fontSize: 14,
    color: "#555",
    marginLeft: 4,
  },

  slotBox: {
    backgroundColor: "#F4F1FF",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  slotLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#888",
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  slotTime: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6C4DFF",
  },

  bookRow: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 14,
  },

  bookLink: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6C4DFF",
  },
});

// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// export default function DoctorCard({ doctor, onPress }) {
//   return (
//     <TouchableOpacity style={styles.card} onPress={onPress}>
//       <Image source={{ uri: doctor.image }} style={styles.image} />

//       <View style={styles.info}>
//         <Text style={styles.name}>{doctor.name}</Text>

//         <Text style={styles.specialization}>{doctor.specialization}</Text>

//         <Text style={styles.details}>
//           ⭐ {doctor.rating} • 📍 {doctor.distance}
//         </Text>
//         <Text style={styles.available}>Next: {doctor.nextAvailable}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     padding: 15,
//     borderRadius: 20,

//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 8,
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },

//     elevation: 4,
//     marginBottom: 18,
//   },

//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 20,
//   },

//   info: {
//     marginLeft: 15,
//     justifyContent: "center",
//   },

//   name: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   specialization: {
//     color: "#666",
//     marginTop: 3,
//   },

//   details: {
//     marginTop: 6,
//   },
//   available: {
//     color: "#6C4DFF",
//     marginTop: 5,
//     fontWeight: "600",
//   },
// });
