import { CarInterface } from 'interfaces/car';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface CarSharingInterface {
  id?: string;
  car_id: string;
  customer_id: string;
  start_time: any;
  end_time: any;
  pickup_location: string;
  dropoff_location: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface CarSharingGetQueryInterface extends GetQueryInterface {
  id?: string;
  car_id?: string;
  customer_id?: string;
  pickup_location?: string;
  dropoff_location?: string;
}
