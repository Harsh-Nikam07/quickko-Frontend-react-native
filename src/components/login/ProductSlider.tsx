import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, useMemo } from 'react'
import { Colors } from '@utils/Constants'
import { imageData } from '@utils/dummyData'
import AutoScroll from '@homielab/react-native-auto-scroll';
import { screenHeight, screenWidth } from '@utils/Scaling';

const ProductSlider: FC = () => {

  const rows = useMemo(() => {
    const result = [];
    // Split `imageData` into subarrays of 4 elements each.
    for (let i = 0; i < imageData.length; i += 4) {
      result.push(imageData.slice(i, i + 4));
    }
    return result;
  }, [])

  return (
    <View style={styles.container}>
      <AutoScroll duration={20000} endPaddingWidth={0} style={styles.autoScroll}>
        <View style={styles.gridContainer}>
          {
            rows.map((row: any, rowIndex: number) => {
              return (
                <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />
              )
            })
          }
        </View>
      </AutoScroll>
    </View>
  )
}

const Row: FC<{ row: typeof imageData; rowIndex: number }> = ({ row, rowIndex }) => {
  return (
    <View style={styles.row}>
      {
        row?.map((image, imageIndex) => {
          const horizontalShift = rowIndex % 2 === 0 ? -18 : 18;
          return (
            <View key={imageIndex} style={[styles.itemContainer, { transform: [{ translateX: horizontalShift }] }]}>
              <Image source={image} style={styles.image} />
            </View>
          )
        })
      }
    </View>
  )
}

const MemoizedRow = React.memo(Row);

export default ProductSlider

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: screenHeight * 0.5,
    backgroundColor: Colors.background
  },
  autoScroll: {
    flex: 1, // Changed from position: 'absolute'
    // Removed zIndex: -2
  },
  gridContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed from 'center' to 'flex-start'
    paddingTop: 20, // Add some top padding for spacing
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 12,
    marginHorizontal: 10,
    width: screenWidth * 0.20,
    height: screenWidth * 0.20, // Changed from screenHeight to screenWidth for square items
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center', // Added for better image centering
  },
  image: {
    width: '80%', // Slightly smaller to fit better in container
    height: '80%',
    resizeMode: 'contain',
  },
})