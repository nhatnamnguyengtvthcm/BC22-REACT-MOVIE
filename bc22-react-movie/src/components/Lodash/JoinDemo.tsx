import React from 'react'
import _ from 'lodash'
const JoinDemo = () => {
    let arr = ["Khải", "Nam", "Minh"];
    const result = arr.join("-");
    const result1 = _.join(arr,"*");
  return (
    <div>
        {result}
        {result1}
    </div>
  )
}

export default JoinDemo