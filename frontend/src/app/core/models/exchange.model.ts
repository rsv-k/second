import { Currency } from './currency.model';
export interface Exchange {
   givenCurrency: string | Currency;
   takenCurrency: string | Currency;
   givenCurrencyCourse: number;
   takenCurrencyCourse: number;
   maxGivenCurrency: number;
   maxTakenCurrency: number;
   minGivenCurrency: number;
   minTakenCurrency: number;
   comment: string;
}
