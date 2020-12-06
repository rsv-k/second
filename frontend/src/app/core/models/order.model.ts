import { Currency } from './currency.model';
import { Merchant } from './merchant.model';
export interface Order {
   id?: string;
   givenCurrencyAmount: number;
   takenCurrencyAmount: number;
   givenCurrencyCard: string;
   takenCurrencyCard: string;
   givenCurrency?: Currency;
   takenCurrency?: Currency;
   givenCurrencyId?: string;
   takenCurrencyId?: string;
   name?: string;
   surname?: string;
   phone: string;
   email: string;
   number?: number;
   date: Date;
   status: 'canceled' | 'pending' | 'paid' | 'done' | 'freezed';
   merchant?: Merchant;
}
