import {Dispatch, SetStateAction} from 'react';

import {Animated} from 'react-native';
import {IUserListData} from '../types';

export interface IUserFlatList {
  users: Array<IUserListData>;
  onPressUser: (idUser: IUserListData['id']) => void;
  loading: boolean;
  hasError: boolean;
  onTryAgain: () => void;
  initialNumToRender: number;
  maxToRenderPerBatch: number;
  textError: string;
  setIsSnackbarError: Dispatch<SetStateAction<boolean>>;
}

export interface ICardUser {
  idx: number;
  user: IUserListData;
  scrollY?: Animated.Value;
  onPressUser: (idUser: number) => void;
  iii: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
}

export interface ICardUserStyles
  extends Pick<
    ICardUser,
    'iii' | 'textSecondary' | 'textPrimary' | 'background'
  > {}

export interface IListEmpty
  extends Pick<
    IUserFlatList,
    'hasError' | 'onTryAgain' | 'setIsSnackbarError' | 'textError' | 'loading'
  > {}
