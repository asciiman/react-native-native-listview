package com.asciiman.nativelistview;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIViewOperationQueue;

public class MyUIViewOperationQueue extends UIViewOperationQueue {
    private final NativeViewHierarchyManager mNativeViewHierarchyManager;

    public MyUIViewOperationQueue(ReactApplicationContext reactContext, NativeViewHierarchyManager nativeViewHierarchyManager) {
        super(reactContext, nativeViewHierarchyManager);
        mNativeViewHierarchyManager = nativeViewHierarchyManager;
    }

    @Override
    public void enqueueUpdateLayout(int parentTag, int reactTag, int x, int y, int width, int height) {
        final View view = resolveView(reactTag);
        if (!(view != null && (view instanceof NativeListviewItemView))) {
            super.enqueueUpdateLayout(parentTag, reactTag, x, y, width, height);
        }
    }

    private View resolveView(int reactTag) {
        try {
            return mNativeViewHierarchyManager.resolveView(reactTag);
        } catch (Exception e) {
        }
        return null;
    }
}
