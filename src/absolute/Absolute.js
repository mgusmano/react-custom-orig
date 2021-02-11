import React, { useEffect, useState } from 'react';
import './data/dashboardData'
//import './data/ResourceStrings'
import Widget from './Widget'
import { useGlobalContext } from '../globalstate/GlobalStateProvider';

const Absolute = () => {
  const GlobalContext = useGlobalContext();

  useEffect(() => {
    GlobalContext.getDashboard()
    var element = document.getElementById("initialLoadMask");
    element.parentNode.removeChild(element);
  }, []);

  return (
    <div id='absolute' className='absolute' style={{width:'100%',flex:'1',position:'relative',border:'0px solid #73AD21',display: 'flex'}}>
    {GlobalContext.widgetData !== null &&
      GlobalContext.widgetData.map((widgetRecord) => {
        return (
          <Widget key={widgetRecord.id} widgetRecord={widgetRecord}></Widget>
        )
      })
    }
    </div>
  )
}

export default Absolute