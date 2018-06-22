#import "RNNativeListview.h"
#import "RCTConvert.h"
#import "RCTEventDispatcher.h"
#import "RCTUtils.h"
#import "UIView+React.h"

@interface RNNativeListview()<UITableViewDataSource, UITableViewDelegate>

@property (strong, nonatomic) UITableView *tableView;

@end

@interface TableViewCell : UITableViewCell

@property (nonatomic, weak) UIView *cellView;

@end

@implementation TableViewCell

-(void)setCellView:(UIView *)cellView {
  _cellView = cellView;
  [self.contentView addSubview:cellView];
}

-(void)setFrame:(CGRect)frame {
  [super setFrame:frame];
  [_cellView setFrame:CGRectMake(0, 0, frame.size.width, frame.size.height)];
}

@end

@implementation RNNativeListview

  RCTBridge *_bridge;
  RCTEventDispatcher *_eventDispatcher;
  NSMutableArray *_unusedCells;

- (instancetype)initWithBridge:(RCTBridge *)bridge {
  RCTAssertParam(bridge);

  if ((self = [super initWithFrame:CGRectZero])) {
    _eventDispatcher = bridge.eventDispatcher;

    _bridge = bridge;
    while ([_bridge respondsToSelector:NSSelectorFromString(@"parentBridge")]
           && [_bridge valueForKey:@"parentBridge"]) {
      _bridge = [_bridge valueForKey:@"parentBridge"];
    }
    _unusedCells = [NSMutableArray array];
    [self createTableView];
  }

  [self addObserver:self forKeyPath:@"self.numRows" options:NSKeyValueObservingOptionNew context:nil];

  return self;
}

- (void)dealloc {
  [self removeObserver:self forKeyPath:@"self.numRows"];
}

-(void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context {
  [self.tableView reloadData];
}

RCT_NOT_IMPLEMENTED(-initWithFrame:(CGRect)frame)
RCT_NOT_IMPLEMENTED(-initWithCoder:(NSCoder *)aDecoder)

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex
{
  // will not insert because we don't need to draw them
  //   [super insertSubview:subview atIndex:atIndex];

  [_unusedCells addObject:subview];
}

- (void)layoutSubviews {
  [self.tableView setFrame:self.frame];
}

- (void)createTableView {
  _tableView = [[UITableView alloc] initWithFrame:CGRectZero style:UITableViewStylePlain];
  _tableView.dataSource = self;
  _tableView.delegate = self;
  _tableView.backgroundColor = [UIColor clearColor];
  [_tableView setSeparatorStyle:UITableViewCellSeparatorStyleNone];
  [self addSubview:_tableView];
}

- (void)setRowHeight:(float)rowHeight {
  _tableView.estimatedRowHeight = rowHeight;
  _rowHeight = rowHeight;
}

- (NSInteger)numberOfSectionsInTableView:(UITableView *)theTableView
{
  return 1;
}

- (NSInteger)tableView:(UITableView *)theTableView numberOfRowsInSection:(NSInteger)section
{
  return self.numRows;
}

- (UIView*) getUnusedCell {
  UIView* res = [_unusedCells lastObject];
  [_unusedCells removeLastObject];
  if (res != nil) {
    res.tag = [_unusedCells count];
  }
  return res;
}

-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
  return self.rowHeight;
}

- (UITableViewCell *)tableView:(UITableView *)theTableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
  static NSString *cellIdentifier = @"CustomCell";

  TableViewCell *cell = (TableViewCell *)[theTableView dequeueReusableCellWithIdentifier:cellIdentifier];
  if (cell == nil) {
    cell = [[TableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIdentifier];
    cell.cellView = [self getUnusedCell];
    NSLog(@"Allocated childIndex %d for row %d", (int)cell.cellView.tag, (int)indexPath.row);
  } else {
    NSLog(@"Recycled childIndex %d for row %d", (int)cell.cellView.tag, (int)indexPath.row);
  }

  NSDictionary *event = @{
                          @"target": cell.cellView.reactTag,
                          @"childIndex": @(cell.cellView.tag),
                          @"rowID": @(indexPath.row),
                          @"sectionID": @(indexPath.section),
                        };

  [_eventDispatcher sendInputEventWithName:@"onChange" body:event];

  return cell;
}

- (void)tableView:(UITableView *)tableView willDisplayCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath
{
  [[cell contentView] setBackgroundColor:[UIColor clearColor]];
  cell.backgroundColor = [UIColor clearColor];
  cell.selectionStyle = UITableViewCellSelectionStyleNone;
}

@end
