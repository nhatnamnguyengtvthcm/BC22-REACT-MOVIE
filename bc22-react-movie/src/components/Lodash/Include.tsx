import React from 'react'
import _ from "lodash"
const Include = () => {
    const arr:number[] = [1,2,3];
    console.log(_.includes(arr,1));
  return (
    <div>Include</div>
  )
}

export default Include