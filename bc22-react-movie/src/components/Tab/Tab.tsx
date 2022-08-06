import React from 'react'
import { Radio, Tabs } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "store";
import { cinema } from 'interfaces/cinema';
const { TabPane } = Tabs;
interface Props{
    cinema:cinema;
}
const Tab = (props:Props) => {
    const {cinema} = props;
  return (
    <>
         {/* <TabPane tab={<img src={require(cinema.logo)}></img>}>Content of tab</TabPane> */}
         <TabPane tab={<img src={cinema.logo}></img>}>Content of tab</TabPane>
    </>
  )
}

export default Tab