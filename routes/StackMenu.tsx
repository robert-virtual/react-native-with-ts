import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "../pages";
import { TabsMenu } from "./TabsMenu";

type Pages = {
  tabs: undefined;
  settings: undefined;
};

const Stack = createNativeStackNavigator<Pages>();

export function StackMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="tabs"
        component={TabsMenu}
      />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
}
