import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import users from "../data/users.json";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    const match = users.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password,
    );

    if (!match) {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    navigation.replace("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F2FF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Brand */}
        <View style={styles.brandBlock}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🏥</Text>
          </View>
          <Text style={styles.appName}>HealthBridge</Text>
          <Text style={styles.tagline}>Find and book top doctors near you</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Sign In</Text>

          {/* Error banner */}
          {error !== "" && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠ {error}</Text>
            </View>
          )}

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, error && styles.inputError]}
            placeholder="arshiya@healthbridge.com"
            placeholderTextColor="#AAAAAA"
            value={email}
            onChangeText={(t) => {
              setEmail(t);
              setError("");
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrap}>
            <TextInput
              style={[styles.passwordInput, error && styles.inputError]}
              placeholder="••••••••"
              placeholderTextColor="#AAAAAA"
              value={password}
              onChangeText={(t) => {
                setPassword(t);
                setError("");
              }}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity
              style={styles.eyeBtn}
              onPress={() => setShowPass((p) => !p)}
            >
              <Text style={styles.eyeIcon}>{showPass ? "🙈" : "👁"}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.loginBtnText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.signupRow}>
            <Text style={styles.signupPrompt}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Hint for evaluators */}
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>
              Demo credentials:{"\n"}
              📧 arshiya@healthbridge.com{"\n"}
              🔑 password123
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  brandBlock: {
    alignItems: "center",
    marginBottom: 32,
  },

  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E0D9FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  logoEmoji: {
    fontSize: 34,
  },

  appName: {
    fontSize: 30,
    fontWeight: "800",
    color: "#4B2FBF",
    marginBottom: 6,
  },

  tagline: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#4B2FBF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1A1A2E",
    marginBottom: 16,
  },

  errorBox: {
    backgroundColor: "#FFF0F0",
    borderWidth: 1,
    borderColor: "#FFCCCC",
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },

  errorText: {
    fontSize: 13,
    color: "#CC0000",
    fontWeight: "500",
    lineHeight: 18,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
    marginBottom: 7,
    marginTop: 4,
  },

  input: {
    backgroundColor: "#F7F5FF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: "#1A1A2E",
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: "transparent",
  },

  inputError: {
    borderColor: "#FFAAAA",
  },

  passwordWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F5FF",
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: "transparent",
  },

  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: "#1A1A2E",
    borderWidth: 0,
  },

  eyeBtn: {
    paddingHorizontal: 14,
  },

  eyeIcon: {
    fontSize: 16,
  },

  forgotWrap: {
    alignSelf: "flex-end",
    marginBottom: 20,
    marginTop: 6,
  },

  forgotText: {
    fontSize: 13,
    color: "#4B2FBF",
    fontWeight: "600",
  },

  loginBtn: {
    backgroundColor: "#4B2FBF",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#4B2FBF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 18,
  },

  loginBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },

  signupPrompt: {
    fontSize: 14,
    color: "#888",
  },

  signupLink: {
    fontSize: 14,
    color: "#4B2FBF",
    fontWeight: "700",
  },

  hintBox: {
    backgroundColor: "#F4F2FF",
    borderRadius: 10,
    padding: 12,
    marginTop: 4,
  },

  hintText: {
    fontSize: 12,
    color: "#6B5FBF",
    lineHeight: 20,
    fontWeight: "500",
  },
});
