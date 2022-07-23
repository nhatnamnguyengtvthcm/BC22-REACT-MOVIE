import React from 'react'
import _ from "lodash"
const SortLodash = () => {
    interface user{
        name:string,
        age: number
    }
    const users:user[] = [
        {name:"Fred", age:48},
        {name:"Kaito", age:36},
        {name:"Bake", age:40}
    ];
    const result_sortByUser = _.sortBy(users, [item=>item.age]);
    console.log(result_sortByUser);
  return (
    <div>
    
    </div>
  )
}

export default SortLodash