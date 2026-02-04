import AC from "@bacons/apple-colors";
import { SymbolView } from "expo-symbols";
import { View, Text } from "react-native";

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  icon: string;
  color: string;
  progress?: number;
}

export function StatCard({ title, value, unit, icon, color, progress }: StatCardProps) {
  return (
    <View
      style={{
        backgroundColor: AC.secondarySystemGroupedBackground,
        borderRadius: 16,
        borderCurve: "continuous",
        padding: 16,
        flex: 1,
        minWidth: 150,
        gap: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <SymbolView
          name={icon as any}
          tintColor={color}
          size={24}
        />
        <Text
          style={{
            color: AC.secondaryLabel,
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      </View>

      <View style={{ gap: 4 }}>
        <Text
          selectable
          style={{
            color: AC.label,
            fontSize: 28,
            fontWeight: "700",
            fontVariant: ["tabular-nums"],
          }}
        >
          {value}
          <Text style={{ fontSize: 16, fontWeight: "500", color: AC.secondaryLabel }}>
            {" "}{unit}
          </Text>
        </Text>
      </View>

      {progress !== undefined && (
        <View
          style={{
            height: 6,
            backgroundColor: AC.systemGray5,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${Math.min(progress, 100)}%`,
              height: "100%",
              backgroundColor: color,
              borderRadius: 3,
            }}
          />
        </View>
      )}
    </View>
  );
}
