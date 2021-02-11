
import React, { useEffect, useState, useCallback } from 'react';
import { hot } from 'react-hot-loader/root'
//import axios from "axios";
import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Toolbar from './Toolbar'
import Toolkit from './Toolkit'
import Logo from './Logo'

//import { useGlobalContext } from './globalstate/GlobalStateProvider';

import Absolute from './absolute/Absolute';

import { useGlobalContext } from './globalstate/GlobalStateProvider'

const App = () => {
  //const GlobalContext = useGlobalContext();

  //{GlobalContext.widgetData.length ?

  console.log(GlobalContext.widgetData)

  // return (
  //   <div>
  //   {GlobalContext.widgetData !== null
  //   ? GlobalContext.widgetData.map((widget,index) => {
  //       return (
  //         <div key={index}>
  //           <div style={{textAlign:'center',fontSize:'11px'}}>Welcome {GlobalContext.userName}</div>
  //           {widget.title}
  //         </div>
  //       )
  //     })
  //   : <div>wait</div>
  //   }
  //   </div>
  // )

  return (
      <Vertical>
        <Toolbar/>
        <div style={{background:'darkgray',height:'1px'}} role="separator"></div>
        <Horizontal style={{width:'100%',background:'blue'}}>
          {/* left */}
          <Vertical style={{xminWidth: '80px', width:'200px',background:'black',color:'white'}}>
            <Logo/>
            {/* <div style={{textAlign:'center',fontSize:'11px'}}>Welcome {userName}</div> */}
            <div></div> {/* <Splitter/> */}
            <div style={{flex:'1',margin:'20px 0 0 0'}}>
              <Toolkit/>
            </div>
            <Splitter/>
            <div>Nav</div>
            {/* <Nav handleListItemClick={handleListItemClick} handleRouteClick={handleRouteClick}/> */}

          </Vertical>
          {/* left */}
          <Splitter/>
          <Vertical style={{flex:'auto',xminWidth:'100px', xmaxWidth: '250px',xwidth:'500px'}}>
            {/* center */}
            <Absolute/>
          </Vertical>
          {/* <Switch>
            <Route path="/" component={() => <Dash/>} exact />
            <Route path="/about" component={() => {return <About/>}} />
            <Route path="/shop" component={Shop} />
            <Route path="/dashboard" render={props => (<Dashboard exact />)}/>
            <Route path="/gridlayout" render={props => (<GridLayoutPage exact />)}/>
            <Route component={Error} />
          </Switch> */}
          {/* center */}





        </Horizontal>
        {/* <Splitter/>
        <div>footer</div> */}
      </Vertical>

)
}

export default hot(App)

// {/* <Splitter/>
// {/* right */}
// <Vertical style={{xflex:'auto',minWidth:'50px', xmaxWidth: '250px',xwidth:'500px'}}>
//   <div>Right</div>
//   {/* <Auth/>
//   <Splitter/>
//   <Rates/> */}
// </Vertical>
// right */}




// {/* <WidgetStateProvider widgetRecord={widgetRecord} key={widgetRecord.id}>
// <Widget widgetRecord={widgetRecord}></Widget>
// </WidgetStateProvider> */}

// {<button onClick={() => {
//   GlobalContext.addWidget({type: 'ADD_WIDGET', payload: {x: 600, y: 100, w: 100, h: 100, title: 'new'}});
// }}>Add</button>}
// {<button onClick={() => {
//   GlobalContext.updateWidget({type: 'UPDATE_WIDGET', payload: {id: 0, x: 610, y: 110, w: 100, h: 100}});
// }}>Update</button>}
