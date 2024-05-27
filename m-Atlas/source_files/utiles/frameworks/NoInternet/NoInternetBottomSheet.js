// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// const NoInternetBottomSheet = () => {
//   // ref
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   // variables
//   const snapPoints = useMemo(() => ['25%', '50%'], []);
//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);
//   // renders
//   return (
//     <>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1}
//         snapPoints={snapPoints}
//         onChange={handleSheetChanges}
//       >
// <View style={styles.contentContainer}>
//   <Text>Awesome 🎉</Text>
// </View>
//       </BottomSheet>
//     </>
//   );
// };
// // export default NoInternetBottomSheet;
import React, { useEffect, useRef } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useAppUniversal } from '../../../context/universal/AppUniversal/AppUniversal.context';
import LocalBottomSheet from '../LocalBottomSheet/';

export default function NoInternetBottomSheet() {
  const refRBSheet = useRef();

  const { internetConnectionStatus ,  } = useAppUniversal()

  useEffect(() => {
   if(!internetConnectionStatus){
    refRBSheet?.current?.open()
   }else{
    refRBSheet?.current?.close()
   }

  }, [internetConnectionStatus])
  return (
    <>
      <LocalBottomSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        customStyles={{
          container: {
            backgroundColor: 'blue',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }
        }}
      // customStyles={{
      //   wrapper: {
      //     backgroundColor: 'transparent',
      //   },
      //   draggableIcon: {
      //     backgroundColor: '#000',
      //   },
      // }}
      >
        <View style={styles.contentContainer}>
          <Text style={{ color: '#fff' }}>No Internet 🎉</Text>
        </View>
      </LocalBottomSheet>
    </>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#fff000',
    backgroundColor: "transparent",
  },
});