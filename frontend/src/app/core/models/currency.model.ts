import { Validator } from './validator.model';
export interface Currency {
   id?: string;
   stringId: string;
   currencyCode: string;
   reserve: number;
   card: string;
   icon: string | File;
   name: string;
   validator?: Validator;
}
