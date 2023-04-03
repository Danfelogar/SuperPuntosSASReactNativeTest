import React, {FC, ReactNode, useEffect, useReducer} from 'react';
import {Appearance, AppState} from 'react-native';
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface IColorsProps {
  currentTheme: string;
  dark: boolean;
  dividerColor: string;
  colors: {
    aaa: string;
    bbb: string;
    ccc: string;
    ddd: string;
    eee: string;
    fff: string;
    ggg: string;
    hhh: string;
    iii: string;
    background: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
  };
}

export interface IThemeState {
  theme: IColorsProps;
}

export const lightTheme = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.12)',
  colors: {
    aaa: '#B4BBD3',
    bbb: '#E4E7F1',
    ccc: '#BCC3D7',
    ddd: '#999DAB',
    eee: '#100F10',
    fff: '#5E5E5F',
    ggg: '#362B41',
    hhh: '#6A5691',
    iii: '#0742fa',
    background: '#fff',
    card: 'rgba(0, 0, 0, 0.08)',
    textPrimary: 'rgba(0, 0, 0, 0.87)',
    textSecondary: 'rgba(0, 0, 0, 0.6)',
    border: 'rgba(0, 0, 0, 0.04)',
  },
};

export const darkTheme = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255, 255, 255, 0.12)',
  colors: {
    background: '#202124',
    card: 'rgba(255, 255, 255, 0.16)',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.08)',
    aaa: '#B4BBD3',
    bbb: '#E4E7F1',
    ccc: '#BCC3D7',
    ddd: '#999DAB',
    eee: '#100F10',
    fff: '#5E5E5F',
    ggg: '#362B41',
    hhh: '#6A5691',
    iii: '#1565c0',
  },
};

export const THEME_INITIAL_STATE: IThemeState = {
  theme: lightTheme,
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE);

  const changeADarkMode = () => {
    dispatch({type: '[Theme] Switching To Light Mode', payload: darkTheme});
  };
  const changeALightMode = () => {
    dispatch({type: '[Theme] Switching To Dark Mode', payload: lightTheme});
  };

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? changeALightMode()
          : changeADarkMode();
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        //functions
        changeADarkMode,
        changeALightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
