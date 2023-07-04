import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  CameraDevice,
  CameraPermissionStatus,
  useCameraDevices,
  TakePhotoOptions,
  RecordVideoOptions,
} from 'react-native-vision-camera';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostUploadScreen = () => {
  const [hasPermission, sethasPermission] = useState<boolean | null>(null);
  const [frontEnabled, setFrontEnabled] = useState<boolean>(false);
  const [flash, setFlash] = useState<boolean>(false);
  const [isCameraReady, setIsCameraReady] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microPhonePermission = await Camera.requestMicrophonePermission();

      sethasPermission(
        cameraPermission === 'authorized' &&
          microPhonePermission === 'authorized',
      );
    };
    getPermission();
  }, []);
  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();

  const backCamera = devices.back;
  const frontCamera = devices.front;

  const photoTake = async () => {
    setIsCameraReady(e => !e);
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: TakePhotoOptions = {
      flash: 'auto',
      qualityPrioritization: 'balanced',
      skipMetadata: true,
    };
    const photo = await camera.current.takePhoto(options);
    await setIsCameraReady(e => !e);
    console.log(photo);
  };

  const startRecording = () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: RecordVideoOptions = {
      onRecordingError: e => {
        console.log(e);
        setIsCameraReady(e => !e);
      },
      onRecordingFinished: e => {
        console.log(e);
        setIsCameraReady(e => !e);
      },
    };
    camera.current.startRecording(options);
  };
  const stopRecording = async () => {
    setIsCameraReady(e => !e);
    await camera.current?.stopRecording();
  };

  if (camera == null || hasPermission === null)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        photo={true}
        video={true}
        audio={true}
        device={frontEnabled ? frontCamera : backCamera}
        isActive={true}
        torch={flash ? 'on' : 'off'}
      />
      <View style={[styles.buttonsContainer, {top: 10}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        {!frontEnabled && (
          <MaterialIcons
            name={flash ? 'flash-on' : 'flash-off'}
            onPress={() => setFlash(e => !e)}
            size={30}
            color={colors.white}
          />
        )}
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        {isCameraReady && (
          <Pressable
            style={[
              styles.circle,
              {backgroundColor: isRecording ? colors.accent : colors.white},
            ]}
            onLongPress={startRecording}
            onPressOut={stopRecording}
            onPress={photoTake}
          />
        )}
        <MaterialIcons
          onPress={() => setFrontEnabled(e => !e)}
          name="flip-camera-ios"
          size={30}
          color={colors.white}
        />
      </View>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',

    position: 'absolute',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});

{
  /* <Pressable
  onPress={photoTake}
  style={{
    position: 'absolute',
    width: 50,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: 'red',
    bottom: 20,
  }}
/>; */
}
