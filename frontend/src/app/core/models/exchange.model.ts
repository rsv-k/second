import { Currency } from './currency.model';
import { Merchant } from './merchant.model';
export interface Exchange {
   id?: string;
   givenCurrency: Currency;
   takenCurrency: Currency;
   merchant?: Merchant;
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
