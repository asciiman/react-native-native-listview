
# react-native-native-listview

Implements native ListView component for android and iOS.  This component uses the row recycler approach.  Use this to get high performance if your use case consists of nearly identical rows with a very large data-source.  React Native's built in Listview performs better with the use case of high variation between rows and a smaller data-source (like the facebook news feed).  You should probably stick to the stock implementation if your use case is the latter.

## Credits

This code is based on Tal Kol's blog [Recycling Rows For High Performance React Native List Views](https://medium.com/@talkol/recycling-rows-for-high-performance-react-native-list-views-628fd0363861#.er0u0orbx) and his [list-view-experiments](https://github.com/wix/list-view-experiments) code for iOS.  For Android the code is based on droidwolf's [react-native-RealRecyclerView](https://github.com/droidwolf/react-native-RealRecyclerView) library.  The code here is used with permission from both authors.

## Getting started

`$ npm install react-native-native-listview --save`

### Mostly automatic installation

`$ react-native link react-native-native-listview`

You will still need to manually add the imports and `createReactInstanceManager()` function in `MainActivity.java` as described in Step 1 of the Android section below.

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-native-listview` and add `RNNativeListview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeNativeListview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add the following imports to the top of the file
    ```java
    import com.facebook.infer.annotation.Assertions;
    import com.facebook.react.common.LifecycleState;
    import com.asciiman.nativelistview.RNNativeListviewPackage;
    import com.asciiman.nativelistview.MyUIImplementationProvider;
    ```
  - Add `new RNNativeListviewPackage()` to the list returned by the `getPackages()` method
  - Add the `createReactInstanceManager()` function
    ```java
    @Override
    protected ReactInstanceManager createReactInstanceManager() {
        ReactInstanceManager.Builder builder = ReactInstanceManager.builder()
                .setApplication(MainApplication.this)
                .setJSMainModuleName(getJSMainModuleName())
                .setUseDeveloperSupport(getUseDeveloperSupport())
                .setUIImplementationProvider(new MyUIImplementationProvider())
                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE);

        for (ReactPackage reactPackage : getPackages()) {
            builder.addPackage(reactPackage);
        }

        String jsBundleFile = getJSBundleFile();
        if (jsBundleFile != null) {
            builder.setJSBundleFile(jsBundleFile);
        } else {
            builder.setBundleAssetName(Assertions.assertNotNull(getBundleAssetName()));
        }

        return builder.build();
    }
    ```
2. Append the following lines to `android/settings.gradle`:
  	```java
  	include ':react-native-native-listview'
  	project(':react-native-native-listview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-native-listview/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```java
      compile project(':react-native-native-listview')
  	```

## Usage
```javascript
import NativeListview from 'react-native-native-listview';

const ROWS_IN_DATA_SOURCE = 3000;
const dataSource = [];
for (let i = 0; i < ROWS_IN_DATA_SOURCE; i++) dataSource.push(`This is row # ${i + 1}`);

class ListExample extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NativeListview
          renderRow={this.renderRow}
          numRows={dataSource.length}
          rowHeight={50}
        />
      </View>
    );
  }
  renderRow(rowID) {
    return (
      <Text style={{
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#ffffff'
      }}>{dataSource[rowID]}</Text>
    );
  }
}
```
