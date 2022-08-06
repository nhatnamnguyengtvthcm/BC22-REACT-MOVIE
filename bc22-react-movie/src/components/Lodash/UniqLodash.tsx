// uniq(arr): Loaị bỏ các phần tử kiểu dữ liệu nguyên thuỷ(shallow compare) trùng nhau
// uniqBy(arr, iteratee=_.identity): Loại bỏ các obj trùng nhau theo 1 tiêu chí nào đó

import React from 'react'
import _ from "lodash"
const UniqLodash = () => {
    const arr:number[] = [1,2,2,3,4,5,6];
    console.log(_.uniq(arr));
    const obj_arr = [
        {"id":1, name:"iphoneX", price:1000},
        {"id":1, name:"iphone11", price:2000},
        {"id":3, name:"iphone11", price:3000},
        {"id":4, name:"iphone11", price:4000},
        {"id":5, name:"iphone13", price:5000},
        {"id":6, name:"iphone13", price:5000},

    ]
    console.log("result: ", _.uniqBy(obj_arr, "id"));
  return (
    <div></div>
  )
}

export default UniqLodash