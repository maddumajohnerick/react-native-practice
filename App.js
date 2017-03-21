import React, { Component } from 'react';
import { AppRegistry, View, Image, Text, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      users: [
        {
          name: 'maddumajohnerick',
          pic: { uri: 'https://avatars0.githubusercontent.com/u/18494238?v=3&s=460' },
          following: false
        },
        {
          name: 'johncrisostomo',
          pic: { uri: 'https://avatars1.githubusercontent.com/u/15031664?v=3&s=400' },
          following: false
        },
        {
          name: 'wnxhaja',
          pic: { uri: 'https://avatars0.githubusercontent.com/u/4872417?v=3&s=460' },
          following: false
        },
        {
          name: 'ickyr',
          pic: { uri: 'https://avatars3.githubusercontent.com/u/11001585?v=3&s=400' },
          following: false
        }
      ]
    };
  }

  render() {
    let users = this.state.users;

    function viewPrev(){
      let index = this.state.index - 1;
      this.setState({index: index});
    }
    function viewFollower(index){
      let users = this.state.users;
      users[parseInt(index)].following = !users[index].following;
      this.setState({users});

    }
    function viewNext(){
      let index = this.state.index + 1;
      this.setState({index: index});
    }
    function doNothing(){
      let index = this.state.index;
      this.setState({index: index});
    }

    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{width: '100%', height: 50, backgroundColor: '#151818', flexDirection: 'row'}}>
              <View style={{flex: 3, height: '100%', backgroundColor: '#151818', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 20, color: 'white'}}>{users[this.state.index].name}</Text>
              </View>
          </View>
          <View style={{width: '100%', flex: 1, backgroundColor: 'skyblue'}}>
              <Image source={users[this.state.index].pic} style={{width: '100%', flex: 1}}/>
          </View>
          <View style={{width: '100%', height: 55, backgroundColor: '#151818', flexDirection: 'row'}}>
              <View style={{flex: 1, height: '100%', backgroundColor: '#151818', justifyContent: 'center', padding: 10}}>
                  <Button
                    onPress={viewPrev.bind(this)}
                    disabled={this.state.index ? false : true}
                    title='< PREV'
                    color='#5B7D7D'
                    accessibilityLabel='Learn more about this purple button'
                  />
              </View>
              <View style={{flex: 1, backgroundColor: '#151818', justifyContent: 'center'}}>
                  <Button
                    onPress={viewFollower.bind(this, this.state.index)}
                    title={!users[this.state.index].following ? 'FOLLOW' : 'FOLLOWING'}
                    color={!users[this.state.index].following ? '#5B7D7D' : '#4EBABA'}
                    accessibilityLabel='Learn more about this purple button'
                  />
              </View>
              <View style={{flex: 1, height: '100%', backgroundColor: '#151818', justifyContent: 'center', padding: 10}}>
                  <Button
                    onPress={viewNext.bind(this)}
                    disabled={users[this.state.index + 1] ? false : true}
                    title='NEXT >'
                    color='#5B7D7D'
                    accessibilityLabel='Learn more about this purple button'
                  />
              </View>
          </View>
      </View>
    );
  }
}
