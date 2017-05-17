
'use strict';

import { createElement, Component } from 'rax';
import {
  View,
  Image,
  Text,
} from 'rax-components';

var TAG = "ListCard";

class ListCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      empty: false
    }
    this.layoutProp = {
      width: 0,
      height: 0,
    }
  }

  empty(){
    this.setState({ empty: true });
  }

  show(){
    this.setState({ empty: false });
  }

  _onLayout(evt){
    this.layoutProp.width = evt.nativeEvent.layout.width;
    this.layoutProp.height = evt.nativeEvent.layout.height;
  }

  _getCardData(type){
    switch(type){
      case 0:
        return {
          msg: "想吃",
          php: 10,
          imgSrc : require('../assets/images/list/linesticker-1.png'),
        }
      case 1:
        return {
          msg: "抓抓",
          php: 20,
          imgSrc : require('../assets/images/list/linesticker-2.png'),
        }
      case 2:
        return {
          msg: "屁屁",
          php: 30,
          imgSrc : require('../assets/images/list/linesticker-3.png'),
        }
      case 3:
        return {
          msg: "撞撞",
          php: 40,
          imgSrc : require('../assets/images/list/linesticker-4.png'),
        }
      case 4:
        return {
          msg: "吃吃",
          php: 50,
          imgSrc : require('../assets/images/list/linesticker-5.png'),
        }
      case 5:
        return {
          msg: "甘寧",
          php: 60,
          imgSrc : require('../assets/images/list/linesticker-6.png'),
        }
      case 6:
        return {
          msg: "你家",
          php: 70,
          imgSrc : require('../assets/images/list/linesticker-7.png'),
        }
      case 7:
        return {
          msg: "想吃",
          php: 80,
          imgSrc : require('../assets/images/list/linesticker-8.png'),
        }
      default:
        return {
          msg: "想吃",
          php: 10,
          imgSrc : require('../assets/images/list/linesticker-1.png'),
        }
    }
  }

  render(){
    console.log(TAG, "renderd");

    if(this.state.empty){
      return (
        <View style={{
          width: this.layoutProp.width,
          height: this.layoutProp.height
        }}>
          <Text>我被回收了</Text>
        </View>
      );
    }else{
      let cardData = this._getCardData(this.props.rowData);
      console.log(cardData.php);
      return (
        <View onLayout={this._onLayout.bind(this)}
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderBottomWidth: 1,
            padding: 10,
            margin: 10,
            borderBottomColor: '#aaa',
          }}>
          <View>
            <Image source={cardData.imgSrc} />
          </View>
          {/* 屁孩指數 */}
          <View style={{ marginLeft: 20 }}>
            <Text style={{
              color: '#9B312E',
              fontSize: 25,
              fontWeight: 'bold'
            }}>屁孩指數: {'\n'}
              <Text style={{ fontSize: 50 }}>{cardData.php}</Text>
              <Text style={{ fontSize: 30 }}>%</Text>
            </Text>
            {/* 屁話 */}
            <View style={{
              borderTopWidth: 1,
              borderTopColor: '#aaa',
              paddingTop: 10,
            }}>
              <Text style={{
                color: '#9B3199',
                fontSize: 25,
                fontWeight: 'bold'
              }}>屁話: {'\n'}
                <Text style={{ fontSize: 50}}>
                  {cardData.msg}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

module.exports = ListCard;