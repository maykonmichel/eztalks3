import React from 'react';
import { Image, View, Text } from 'react-native';

export default class EzTalks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: {
        uri: 'https://yt3.ggpht.com/a-/AAuE7mAPlMUUv9nG7b0yk-3-' +
          '8HIFlAPELHSYjxhdIQ=s288-mo-c-c0xffffffff-rj-k-no',
        height: 288,
        width: 288
      }
    };
  }

  render() {
    const { title } = this.props;
    const { logo } = this.state;

    return (
      <View style={{ borderColor: 'red', borderWidth: 5 }}>
        <Image source={logo} />
        <Text>{title}</Text>
      </View>
    );
  }
}
