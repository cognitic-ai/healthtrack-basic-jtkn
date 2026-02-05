import * as AC from "@bacons/apple-colors";
import { SymbolView } from "expo-symbols";
import { ScrollView, View, Text, Pressable } from "react-native";
import { WorkoutCard } from "@/components/workout-card";

const recentWorkouts = [
  {
    name: "Morning Run",
    icon: "figure.run",
    duration: "32 min",
    calories: "320 cal",
    color: String(AC.systemGreen),
  },
  {
    name: "Strength Training",
    icon: "dumbbell.fill",
    duration: "45 min",
    calories: "280 cal",
    color: String(AC.systemOrange),
  },
  {
    name: "Cycling",
    icon: "bicycle",
    duration: "28 min",
    calories: "250 cal",
    color: String(AC.systemBlue),
  },
  {
    name: "Yoga",
    icon: "figure.yoga",
    duration: "30 min",
    calories: "120 cal",
    color: String(AC.systemPurple),
  },
];

const quickWorkouts = [
  { name: "Run", icon: "figure.run", color: String(AC.systemGreen) },
  { name: "Walk", icon: "figure.walk", color: String(AC.systemTeal) },
  { name: "Cycle", icon: "bicycle", color: String(AC.systemBlue) },
  { name: "Swim", icon: "figure.pool.swim", color: String(AC.systemCyan) },
];

export default function ActivityRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 24 }}
    >
      <View style={{ gap: 12 }}>
        <Text
          style={{
            color: AC.label,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Quick Start
        </Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          {quickWorkouts.map((workout) => (
            <Pressable
              key={workout.name}
              style={({ pressed }) => ({
                flex: 1,
                backgroundColor: AC.secondarySystemGroupedBackground,
                borderRadius: 16,
                borderCurve: "continuous",
                padding: 16,
                alignItems: "center",
                gap: 8,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: workout.color + "20",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SymbolView
                  name={workout.icon as any}
                  tintColor={workout.color}
                  size={24}
                />
              </View>
              <Text
                style={{
                  color: AC.label,
                  fontSize: 13,
                  fontWeight: "500",
                }}
              >
                {workout.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 20,
          borderCurve: "continuous",
          padding: 20,
          gap: 16,
        }}
      >
        <Text
          style={{
            color: AC.label,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Weekly Goal
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <View key={index} style={{ alignItems: "center", gap: 8 }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor:
                    index < 4
                      ? AC.systemGreen
                      : index === 4
                      ? AC.systemOrange
                      : AC.systemGray5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {index < 4 && (
                  <SymbolView name="checkmark" tintColor="white" size={16} />
                )}
              </View>
              <Text
                style={{
                  color: AC.secondaryLabel,
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                {day}
              </Text>
            </View>
          ))}
        </View>
        <Text style={{ color: AC.secondaryLabel, fontSize: 14 }}>
          4 of 5 workouts completed this week
        </Text>
      </View>

      <View style={{ gap: 12 }}>
        <Text
          style={{
            color: AC.label,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Recent Workouts
        </Text>
        {recentWorkouts.map((workout, index) => (
          <WorkoutCard key={index} {...workout} />
        ))}
      </View>
    </ScrollView>
  );
}
