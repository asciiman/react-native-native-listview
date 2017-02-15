
# react-native-native-listview

## Getting started

`$ npm install react-native-native-listview --save`

### Mostly automatic installation

`$ react-native link react-native-native-listview`

### Manual installation


<!-- #### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-native-listview` and add `RNNativeListview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeNativeListview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)< -->

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.asciiman.nativelistview.RNNativeListviewPackage;` to the imports at the top of the file
  - Add `new RNNativeListviewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-native-listview'
  	project(':react-native-native-listview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-native-listview/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-native-listview')
  	```

## Usage
```javascript
import NativeListview from 'react-native-native-listview';
```
