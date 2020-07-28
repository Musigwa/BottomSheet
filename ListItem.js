import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';

const colors = {
  lightGray: 'rgba(237, 237, 237, 1)',
};

export default ({ renderHeader = true, renderTitle = true, itemSubTitle, headerLeft, headerRight, titleStyle, itemTitle, ...props}) => {
  const { rightComponent = <Ant name="right" size={50} /> } = props;
  return (
    <View style={styles.container}>
      {renderHeader && <View style={styles.headerWrapper}>
        <Text style={styles.headerLeft}>{headerLeft}</Text>
        <Text style={styles.headerRight}>{headerRight}</Text>
        <View />
      </View>}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.item}
        onPress={() => {
          console.log('Item pressed');
        }}>
        <View style={styles.itemLeft}>
          <Ion name="md-bus" size={30} />
        </View>
        <View style={styles.itemCenter}>
         {renderTitle && <Text style={[styles.itemTitle,titleStyle]}>{itemTitle}</Text>}
          <Text style={styles.itemSubTitle}>{itemSubTitle}</Text>
        </View>
        {rightComponent}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginVertical: 10,
      justifyContent:'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    width: 50,
    backgroundColor: colors.lightGray,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerRight: {
    width: '78%',
    fontWeight: 'bold',
    fontSize: 18,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemLeft: {
    backgroundColor: colors.lightGray,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCenter: {
    height: 50,
    justifyContent: 'space-between',
    maxWidth: '78%',
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubTitle: {
    fontSize: 16,
  },
});
