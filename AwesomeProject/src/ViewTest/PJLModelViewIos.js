import React,{Component} from 'react';
import { requireNativeComponent } from 'react-native';

/**
 * // 
 * 该方法将 原生层TakePhotoManager 中 return 出来的 View 赋值给 RNTakePhoto。这个时候 RNTakePhoto 就是我们在原生中中的页面了。
// 
requireNativeComponent() 该方法中有两个参数，
第一个是原生层暴露的UIView，
另一个是在RN层要承接的 Class。
在这里我们可以看到，
原生层暴露的UIView的文件叫做 TakePhotoManager，
而在这里用的话，只用TakePhoto。
这只能说明，原生层的封装需要按照一定的规则来做。
 */

const  RNView = requireNativeComponent('PJLView',PJLModelViewIOS)

class PJLModelViewIOS extends Component{
    render(){

        return(

            <RNView />

        );
    }

}

module.exports = PJLModelViewIOS;