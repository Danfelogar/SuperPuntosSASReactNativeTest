import React, {useContext, useState} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Controller} from 'react-hook-form';

import {IInputSingleImg} from './types';
import {PermissionsContext} from '../../context';
import {Button} from './Button';
import {inputSingleImage} from './stylesCustom';
import {heightFullScreen, widthFullScreen} from '../../utils';

export interface source {
  uri: string | undefined;
  type: string | undefined;
  name: string | undefined;
}

export function InputSingleImage({
  name: nameController,
  control,
  backgroundColor,
  btnTextColor,
}: IInputSingleImg): JSX.Element {
  //globalContext
  const {
    cameraState,
    galleryState,
    askCameraPermissions,
    askGalleryPermissions,
  } = useContext(PermissionsContext);
  const [isLoading, setIsLoading] = useState(false);
  //stylesCustom
  const {
    container,
    btnChangeDate,
    btnDeleteDate,
    titleOfDataBtn,
    titleOfDeleteBtn,
    helperText,
  } = inputSingleImage();
  return (
    <Controller
      shouldUnregister
      control={control}
      name={nameController}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        const takePhoto = () => {
          if (cameraState !== 'granted') {
            askCameraPermissions().then(res => {
              if (res === 'granted') {
                launchCamera(
                  {
                    mediaType: 'photo',
                    quality: 0.7,
                  },
                  ({assets, didCancel}: ImagePickerResponse) => {
                    if (didCancel) {
                      return;
                    }
                    if (!assets) {
                      return;
                    }
                    // console.log(assets);
                    const uri = assets[0]?.uri;
                    const type = assets[0]?.type;
                    const name = assets[0]?.fileName;
                    const source = {
                      uri,
                      type,
                      name,
                    };
                    onFilesSelected(source);
                  },
                );
              }
            });
          }
          if (cameraState === 'granted') {
            launchCamera(
              {
                mediaType: 'photo',
                quality: 0.7,
              },
              ({assets, didCancel}: ImagePickerResponse) => {
                if (didCancel) {
                  return;
                }
                if (!assets) {
                  return;
                }
                // console.log(assets);
                const uri = assets[0]?.uri;
                const type = assets[0]?.type;
                const name = assets[0]?.fileName;
                const source = {
                  uri,
                  type,
                  name,
                };
                onFilesSelected(source);
              },
            );
          }
        };

        const takePhotoByGallery = () => {
          // console.log('hola galería', Platform.Version);
          if (Platform.OS === 'android' && Platform.Version > 32) {
            //console.log('entro aquí 1');
            if (galleryState !== 'granted') {
              askGalleryPermissions().then(res => {
                // console.log({res});
                if (res === 'granted') {
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                      quality: 0.7,
                    },
                    ({
                      assets,
                      didCancel,
                      errorMessage,
                    }: ImagePickerResponse) => {
                      if (didCancel) {
                        return;
                      }
                      if (!assets) {
                        return;
                      }
                      if (errorMessage) {
                        return console.log({errorMessage});
                      }
                      // console.log({assets});
                      const uri = assets[0]?.uri;
                      const type = assets[0]?.type;
                      const name = assets[0]?.fileName;
                      const source = {
                        uri,
                        type,
                        name,
                      };
                      onFilesSelected(source);
                    },
                  );
                }
              });
            }
            if (galleryState === 'granted') {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  quality: 0.7,
                },
                ({assets, didCancel, errorMessage}: ImagePickerResponse) => {
                  if (didCancel) {
                    return;
                  }
                  if (!assets) {
                    return;
                  }
                  if (errorMessage) {
                    return console.log({errorMessage});
                  }
                  //console.log({assets});
                  const uri = assets[0]?.uri;
                  const type = assets[0]?.type;
                  const name = assets[0]?.fileName;
                  const source = {
                    uri,
                    type,
                    name,
                  };

                  onFilesSelected(source);
                },
              );
            }
          } else if (Platform.OS === 'android' && Platform.Version < 33) {
            //console.log('entro aquí 11');
            launchImageLibrary(
              {
                mediaType: 'photo',
                quality: 0.7,
              },
              ({assets, didCancel, errorMessage}: ImagePickerResponse) => {
                if (didCancel) {
                  return;
                }
                if (!assets) {
                  return;
                }
                if (errorMessage) {
                  return console.log({errorMessage});
                }
                //console.log({assets});
                const uri = assets[0]?.uri;
                const type = assets[0]?.type;
                const name = assets[0]?.fileName;
                const source = {
                  uri,
                  type,
                  name,
                };

                onFilesSelected(source);
              },
            );
          } else if (Platform.OS === 'ios') {
            //console.log('entro aquí 111');
            if (galleryState !== 'granted') {
              askGalleryPermissions().then(res => {
                // console.log({res});
                if (res === 'granted') {
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                      quality: 0.7,
                    },
                    ({
                      assets,
                      didCancel,
                      errorMessage,
                    }: ImagePickerResponse) => {
                      if (didCancel) {
                        return;
                      }
                      if (!assets) {
                        return;
                      }
                      if (errorMessage) {
                        return console.log({errorMessage});
                      }
                      // console.log({assets});
                      const uri = assets[0]?.uri;
                      const type = assets[0]?.type;
                      const name = assets[0]?.fileName;
                      const source = {
                        uri,
                        type,
                        name,
                      };
                      onFilesSelected(source);
                    },
                  );
                }
              });
            }
            if (galleryState === 'granted') {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  quality: 0.7,
                },
                ({assets, didCancel, errorMessage}: ImagePickerResponse) => {
                  if (didCancel) {
                    return;
                  }
                  if (!assets) {
                    return;
                  }
                  if (errorMessage) {
                    return console.log({errorMessage});
                  }
                  //console.log({assets});
                  const uri = assets[0]?.uri;
                  const type = assets[0]?.type;
                  const name = assets[0]?.fileName;
                  const source = {
                    uri,
                    type,
                    name,
                  };

                  onFilesSelected(source);
                },
              );
            }
          }
        };

        const onFilesSelected = async (target: source) => {
          // console.log({target});
          if (isLoading) {
            return;
          }
          setIsLoading(true);
          if (!target) {
            return;
          }

          try {
            //investigar mas sobre FormData
            const formData = new FormData();

            formData.append('image', target);
            // const {data} = await managementApi({
            //   method: 'post',
            //   url: '/upload',
            //   headers: {
            //     Accept: 'application/json, text/plain, */*',
            //     'Content-Type': 'multipart/form-data',
            //     'accept-language': 'es-ES,es;q=0.9,en;q=0.8',
            //     'Access-Control-Allow-Origin': '*',
            //   },
            //   data: formData,
            // });
            console.log('img====>', {formData});
            onChange(formData);
            setIsLoading(false);
          } catch (error) {
            console.log({error});
            setIsLoading(false);
          }
        };

        return (
          <View>
            {value && (
              <View
                style={{
                  width: widthFullScreen * 0.7,
                  paddingHorizontal: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  // source={
                  //   value
                  //     ? {uri: value}
                  //     : require('../../public/undraw_Air_support_re_nybl.png')
                  // }
                  source={require('../../public/undraw_Air_support_re_nybl.png')}
                  style={{
                    width: '100%',
                    height: heightFullScreen * 0.3,
                  }}
                />
                <Button
                  isLoading={isLoading}
                  colorSpinierLoading={btnTextColor}
                  buttonStyle={{
                    ...btnDeleteDate,
                    backgroundColor: backgroundColor,
                  }}
                  activeOpacity={0.9}
                  onPress={() => onChange('')}
                  textContent={
                    <Text
                      style={{
                        ...titleOfDeleteBtn,
                        color: btnTextColor,
                      }}>
                      Delete
                    </Text>
                  }
                />
              </View>
            )}
            <View style={{...container}}>
              <Button
                isLoading={isLoading}
                colorSpinierLoading={btnTextColor}
                buttonStyle={{
                  ...btnChangeDate,
                  width: 120,
                  backgroundColor: backgroundColor,
                }}
                activeOpacity={0.9}
                onPress={takePhoto}
                textContent={
                  <Text
                    style={{
                      ...titleOfDataBtn,
                      color: btnTextColor,
                    }}>
                    Photo
                  </Text>
                }
              />
              <Button
                isLoading={isLoading}
                colorSpinierLoading={btnTextColor}
                buttonStyle={{
                  ...btnChangeDate,
                  width: 140,
                  backgroundColor: backgroundColor,
                }}
                activeOpacity={0.9}
                onPress={takePhotoByGallery}
                textContent={
                  <Text
                    style={{
                      ...titleOfDataBtn,
                      color: btnTextColor,
                    }}>
                    Gallery
                  </Text>
                }
              />
            </View>
            {!!errors[nameController] && (
              <Text style={helperText}>
                {errors[nameController]?.message as string}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}
