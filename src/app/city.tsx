import { COLORS, SPACING } from "@/style/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Place = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

const PLACES: Place[] = [
  {
    id: "1",
    name: "Держпром",
    description:
      "Один з перших хмарочосів Європи (1928) у стилі конструктивізму - символ Харкова.",
    icon: "🏢",
  },
  {
    id: "2",
    name: "Майдан Свободи",
    description:
      "Одна з найбільших міських площ Європи, місце для прогулянок і подій.",
    icon: "🏙️",
  },
  {
    id: "3",
    name: "Благовіщенський собор",
    description:
      "Найвищий православний храм України, видатна архітектурна пам'ятка міста.",
    icon: "⛪",
  },
];

export default function CityScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Моє місто</Text>
        <Text style={styles.subtitle}>Харків</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← На головну</Text>
      </TouchableOpacity>

      <FlatList
        data={PLACES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconBadge}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.placeDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.accent,
    fontWeight: "600",
    marginTop: 2,
  },
  backButton: {
    alignSelf: "flex-start",
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  backButtonText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "600",
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  iconText: {
    fontSize: 24,
  },
  cardTextContainer: {
    flex: 1,
  },
  placeName: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 4,
  },
  placeDescription: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 20,
  },
});
