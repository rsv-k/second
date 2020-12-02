import { Currency } from './currency.model';
export interface Exchange {
   id?: string;
   givenCurrencyId?: string;
   takenCurrencyId?: string;
   givenCurrency?: Currency;
   takenCurrency?: Currency;
   givenCurrencyCourse: number;
   takenCurrencyCourse: number;
   maxGivenCurrency: number;
   maxTakenCurrency: number;
   minGivenCurrency: number;
   minTakenCurrency: number;
   comment: string;
   isActive?: boolean;
   fields: string[];
   enableWMInterface: boolean;
}
