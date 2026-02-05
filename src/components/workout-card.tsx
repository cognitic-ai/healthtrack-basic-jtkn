import * as AC from "@bacons/apple-colors";
import { SymbolView } from "expo-symbols";
import { View, Text, Pressable } from "react-native";

interface WorkoutCardProps {
  name: string;
  icon: string;
  duration: string;
  calories: string;
  color: string;
  onPress?: () => void;
}

export function WorkoutCard({ name, icon, duration, calories, color, onPress }: WorkoutCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: AC.secondarySystemGroupedBackground,
        borderRadius: 16,
        borderCurve: "continuous",
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          borderCurve: "continuous",
          backgroundColor: color + "20",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SymbolView name={icon as any} tintColor={color} size={28} />
      </View>

      <View style={{ flex: 1, gap: 4 }}>
        <Text
          style={{
            color: AC.label,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: AC.secondaryLabel,
            fontSize: 14,
          }}
        >
          {duration} • {calories}
        </Text>
      </View>

      <SymbolView
        name="chevron.right"
        tintColor={String(AC.tertiaryLabel)}
        size={16}
      />
    </Pressable>
  );
}
