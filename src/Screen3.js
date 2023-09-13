import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const Screen3 = () => {
  const [Imagee, setImage] = useState(null);

  const TakePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera:true,
    }).then(image => {
      setImage(image);
    });
  };

  // const ChoosePhotoFromGallery = () => {
  //   ImagePicker.openPicker({
  //     mediaType: "video",
  //   }).then((video) => {
  //     console.log(video);
  //   });
  // };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 80,
      }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          alignItems: 'center',
          width: '50%',
          padding: 20,
        }}
        onPress={TakePhotoFromCamera}>
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Click Here from Camera
        </Text>
      </TouchableOpacity>

      {Imagee && (
        <Image
          source={{
            uri: Imagee.path,
          }}
          style={{width:300,height:299}}
        />
      )}

      {/* <TouchableOpacity
        style={{
          borderWidth: 1,
          alignItems: 'center',
          width: '50%',
          padding: 20,
          marginVertical: 30,
        }}
        onPress={ChoosePhotoFromGallery}>
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Click Here from Gallery
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
