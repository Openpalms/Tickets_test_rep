export type IStops = 'all' | 'nonStop' | 'oneStop' | 'twoStops' | 'threeStops';
export type ICurrency = 'RUB' | 'USD' | 'EUR' | 'none';
export interface StopsFilter {
  all: IFilter;
  nonStop: IFilter;
  oneStop: IFilter;
  twoStops: IFilter;
  threeStops: IFilter;
  [key: string]: IFilter;
}
interface IFilter {
  value: number;
  checked: boolean;
}
export type Variants = {
  label: string;
  id: Pick<
    StopsFilter,
    'all' | 'nonStop' | 'oneStop' | 'twoStops' | 'threeStops'
  >;
};
