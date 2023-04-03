//customTexts

import {Dispatch, ReactNode, SetStateAction} from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
} from 'react-native';
import {KeyboardTypeOptions} from 'react-native';

export interface ICustomTextStyles {
  fontSize: number;
  fontWeight:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'bold'
    | 'normal';
  marginBottom: string | number;
  color: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
}

export interface IComponentCustomText extends ICustomTextStyles {
  children: JSX.Element | string;
}

//genericInputs

export interface IInputGeneric {
  borderColor: string;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  multiline?: boolean;
  multilineStyle?: StyleProp<any>;
  heightMultiline?: number;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  //control
  name: string;
  control: any;
}

export interface IInputSelect {
  borderColor: string;
  itemArr?: Array<{value: string; label: string}>;
  placeholder: string;
  placeholderTextColor: string;
  colorValueSelected: string;

  //control
  name: string;
  control: any;
}

//customBTN
export interface IButton {
  buttonStyle: StyleProp<any>;
  activeOpacity?: number;
  onPress: (event: GestureResponderEvent) => void;
  firstIcon?: ReactNode;
  textContent?: ReactNode;
  lastIcon?: ReactNode;
  isLoading?: boolean;
  colorSpinierLoading?: string;
}

//SnackbarCustom

export interface ISnackbarError {
  msmText: string;
  isOpen: boolean;
  handleChangeSnackbar?: () => void;
  styled?: StyleProp<any>;
  setIsSnackbarError: Dispatch<SetStateAction<boolean>>;
}

export interface ISnackbarSuccess {
  msmText: string;
  isOpen: boolean;
  handleChangeSnackbar?: () => void;
  setIsSnackbarSuccess: Dispatch<SetStateAction<boolean>>;
}

//custom updateImage

export interface IInputSingleImg {
  backgroundColor: string;
  btnTextColor: string;
  //control
  name: string;
  control: any;
}
