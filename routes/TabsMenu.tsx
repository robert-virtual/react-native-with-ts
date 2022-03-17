import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Maps } from "../pages";

type Pages = {
  home: undefined;
  maps: undefined;
};
const Tab = createBottomTabNavigator();

export function TabsMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="maps" component={Maps} />
    </Tab.Navigator>
  );
}
