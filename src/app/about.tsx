import { COLORS, SPACING } from "@/style/theme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ME = {
  name: "Царук Роман",
  bio:
    "Розробник програмного забезпечення з досвідом у веб та мобільній розробці. Маю глибокі знання у JavaScript, TypeScript, C#, .NET, Python та Django. Також активно працюю з React Native та Expo для створення кросплатформних мобільних додатків.",
  skills: ["JavaScript / TypeScript","C# / .NET","python / Django", "React Native & Expo", "GitHub", "UI/UX дизайн"],
};

export default function AboutScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← На головну</Text>
      </TouchableOpacity>

      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitial}>{ME.name.charAt(0)}</Text>
        </View>
      </View>

      <Text style={styles.name}>{ME.name}</Text>
      <Text style={styles.tagline}>Про мене</Text>

      <View style={styles.card}>
        <Text style={styles.bio}>{ME.bio}</Text>
      </View>

      <Text style={styles.sectionTitle}>Навички та інтереси</Text>
      <View style={styles.skillsList}>
        {ME.skills.map((skill) => (
          <View key={skill} style={styles.skillCard}>
            <View style={styles.skillIconBadge}>
              <Text style={styles.skillIconText}>✓</Text>
            </View>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: SPACING.md,
  },
  backButtonText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "600",
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: COLORS.accent,
  },
  avatarInitial: {
    fontSize: 40,
    fontWeight: "700",
    color: COLORS.card,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
  },
  tagline: {
    fontSize: 15,
    color: COLORS.accent,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 2,
    marginBottom: SPACING.lg,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: SPACING.lg,
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.text,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  skillsList: {
    gap: SPACING.sm,
  },
  skillCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: SPACING.sm + 4,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  skillIconBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
  },
  skillIconText: {
    color: COLORS.card,
    fontWeight: "700",
  },
  skillText: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: "500",
  },
});
