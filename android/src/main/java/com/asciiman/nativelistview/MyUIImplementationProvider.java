package com.asciiman.nativelistview;

import java.util.List;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.UIImplementation;
import com.facebook.react.uimanager.UIImplementationProvider;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.events.EventDispatcher;

public class MyUIImplementationProvider extends UIImplementationProvider {
    @Override
    public UIImplementation createUIImplementation(ReactApplicationContext reactContext, List<ViewManager> viewManagers, EventDispatcher eventDispatcher) {
        return new MyUIImplementation(reactContext, viewManagers,eventDispatcher);
    }
}
