import AC from "@bacons/apple-colors";
import { SymbolView } from "expo-symbols";
import { View, Text, Pressable, Switch } from "react-native";

interface SettingsRowProps {
  icon: string;
  iconColor: string;
  title: string;
  subtitle?: string;
  value?: string;
  hasChevron?: boolean;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onPress?: () => void;
}

export function SettingsRow({
  icon,
  iconColor,
  title,
  subtitle,
  value,
  hasChevron = false,
  hasSwitch = false,
  switchValue = false,
  onSwitchChange,
  onPress,
}: SettingsRowProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={hasSwitch}
      style={({ pressed }) => ({
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        gap: 12,
        opacity: pressed && !hasSwitch ? 0.7 : 1,
      })}
    >
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          borderCurve: "continuous",
          backgroundColor: iconColor,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SymbolView name={icon as any} tintColor="white" size={18} />
      </View>

      <View style={{ flex: 1, gap: 2 }}>
        <Text
          style={{
            color: AC.label,
            fontSize: 16,
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              color: AC.secondaryLabel,
              fontSize: 13,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {value && (
        <Text
          selectable
          style={{
            color: AC.secondaryLabel,
            fontSize: 16,
          }}
        >
          {value}
        </Text>
      )}

      {hasSwitch && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ true: String(AC.systemGreen) }}
        />
      )}

      {hasChevron && (
        <SymbolView
          name="chevron.right"
          tintColor={String(AC.tertiaryLabel)}
          size={14}
        />
      )}
    </Pressable>
  );
}
