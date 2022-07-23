import React from 'react'
import _ from "lodash";
const ChunkLodash = () => {
    interface user{
        id:number,
        name: string
    }
    const arr:any[] = ["id",1,"name", "Khai","info", "cybersoft"]

    const result = _.chunk(arr, 2);
    const  arrString: string[] = ["a1", "a2","a3","a4","a5","a6","a7","a8","a9"]
    const result1 = _.chunk(arrString, 3);
    console.log(result);
    console.log(result1);
  return (
    <div>ChunkLodash</div>
  )
}

export default ChunkLodash