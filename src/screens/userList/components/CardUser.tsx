import React, {PureComponent} from 'react';
import {ICardUser} from './types';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {cardUserStyles} from './stylesComponents';

export class CardUser extends PureComponent<ICardUser> {
  render() {
    const {
      // idx,
      // scrollY,
      user,
      background,
      iii,
      textPrimary,
      textSecondary,
      onPressUser,
    } = this.props;
    //globalStyles
    const {animationCardContent, imgCard, textCC, textEmail, textFullName} =
      cardUserStyles({background, iii, textPrimary, textSecondary});

    // const inputRange = [-1, 0, 70 + 20 * 3 * idx, 70 + 20 * 3 * (idx + 2)];

    // const opacityInputRange = [
    //   -1,
    //   0,
    //   70 + 20 * 3 * idx,
    //   70 + 20 * 3 * (idx + 1),
    // ];

    // const scale = scrollY.interpolate({
    //   inputRange,
    //   outputRange: [1, 1, 1, 0],
    // });
    // const opacity = scrollY.interpolate({
    //   inputRange: opacityInputRange,
    //   outputRange: [1, 1, 1, 0],
    // });
    return (
      <View
        // style={{
        //   ...animationCardContent,
        //   opacity,
        //   transform: [{scale}],
        // }}
        style={animationCardContent}>
        <Image
          source={{
            uri:
              user.imagen ||
              'https://cdn-icons-png.flaticon.com/512/1548/1548784.png',
          }}
          style={imgCard}
        />
        <TouchableWithoutFeedback onPress={() => onPressUser(user.id)}>
          <View>
            <Text
              style={textFullName}>{`${user.nombre} ${user.apellido}`}</Text>
            <Text style={textCC}>{user.cedula}</Text>
            <Text style={textEmail}>{user.email}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
