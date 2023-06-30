import {View, Text, Pressable} from 'react-native';
import React, {ReactNode} from 'react';

interface IDoublePress {
  onDoublePress?: () => void;
  children: ReactNode;
}

export default function DoublePressable({
  onDoublePress = () => {},
  children,
}: IDoublePress) {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
}
