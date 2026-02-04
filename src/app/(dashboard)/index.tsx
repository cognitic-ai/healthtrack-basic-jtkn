import AC from "@bacons/apple-colors";
import { ScrollView, View, Text } from "react-native";
import { StatCard } from "@/components/stat-card";
import { ActivityRing } from "@/components/activity-ring";

export default function DashboardRoute() {
  const activityData = [
    { progress: 0.85, color: String(AC.systemRed), label: "Move", value: "420/500 cal" },
    { progress: 0.65, color: String(AC.systemGreen), label: "Exercise", value: "26/40 min" },
    { progress: 1.0, color: String(AC.systemCyan), label: "Stand", value: "12/12 hrs" },
  ];

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 20 }}
    >
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 20,
          borderCurve: "continuous",
          padding: 24,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: AC.label,
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 16,
          }}
        >
          Today's Activity
        </Text>
        <ActivityRing rings={activityData} />
      </View>

      <Text
        style={{
          color: AC.label,
          fontSize: 20,
          fontWeight: "700",
          marginTop: 8,
        }}
      >
        Health Stats
      </Text>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <StatCard
          title="Steps"
          value="8,432"
          unit="steps"
          icon="figure.walk"
          color={String(AC.systemOrange)}
          progress={84}
        />
        <StatCard
          title="Distance"
          value="5.2"
          unit="km"
          icon="location.fill"
          color={String(AC.systemBlue)}
          progress={65}
        />
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <StatCard
          title="Heart Rate"
          value="72"
          unit="bpm"
          icon="heart.fill"
          color={String(AC.systemRed)}
        />
        <StatCard
          title="Sleep"
          value="7.5"
          unit="hrs"
          icon="bed.double.fill"
          color={String(AC.systemIndigo)}
          progress={94}
        />
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <StatCard
          title="Calories"
          value="1,850"
          unit="kcal"
          icon="flame.fill"
          color={String(AC.systemOrange)}
        />
        <StatCard
          title="Water"
          value="6"
          unit="glasses"
          icon="drop.fill"
          color={String(AC.systemTeal)}
          progress={75}
        />
      </View>
    </ScrollView>
  );
}
