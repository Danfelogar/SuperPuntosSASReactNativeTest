import {IUserListData} from '../userList';

export interface IUserDetails extends IUserListData {
  username?: string;
  password?: string;
  password2?: string;
  entidad?: 'EPS';
}
