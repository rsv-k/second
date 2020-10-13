import { Currency } from './currency.model';
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
   phone: string;
   email: string;
   date: Date;
   status: 'canceled' | 'pending' | 'paid' | 'done' | 'freezed';
}
