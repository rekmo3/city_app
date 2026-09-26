import { COLORS, SPACING } from "@/style/theme";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      
      <View style={styles.navSection}>
        <Link href="/city" asChild>
          <TouchableOpacity style={styles.navButton} activeOpacity={0.8}>
            <FontAwesome name="home" size={24} color="#E8703A" />
            <Text style={styles.navButtonText}> Моє місто</Text>
          </TouchableOpacity>
        </Link>

        <Link href={"/about" as any} asChild>
          <TouchableOpacity
            style={StyleSheet.flatten([styles.navButton, styles.navButtonSecondary])}
            activeOpacity={0.8}
          >
            <Entypo name="man" size={24} color="#1B3A4B" />
            <Text style={styles.navButtonText}> Про мене</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.divider} />

      <Text style={styles.title}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.counterButton}
          activeOpacity={0.7}
          onPress={() => setCounter(counter + 1)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.counterButton}
          activeOpacity={0.7}
          onPress={() => setCounter(counter - 1)}
        >
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
  },
  appSubtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: "center",
    marginTop: 2,
    marginBottom: SPACING.xl,
  },
  navSection: {
    gap: SPACING.md,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navButtonSecondary: {
    backgroundColor: COLORS.accent,
  },
  navIcon: {
    fontSize: 20,
    marginRight: SPACING.sm,
  },
  navButtonText: {
    color: COLORS.card,
    fontSize: 17,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.xl,
  },
  title: {
    fontSize: 22,
    color: COLORS.text,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonText: {
    color: COLORS.card,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: SPACING.md,
    marginTop: SPACING.md,
  },
  counterButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 8,
  },
});
