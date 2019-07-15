// SegmentedBarExample.js

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Image, ScrollView, Switch} from 'react-native';

import {Theme, NavigationPage, ListRow, Label, SegmentedBar, PullPicker, Carousel} from 'teaset';
import { Icon} from "native-base";


export default class SegmentedBarExample extends NavigationPage {

  static navigationOptions = {
    tabBarVisible: false, 
    header:null, 
  };

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '成就區塊',
    // showBackButton: true,
  };

  constructor(props) {
    super(props);

    this.barItems = [
      '美食',
      '旅遊',
      '其他',
      '好友進度',
    ];
    this.barScrollItems = [
      'Agsssssssssssded Pu\'er',
      'Bosddssdhea',
      'Chrysanthemum',
      'Hyson',
      'Jasmine',
      'Keemun',
      'Loungjing',
      'Pekoe',
      'Tieguanyin',
    ];
    this.barCustomItems = ['Home', 'Store', 'Me'];

    this.justifyItemItems = ['fixed', 'scrollable'];
    this.indicatorTypeItems = ['none', 'boxWidth', 'itemWidth', 'customWidth'];
    this.indicatorPositionItems = ['top', 'bottom'];

    Object.assign(this.state, {
      justifyItem: 'fixed',
      indicatorType: 'itemWidth',
      indicatorPosition: 'bottom',
      animated: true,
      autoScroll: true,
      activeIndex: 0,
      custom: false,
    });
  }

  onSegmentedBarChange(index) {
    if (index != this.state.activeIndex) {
      this.setState({activeIndex: index});
      if (this.refs.carousel) {
        this.refs.carousel.scrollToPage(index, false);
      }
    }
  }

  onCarouselChange(index) {
    index != this.state.activeIndex && this.setState({activeIndex: index});
  }

  renderCustomItems() {
    let icons = [
      <Icon name="md-home" style={{ color: tintColor }} />,
      <Icon name="md-home" style={{ color: tintColor }} />,
      <Icon name="md-home" style={{ color: tintColor }} />,
    ];
    let activeIcons = [
      <Icon name="md-home" style={{ color: tintColor }} />,
      <Icon name="md-home" style={{ color: tintColor }} />,
      <Icon name="md-home" style={{ color: tintColor }} />,
    ];
    let {activeIndex} = this.state;
    return this.barCustomItems.map((item, index) => {
      let isActive = index == activeIndex;
      let tintColor = isActive ? Theme.primaryColor : '#989898';
      return (
        <View key={index} style={{padding: 8, alignItems: 'center'}}>
          <Image
            style={{width: 20, height: 20, tintColor}}
            source={isActive ? activeIcons[index] : icons[index]}
            />
          <Label style={{color: tintColor, paddingTop: 4}} text={item} />
        </View>
      );
    });
  }

  renderPage() {
    let {justifyItem, indicatorType, indicatorPosition, animated, autoScroll, custom, activeIndex} = this.state;
    let barItems = custom ? this.barCustomItems : (justifyItem == 'scrollable' ? this.barScrollItems : this.barItems);
    return (
      <ScrollView style={{flex: 1}} stickyHeaderIndices={[1]}>
        <View style={{height: 20}} />
        <SegmentedBar
          justifyItem={justifyItem}
          indicatorType={indicatorType}
          indicatorPosition={indicatorPosition}
          indicatorLineColor={custom ? '#5cb85c' : undefined}
          indicatorLineWidth={custom ? 1 : undefined}
          indicatorPositionPadding={custom ? 3 : undefined}
          animated={animated}
          autoScroll={autoScroll}
          activeIndex={activeIndex}
          onChange={index => this.onSegmentedBarChange(index)}
        >
          {custom ? this.renderCustomItems() : barItems.map((item, index) => <SegmentedBar.Item key={'item' + index} title={item} />)}
        </SegmentedBar>
        <Carousel
          style={{backgroundColor: Theme.defaultColor, height: 238, borderTopWidth: 1, borderTopColor: Theme.pageColor}}
          carousel={false}
          startIndex={activeIndex}
          cycle={false}
          ref='carousel'
          onChange={index => this.onCarouselChange(index)}
        >
          {barItems.map((item, index) => (
            <View key={'view' + index} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label type='detail' size='xl' text={item} />
            </View>
          ))}
        </Carousel>
        <View style={{height: 20}} />
      </ScrollView>
    );
  }

}
