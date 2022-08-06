import React from 'react'
import _ from "lodash"
import { arrayBuffer } from 'node:stream/consumers'
const FillLodash = () => {
    interface user{
        id:number,
        name: string
    }
    const arr:user[] = [
        {id:1, name: "Iphone"},
        {id:3, name:"IphoneX"},
        {id:3, name:"Iphone11"},
        {id:3, name:"Iphone12"},
    ]
    console.log("arr before: ", arr);
    _.fill(arr, {id:2, name:"8Plus"},0,3);
    console.log("arr after: ", arr);
    
  return (
    <div>FillLodash</div>
  )
}

export default FillLodash