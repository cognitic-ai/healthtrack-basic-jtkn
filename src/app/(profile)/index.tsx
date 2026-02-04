import AC from "@bacons/apple-colors";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { SettingsRow } from "@/components/settings-row";

export default function ProfileRoute() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [healthSharingEnabled, setHealthSharingEnabled] = useState(false);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 24 }}
    >
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 20,
          borderCurve: "continuous",
          padding: 20,
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: AC.systemBlue,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SymbolView name="person.fill" tintColor="white" size={40} />
        </View>
        <View style={{ alignItems: "center", gap: 4 }}>
          <Text
            style={{
              color: AC.label,
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Alex Johnson
          </Text>
          <Text
            style={{
              color: AC.secondaryLabel,
              fontSize: 15,
            }}
          >
            Member since Jan 2024
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: "continuous",
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            color: AC.secondaryLabel,
            fontSize: 13,
            fontWeight: "500",
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 4,
            textTransform: "uppercase",
          }}
        >
          Personal Info
        </Text>
        <SettingsRow
          icon="scalemass.fill"
          iconColor={String(AC.systemPurple)}
          title="Weight"
          value="72 kg"
          hasChevron
        />
        <View style={{ height: 1, backgroundColor: AC.separator, marginLeft: 56 }} />
        <SettingsRow
          icon="ruler.fill"
          iconColor={String(AC.systemTeal)}
          title="Height"
          value="178 cm"
          hasChevron
        />
        <View style={{ height: 1, backgroundColor: AC.separator, marginLeft: 56 }} />
        <SettingsRow
          icon="calendar"
          iconColor={String(AC.systemOrange)}
          title="Age"
          value="28 years"
          hasChevron
        />
      </View>

      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: "continuous",
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            color: AC.secondaryLabel,
            fontSize: 13,
            fontWeight: "500",
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 4,
            textTransform: "uppercase",
          }}
        >
          Goals
        </Text>
        <SettingsRow
          icon="flame.fill"
          iconColor={String(AC.systemRed)}
          title="Daily Calories"
          value="500 cal"
          hasChevron
        />
        <View style={{ height: 1, backgroundColor: AC.separator, marginLeft: 56 }} />
        <SettingsRow
          icon="figure.walk"
          iconColor={String(AC.systemGreen)}
          title="Daily Steps"
          value="10,000"
          hasChevron
        />
        <View style={{ height: 1, backgroundColor: AC.separator, marginLeft: 56 }} />
        <SettingsRow
          icon="bed.double.fill"
          iconColor={String(AC.systemIndigo)}
          title="Sleep Goal"
          value="8 hours"
          hasChevron
        />
      </View>

      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: "continuous",
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            color: AC.secondaryLabel,
            fontSize: 13,
            fontWeight: "500",
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 4,
            textTransform: "uppercase",
          }}
        >
          Settings
        </Text>
        <SettingsRow
          icon="bell.fill"
          iconColor={String(AC.systemRed)}
          title="Notifications"
          hasSwitch
          switchValue={notificationsEnabled}
          onSwitchChange={setNotificationsEnabled}
        />
        <View style={{ height: 1, backgroundColor: AC.separator, marginLeft: 56 }} />
        <SettingsRow
          icon="heart.fill"
          iconColor={String(AC.systemPink)}
          title="Health Sharing"
          subtitle="Share data with family"
          hasSwitch
          switchValue={healthSharingEnabled}
          onSwitchChange={setHealthSharingEnabled}
        />
        <View style={{ height: 1, backgroundColor: AC.separator, marginLeft: 56 }} />
        <SettingsRow
          icon="gearshape.fill"
          iconColor={String(AC.systemGray)}
          title="App Settings"
          hasChevron
        />
      </View>
    </ScrollView>
  );
}
