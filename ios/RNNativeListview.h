#import <UIKit/UIKit.h>
@class RCTBridge;

@interface RNNativeListview : UIView

- (instancetype)initWithBridge:(RCTBridge *)bridge NS_DESIGNATED_INITIALIZER;

@property (nonatomic) float rowHeight;
@property (nonatomic) NSInteger numRows;

@end
