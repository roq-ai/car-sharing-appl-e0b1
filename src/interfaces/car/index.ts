import { CarSharingInterface } from 'interfaces/car-sharing';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  license_plate: string;
  created_at?: any;
  updated_at?: any;
  car_sharing?: CarSharingInterface[];

  _count?: {
    car_sharing?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
}
