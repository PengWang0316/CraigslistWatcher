import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainView: {
    marginTop: 15
  },
  subView: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  title: {
    overflow: 'hidden',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
    width: '80%'
  },
  mapView: {
    marginTop: 20,
    marginHorizontal: 10,
    height: 300,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
