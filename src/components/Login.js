import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Item,
  Label,
  Input,
  Box,
  FormControl,
  WarningOutlineIcon,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default props => {
  return (
    // Container start
    <>
      <ScrollView style={styles.login} showsVerticalScrollIndicator={false}>
        <ImageBackground
          // source={require('../images/image.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.brandView}>
            <Icon name="users" style={styles.iconSharp} />
            <Text style={styles.brandViewText}>Vision Go!</Text>
          </View>
        </ImageBackground>
        {/* Botom view */}
        <View style={styles.bottomView}>
          <View style={{padding: 40}}>
            <Text style={{color: '#4632A1', fontSize: 34}}>Welcome</Text>
            <Text>
              Don't have an account?
              <Text style={{color: 'red', fontStyle: 'italic'}}>
                {' '}
                Register now
              </Text>
              {/* Form Inputs View */}
            </Text>
            <View style={{marginTop: 50}}>
              <SafeAreaView>
                <TextInput style={styles.input} placeholder="E-mail" />
                <TextInput style={styles.input} placeholder="Password" />
              </SafeAreaView>
            </View>
            {/* <View style={{marginTop: 50}}>
              <Box alignItems="center">
                <FormControl isInvalid w="75%" maxW="300px">
                  <FormControl.Label>Password</FormControl.Label>
                  <Input placeholder="Enter password" />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Try different from previous passwords.
                  </FormControl.ErrorMessage>
                </FormControl>
              </Box>
              ;
            </View> */}
          </View>
        </View>
      </ScrollView>
    </>
    // Container end
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loginTitle: {
    fontSize: 30,
  },
  backgroundImage: {
    height: Dimensions.get('window').height / 2.5,
    backgroundColor: '#05C7F2',
  },
  iconSharp: {
    color: '#ffffff',
    fontSize: 100,
  },
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 60,
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
});
