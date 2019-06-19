



import React from "react";
import { View, Image, TouchableOpacity, StatusBar } from "react-native";

import { Theme, NavigationPage, AlbumView, Overlay, Button } from "teaset";

export default class HomeScreen extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '概念圖',
    // showBackButton: true,
  };

  static navigationOptions = {
    tabBarVisible: false, 
    header:null, 
  };
  constructor(props) {
    super(props);
    this.images = [
      require("../images/2.png"),
      require("../images/3.jpg"),
      require("../images/4.jpg"),
      require("../images/5.jpg")
    ];
    this.thumbs = [
      require("../images/2s.png"),
      require("../images/3s.jpg"),
      require("../images/4s.jpg"),
      require("../images/5s.jpg")
    ];
  }

  onImagePress(index) {
    let pressView = this.refs["it" + index];
    pressView.measure((x, y, width, height, pageX, pageY) => {
      let overlayView = (
        <Overlay.PopView
          style={{}}
          containerStyle={{ flex: 1 }}
          overlayOpacity={1}
          type="custom"
          customBounds={{ x: pageX, y: pageY, width, height }}
          ref={v => (this.fullImageView = v)}
        >
          <AlbumView
            style={{ flex: 1 }}
            control={true}
            images={this.images}
            thumbs={this.thumbs}
            defaultIndex={index}
            onPress={() => this.fullImageView && this.fullImageView.close()}
          />
          <StatusBar animated={false} hidden={true} />
        </Overlay.PopView>
      );
      Overlay.show(overlayView);
    });
  }

  renderPage() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start"
          }}
        >
          {this.thumbs.map((item, index) => (
            <View style={{ width: 100, height: 100, padding: 10 }} key={index}>
              <TouchableOpacity
                style={{ flex: 1 }}
                ref={"it" + index}
                onPress={() => this.onImagePress(index)}
              >
                <Image
                  style={{ width: null, height: null, flex: 1 }}
                  source={item}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

