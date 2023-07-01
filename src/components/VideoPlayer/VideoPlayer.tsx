import {StyleSheet, Text, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  const [remainingDuration, setRemainingDuration] = useState<string>('00:00');
  const [isPaused, setIsPaused] = useState(false);
  function formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let formattedTime = '';

    if (hours > 0) {
      formattedTime += `${hours.toString().padStart(2, '0')}:`;
    }

    formattedTime += `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
    return formattedTime;
  }

  return (
    <View>
      <Video
        source={{uri: uri}}
        style={styles.video}
        resizeMode="cover"
        paused={paused || isPaused}
        onProgress={({currentTime, seekableDuration, playableDuration}) => {
          const remainingSeconds = Math.round(seekableDuration - currentTime);
          setRemainingDuration(formatTime(remainingSeconds));
        }}
        repeat
        muted={muted}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={'white'}
        />
      </Pressable>
      <Pressable
        style={styles.remainingTime}
        onPress={() => setIsPaused(v => !v)}>
        <Text>{remainingDuration}</Text>
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 50,
  },
  remainingTime: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
