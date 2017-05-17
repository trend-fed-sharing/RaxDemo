'use strict';

import { createElement, Component } from 'rax';
import {
  View,
  Image,
  Text,
  ListView,
} from 'rax-components';

import { connect } from 'rax-redux';
import { addDummyData } from './actions/actions';

//import ListCard
import ListCard from './list_card';

var TAG = "ListView";

class ListDemo extends Component{
  constructor(props) {
    super(props);

    this.state = {};

    this._cellData = new Map();
  }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
    return (
      <ListCard
        ref={obj=>this._cellData.set(sectionID+rowID, obj)}
        rowData={rowData}
        />
    );
  }

  _handleEndReached(){
    const { dispatch } = this.props;
    dispatch(addDummyData());
  }

  // Based on changeRows to empty rows
  _handleChangeVisibleRows(visibleRows, changeRows){
    console.log("我是屁孩~我不想被回收喔~~~~~啾咪");
    return "我是屁孩~我不想被回收喔~~~~~啾咪";
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 80}}>
        <ListView
            ref={obj=>this._listview=obj}
            initialListSize={10}
            removeClippedSubviews={false}
            dataSource={this.props.listData}
            renderRow={this._renderRow.bind(this)}
            style={{backgroundColor:'transparent'}}
            onEndReached={this._handleEndReached.bind(this)}
            onEndReachedThreshold={200}
            scrollEnabled={true}
            endFillColor={'#F0F0F0'}
            onChangeVisibleRows={this._handleChangeVisibleRows.bind(this)}
          />
      </View>
    );
  }
}

export default connect((state)=>{
  return {
    listData: state.listData
  }
})(ListDemo);