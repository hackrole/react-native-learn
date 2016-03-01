/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require("react-native");

var {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  View,
  Text,
} = React;


var app = React.createClass({
  render: function(){
    return (
      <View style={styles.flex}>
        <View style={styles.container}>
          <View style={[styles.item, styles.center]}>
            <Text style={styles.font}>酒店</Text>
          </View>
          <View style={[styles.iten, styles.lineLeftRight]}>
            <View style={[styles.item, styles.center, styles.lineCenter]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.center, styles.flex, styles.lineCenter]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>客栈.公寓</Text>
            </View>
          </View>
        </View>
      </View>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  font: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lineLeftRight: {
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
  lineCenter: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
});

AppRegistry.registerComponent('nineView', () => app);
