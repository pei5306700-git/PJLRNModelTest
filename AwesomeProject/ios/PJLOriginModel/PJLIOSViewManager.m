//
//  PJLManagerView.m
//  AwesomeProject
//
//  Created by 裴建兰 on 2020/8/21.
//

#import "PJLIOSViewManager.h"
#include <SVProgressHUD.h>

@implementation PJLIOSViewManager

// 标记宏 (必要)
RCT_EXPORT_MODULE()

- (UIView *)view{
  
  [SVProgressHUD showWithStatus:@"222"];
  
  NSLog(@"走这个方法了哇");
  
  UIView *myView = [[UIView alloc]init];
  
  [myView setBackgroundColor:[UIColor greenColor]];
  
  return myView;
  
  
}

@end
