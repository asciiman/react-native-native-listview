#import "RNNativeListviewManager.h"
#import "RNNativeListview.h"

@implementation RNNativeListviewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RNNativeListview alloc] initWithBridge:self.bridge];
}

RCT_EXPORT_VIEW_PROPERTY(rowHeight, float)
RCT_EXPORT_VIEW_PROPERTY(numRows, NSInteger)

@end
