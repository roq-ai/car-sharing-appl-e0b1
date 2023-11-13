import { CarSharingInterface } from 'interfaces/car-sharing';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  created_at?: any;
  updated_at?: any;
  car_sharing?: CarSharingInterface[];
  user?: UserInterface;
  _count?: {
    car_sharing?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}
