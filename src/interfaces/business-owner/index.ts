import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessOwnerInterface {
  id?: string;
  user_id: string;
  business_name: string;
  business_address: string;
  business_contact: string;
  business_email: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BusinessOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  business_name?: string;
  business_address?: string;
  business_contact?: string;
  business_email?: string;
}
