import React from 'react'
import _ from 'lodash'
const LastFirstLodash = () => {
    interface Student  {
        id: number;
        name: string;
      }
       
    const arrStudent:Student[]= [
        {id:1, name:"Peter"},
        {id:1, name:"Anna"},
        {id:1, name:"Iris"},
    ]
    const firstItem = _.first(arrStudent);
  return (
    <div>
        <div>FirstItem:{ firstItem?.name }</div>
    </div>
  )
}

export default LastFirstLodash