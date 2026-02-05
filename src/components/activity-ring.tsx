import * as AC from "@bacons/apple-colors";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface RingData {
  progress: number;
  color: string;
  label: string;
  value: string;
}

interface ActivityRingProps {
  rings: RingData[];
  size?: number;
}

export function ActivityRing({ rings, size = 180 }: ActivityRingProps) {
  const strokeWidth = 16;
  const gap = 6;
  const center = size / 2;

  return (
    <View style={{ alignItems: "center", gap: 16 }}>
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size}>
          {rings.map((ring, index) => {
            const radius = center - strokeWidth / 2 - (strokeWidth + gap) * index;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference * (1 - Math.min(ring.progress, 1));

            return (
              <View key={ring.label}>
                <Circle
                  cx={center}
                  cy={center}
                  r={radius}
                  stroke={String(AC.systemGray5)}
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                <Circle
                  cx={center}
                  cy={center}
                  r={radius}
                  stroke={ring.color}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${center} ${center})`}
                />
              </View>
            );
          })}
        </Svg>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        {rings.map((ring) => (
          <View key={ring.label} style={{ alignItems: "center", gap: 4 }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: ring.color,
              }}
            />
            <Text style={{ color: AC.secondaryLabel, fontSize: 12 }}>
              {ring.label}
            </Text>
            <Text
              selectable
              style={{
                color: AC.label,
                fontSize: 14,
                fontWeight: "600",
                fontVariant: ["tabular-nums"],
              }}
            >
              {ring.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
