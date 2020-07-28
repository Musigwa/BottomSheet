import React, {useRef} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import List from './List';
import ListItem from './ListItem';

const items = [
  {
    route: {
      name: 'Going to Downtown',
      code: 401,
      price: 450,
      currency: 'RWF',
    },
    estimation: {
      time: 23,
      unit: 'mins',
    },
  },
  {
    route: {
      name: 'Going to Downtown',
      code: 401,
      price: 450,
      currency: 'RWF',
    },
    estimation: {
      time: 23,
      unit: 'mins',
    },
  },
  {
    route: {
      name: 'Going to Downtown',
      code: 401,
      price: 450,
      currency: 'RWF',
    },
    estimation: {
      time: 23,
      unit: 'mins',
    },
  },
];

const awaited = {
  route: {
    name: 'Kigali Height',
    code: 401,
    price: 450,
    currency: 'RWF',
  },
  estimation: {
    time: 23,
    unit: 'mins',
  },
};

export default () => {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        animationType="slide"
        customStyles={{
          wrapper: {backgroundColor: 'transparent'},
          container: {borderTopRightRadius: 8, borderTopLeftRadius: 8},
          draggableIcon: {width: '20%'},
        }}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Wait for your next bus at
          </Text>
          <ListItem
            renderHeader={false}
            itemTitle="Kigali Heights"
            itemSubTitle={`${Math.ceil(awaited.estimation.time)} ${
              awaited.estimation.unit
            } away from your current location`}
            titleStyle={{fontWeight: 'bold', fontSize: 18}}
            rightComponent={
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.rightBtnWrapper}>
                <Text style={styles.rightBtnText}>Go</Text>
              </TouchableOpacity>
            }
          />
          <List
            title="Near by buses"
            data={items}
            containerStyle={{marginTop: 10}}
          />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  rightBtnWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBtnText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});
