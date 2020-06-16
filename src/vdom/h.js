// 1. hooks : init create insert
// create visual dom
import * as is from "./is"
import {isDef} from "./utils"
import {vnode} from "./vnode"

const h = function(tag,data={},c){  // data is required
    const {text,children} = getChildrenAndText(c);
 
        children.forEach((child,index)=>{
            if(is.primitive(child)){
                children[index] = vnode(undefined, undefined, undefined, children[i], undefined)
            }
        })
   
}
const getChildrenAndText = function (param) {
    let text = "";
    let children = [];
       if(isDef(param)){
        if(is.array(param)){
            children = param;
        }else if(is.primitive(param)){
            text = param;
        }else if(param && param.sel){
            children = [param]
        }
     }
     return {text,children}
}

