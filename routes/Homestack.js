import { createStackNavigator } from "@react-navigation/stack";
import SeedPhrase from "../Pages/SeedPhrase";
import ConfirmSeedPhrase from "../Pages/ConfirmSeedPhrase";

const screens = {
    SeedPhrase: {
        screen: SeedPhrase
    },
    ConfirmPhrase: {
        screen: ConfirmSeedPhrase
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);