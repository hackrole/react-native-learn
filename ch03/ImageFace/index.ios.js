/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} = React;

var imgs = [
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://vczero.github.io/me/img/xiaoxue.png'
];
var MyImage = React.createClass({
  getInitialState: function(){
    var imgs = this.props.imgs;
    return {
      imgs: imgs,
      count: 0,
    };
  },
  goNext: function(){
    var count = this.state.count;
    count++;
    console.log("next count" + count);
    if(count < imgs.length + 3){
      this.setState({
        count: count,
      });
    }
  },
  goPreview: function(){
    var count = this.state.count;
    count--;
    console.log("prev count" + count);
    if(count >= 0){
      this.setState({
        count: count,
      });
    }
  },
  render: function(){
    console.log("render count" + this.state.count);
    if(this.state.count <= 2){
      image = <Image style={styles.img}
                     source={{uri: this.state.imgs[this.state.count]}}
                     resizeMode="contain" />
    }else{
      count = this.state.count;
      if(count === 3){
        img = require("./images/1.jpg");
      }else if(count === 4){
        img = require('./images/2.jpg');
      }else{
        img = require("./images/3.jpg");
      }
      console.log(count + "count, img" + img);
      image = <Image style={styles.img}
                     source={img}
                     resizeMode="contain" />
    }
    return (
      <View style={[styles.flex]}>
        <View style={styles.image}>
          {image}
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview}>
            <View style={styles.btn}>
              <Text>上一张</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goNext}>
            <View style={styles.btn}>
              <Text>下一张</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
});

var App = React.createClass({
  render: function(){
    return (
      <View style={styles.flex, {marginTop: 40}}>
        <MyImage imgs={imgs}></MyImage>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  img: {
    height: 200,
    width: 300,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 20,
  },
});

AppRegistry.registerComponent('ImageFace', () => App);
