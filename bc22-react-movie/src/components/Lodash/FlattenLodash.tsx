// _.flattern(Array): Dùng để phân tách các mảng trong mảng 1 cấp
// _.flattern(Array): Dùng để phân tách các mảng trong mảng nhiều cấp
import React from 'react'
import _, { flatMap } from "lodash"
const FlattenLodash = () => {
    const arr = [[1,[2,[3,[4]]],5]];
    const resultFlatten = _.flatten(arr);
    const resultFlattenDeep = _.flattenDeep(arr);
    console.log("resultFlatten", resultFlatten);
    console.log("resultFlattenDeep", resultFlattenDeep);
    
    const flatten = (arr:any[])=>{
        let newarr: number[] = [];
        arr.forEach(item=>{
          if(Array.isArray(item)){
            newarr.push(...flatten(item));
          }else{
            newarr.push(item);
          }
        })
        return newarr;
    }
    console.log("resultflatten", flatten(arr));

  return (
    <div>flatternLodash</div>
  )
}

export default FlattenLodash

function item(item: any) {
  throw new Error('Function not implemented.');
}
