import * as Location from 'expo-location';
const API_KEY = 'AIzaSyCW3K66kkMlo6ehf9Mi9_EGI63Z0PaQ6lo';
export const getmycoords = async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return null;
          }
          const location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;
          return { latitude, longitude };
        } catch (error) {
          console.error(error);
          return null;
        }
      };

export const geocodecoords = async ({ latitude, longitude }) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;
  try {
    const response = await fetch(URL);
    const json = await response.json();
    const formattedAddress = json.results[0].formatted_address;
    console.log(formattedAddress);
    return formattedAddress;
  } catch (error) {
    console.error(error);
    return null;
  }
};
