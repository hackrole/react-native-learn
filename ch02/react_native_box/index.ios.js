/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var BoxStyles = StyleSheet.create({
  'height50': {
    height: 50,
  },
  'height400': {
    height: 400,
  },
  'width400': {
    width: 400,
  },
  "bgred": {
    backgroundColor: "#6AC5AC",
  },
  "box": {
    flexDirection: "column",
    flex: 1,
    position: "relative",
  },
  "label": {
    top: 0,
    left: 0,
    paddingTop: 0,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 0,
    position: "absolute",
    backgroundColor: "#FDC72F",
  },
  "top": {
    justifyContent: "center",
    alignItems: "center",
  },
  "bottom": {
    justifyContent: "center",
    alignItems: "center",
  },
  "right": {
    justifyContent: "space-around",
    alignItems: "center",
  },
  "left": {
    width: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  "yellow": {
    color: "#FDC72F",
    fontWeight: "900",
  },
  "white": {
    color: "white",
    fontWeight: "900",
  },
  "margginBox": {
    position: "absolute",
    top: 100,
    paddingLeft: 7,
    paddingRight: 7,
  },
  "borderBox": {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

var BoxContainer = React.createClass({
  render: function(){
    return (
      <View style={[BoxStyles.margginBox]} ref="lab1">
        <View  style={[BoxStyles.box, BoxStyles.height400, BoxStyles.width400]}>
          <View style={[BoxStyles.top, BoxStyles.height50, BoxStyles.bgred]}>
            <Text style={BoxStyles.yellow}>Top</Text>
          </View>
          <View style={[BoxStyles.borderBox]}>
            <View style={[BoxStyles.left, BoxStyles.bgred]}>
              <Text style={BoxStyles.yellow}>Left</Text>
            </View>
            <View style={[BoxStyles.right, BoxStyles.bgred]}>
              <Text style={BoxStyles.yellow}>Right</Text>
            </View>
          </View>
          <View style={[BoxStyles.bottom, BoxStyles.height50, BoxStyles.bgred]}>
            <Text style={BoxStyles.yellow}>bottom</Text>
          </View>
          <View style={[BoxStyles.label]}>
            <Text style={BoxStyles.white}>margin</Text>
          </View>
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('react_native_box', () => BoxContainer);
