# HealthBridge – React Native Assignment

A React Native application built from a Figma design, implementing a doctor booking flow for HealthBridge.

---

## Screenshots

See `screenshots.pdf` in the repository root for all screen captures.

---

## Project Setup

### Prerequisites

- Node.js (v18 or above)
- npm or yarn
- Expo CLI
- Android Studio (for emulator) or Expo Go app (for physical device)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/healthbridge-app.git
cd healthbridge-app

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start

# 4. Run on Android emulator
# Press 'a' in the terminal (requires Android Studio + emulator running)

# 5. Run on physical device
# Install Expo Go from Play Store / App Store, then scan the QR code
```

### Demo Login Credentials

```
Email:    arshiya@healthbridge.com
Password: password123
```

---

## Project Structure

```
healthbridge-app/
├── App.js
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js        # Stack + Bottom Tab navigation setup
│   ├── screens/
│   │   ├── LoginScreen.js         # Screen 1 – Login with validation
│   │   ├── HomeScreen.js          # Screen 2 – Doctor listing
│   │   ├── DoctorDetailsScreen.js # Screen 3 – Doctor profile + booking
│   │   └── AppointmentConfirmationScreen.js  # Screen 4 – Booking confirmation
│   ├── components/
│   │   ├── DoctorCard.js          # Reusable doctor list card
│   │   ├── QuickCareBanner.js     # Urgent care promotional banner
│   │   └── BottomTabBar.js        # Custom tab bar component
│   └── data/
│       ├── doctors.json           # Doctor records
│       └── users.json             # User credentials for login validation
├── README.md
└── package.json
```

---

## Libraries & Packages Used

| Package                          | Version | Purpose                        |
| -------------------------------- | ------- | ------------------------------ |
| `expo`                           | ~53.x   | Expo managed workflow          |
| `react-native`                   | 0.79.x  | Core framework                 |
| `@react-navigation/native`       | ^7.x    | Navigation container           |
| `@react-navigation/native-stack` | ^7.x    | Stack navigator (push screens) |
| `@react-navigation/bottom-tabs`  | ^7.x    | Bottom tab navigator           |
| `react-native-screens`           | ~4.x    | Native screen optimization     |
| `react-native-safe-area-context` | ^5.x    | Safe area handling             |

---

## Screens Implemented

### Screen 1 – Login

- Email and password input fields
- Credentials validated against `src/data/users.json`
- Error message displayed for invalid credentials
- Show/hide password toggle
- Navigates to Home on successful login

### Screen 2 – Home Screen

- Displays doctor list using `FlatList`
- Data sourced from `src/data/doctors.json`
- Filter pills: In-Network, Nearest to Me, Available Today
- Results count and sort label
- QuickCare urgent care banner injected between doctor cards
- Each card is tappable and navigates to Doctor Details
- Bottom tab navigation (Timeline, Coverage, Search, Profile)

### Screen 3 – Doctor Details (About Doctor)

- Full doctor profile with hero image
- Specialty tags and experience indicator
- About / bio text
- Accepted insurance chips
- Interactive appointment booking calendar (day + time slot selection)
- Phone booking contact card
- Office location with map placeholder
- Verified Care stats
- **Book Appointment** button (navigates to Confirmation)

### Screen 4 – Appointment Confirmation

- Booking confirmed state with checkmark
- Appointment summary: physician, date & time, location
- Fee breakdown with insurance coverage
- Total due: $0.00 (FULLY COVERED)
- Confirmation ID
- Google Calendar sync and SMS alert toggles
- Share receipt with family option
- Done button (returns to Home)

---

## Assumptions Made During Development

1. **Login credentials** are stored in a local JSON file (`users.json`) as plain text. In a production app these would be hashed and stored securely on a backend.

2. **Doctor images** use `randomuser.me` placeholder URLs since the assignment states exact assets are not provided.

3. **Map in Office Location** is a styled placeholder view. A real implementation would use `react-native-maps` or link to Google Maps.

4. **The appointment calendar** uses hardcoded dates (OCT 23–26) as sample data. In production, available slots would come from an API.

5. **Bottom tabs** (Timeline, Coverage, Profile) show placeholder screens as those screens are not part of the assignment scope.

6. **"Book Appointment" button** was added to the Doctor Details screen as instructed in the assignment brief, even though it does not appear in the Figma design.

7. **Login Screen design** was created independently (not in Figma) following the purple `#4B2FBF` color theme of the rest of the application.

8. **Results count** (148 Results for Specialists) on the Home Screen is static display data.

---

## APK

The APK file is available in the **Releases** section of this repository, or download directly:
You can install and test the latest Android build using the link below:

`https://expo.dev/accounts/arshiyak572/projects/Healthbridge2/builds/73452cae-c95a-4756-b09c-aa43d3b66a7e`

To install on Android:

1. Transfer the APK to your Android device
2. Enable **Install from unknown sources** in Settings → Security
3. Open the APK file and install
