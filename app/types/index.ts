export interface IWeather {
  [x: string]: any;
  weather: any;
    list: Array<{
        [x: string]: any;
        dt_txt: string;
        main: {
          temp: number;
        };
        weather: Array<{
          icon: any;
          description: string;
        }>;
      }>;
      name: string;
  }

