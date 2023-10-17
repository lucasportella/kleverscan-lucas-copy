export interface IDataCard {
  title: string;
  Icon: any;
  value: number;
  variation?: string;
}

export interface IEpochCard {
  title: string;
  value: number;
  timestamp: number;
  subtext: string;
  chart: any;
}
