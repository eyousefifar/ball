export interface IResultCard {
  mode: 'reserve' | 'navigation';
  type: 'sport' | 'sportComplex';
  providerLogoUri: string;
  providerId: string;
  providerName: string;
  providerAddress: string;
  location: {
    lat: number;
    long: number;
  };
  style?: object;
}
