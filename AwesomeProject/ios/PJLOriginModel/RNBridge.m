//
//  PJLIOSNSONJManager.m
//  AwesomeProject
//
//  Created by 裴建兰 on 2020/8/25.
//

#import "RNBridge.h"

@implementation RNBridge

@synthesize bridge =_bridge;

RCT_EXPORT_MODULE();

//定义一个 返回一个字段
/**
 const RNBridge = NativeModules.RNBridge;
 RNBridge.hello
 */
- (NSDictionary *)constantsToExport{
  NSLog(@"走到这个方法了哇");
  return @{@"hello":@"您好,这是我编写的第一个ios 原生模块"};
}


RCT_EXPORT_METHOD(jumpNativePage){
  
  NSLog(@"走了这个方法");
}

RCT_EXPORT_METHOD(squrareMe:(NSString *)number:(RCTResponseSenderBlock)callback){
  
  NSLog(@"定义一个方法:%@",number);
  int num = [number intValue];
  callback(@[[NSNull null],[NSNumber numberWithInt:(num * num)]]);
}

RCT_EXPORT_METHOD(PJLOneWay:(NSString *)testStr){
  
  NSLog(@"%@ ===> doSomething",testStr);

}



@end
