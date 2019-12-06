import { showLocation } from 'react-native-map-link';

interface IMapLink {
  lat: number;
  long: number;
}

export default async (args: IMapLink) => {
  try {
    await showLocation({
      latitude: 38.8976763,
      longitude: -77.0387185,
      googleForceLatLon: true,
      alwaysIncludeGoogle: true,
      dialogTitle: 'مشاهده در نقشه',
      dialogMessage: 'نقشه ی مورد نظر خود را انتخاب کنید',
      cancelText: 'لغو'
    });
  } catch (err) {}
};
