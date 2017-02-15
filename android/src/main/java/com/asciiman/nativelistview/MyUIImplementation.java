package com.asciiman.nativelistview;

import java.util.List;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIImplementation;
import com.facebook.react.uimanager.UIViewOperationQueue;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.ViewManagerRegistry;
import com.facebook.react.uimanager.events.EventDispatcher;

public class MyUIImplementation extends UIImplementation {
    public MyUIImplementation(ReactApplicationContext reactContext, List<ViewManager> viewManagers, EventDispatcher eventDispatcher) {
        this(reactContext, new ViewManagerRegistry(viewManagers),eventDispatcher);
    }

    private MyUIImplementation(ReactApplicationContext reactContext, ViewManagerRegistry viewManagers, EventDispatcher eventDispatcher) {
        this(reactContext,viewManagers, null,eventDispatcher);
    }
    protected MyUIImplementation(ReactApplicationContext reactContext, ViewManagerRegistry viewManagers, UIViewOperationQueue operationsQueue, EventDispatcher eventDispatcher) {
        super(reactContext, viewManagers, new MyUIViewOperationQueue(reactContext, new NativeViewHierarchyManager(viewManagers)),eventDispatcher);
    }
}
