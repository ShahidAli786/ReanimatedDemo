import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  RotateInDownLeft,
  ZoomIn,
} from 'react-native-reanimated';

const LIST_ITEM_COLOR = '#1798de';

interface item {
  id: number;
}

export default function LayoutAnimation() {
  const initalMode = useRef<boolean>(true);
  const [items, setItems] = useState<Item[]>(
    new Array(5).fill(0).map((_, i) => ({id: i})),
  );
  useEffect(() => {
    initalMode.current = false;
  }, []);

  const onAdd = useCallback(() => {
    setItems(currentItems => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, {id: nextItemId}];
    });
  }, []);

  const onDelete = useCallback((itemId: number) => {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAdd} style={styles.floatingButton}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 20}}>
        {items.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={initalMode ? FadeIn.delay(100 * index) : FadeIn}
            exiting={FadeOut}
            layout={Layout.delay(50)}
            onTouchEnd={() => onDelete(item.id)}
            style={styles.listItem}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    height: 100,
    backgroundColor: LIST_ITEM_COLOR,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: '5%',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    elevation: 4,
  },
});
