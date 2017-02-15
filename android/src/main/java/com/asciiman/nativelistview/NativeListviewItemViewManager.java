package com.asciiman.nativelistview;

import java.util.Map;

import javax.annotation.Nullable;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

public class NativeListviewItemViewManager extends ViewGroupManager<NativeListviewItemView> {
    @Override
    public NativeListviewItemView createViewInstance(ThemedReactContext context) {
        return new NativeListviewItemView(context);
    }

    @Override
    public String getName() {
        return NativeListviewItemView.class.getSimpleName();
    }

    @ReactProp(name = "innerRowID")
    public void setInnerRowID(NativeListviewItemView view, int val) {
        view.setInnerRowID(val);
    }

    @Override
    public
    @Nullable
    Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.builder()
                .put("onUpdateView", MapBuilder.of("registrationName", "onUpdateView"))
                .build();
    }
}
