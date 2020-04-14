import {askAsync, PermissionStatus, LOCATION} from 'expo-permissions';
import {Alert} from "react-native"
import S from "../constants/Strings";

export const askForLocationPermissions = async () => {
    const response = await askAsync(LOCATION);
    if (response.status !== PermissionStatus.GRANTED) {
        Alert.alert(
            S.permissions.alert.title,
            S.permissions.alert.message,
            [
                {text: S.permissions.alert.btn1},
                {text: S.permissions.alert.btn2, onPress: askForLocationPermissions}
            ])
        return false;
    }
    return true;
}
