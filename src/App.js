
import React, { useEffect, useState, useCallback } from 'react';
import { hot } from 'react-hot-loader/root'
//import axios from "axios";
import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Widget from './Widget'
import Toolbar from './Toolbar'
import Toolkit from './Toolkit'
import Logo from './Logo'
import './data/dashboardData'
import './data/ResourceStrings'

import { useGlobalContext } from './globalstate/GlobalStateProvider'

const App = () => {
  const GlobalContext = useGlobalContext()

  const [width, setWidth] = useState(null)
  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width':
        setWidth(e.detail.payload)
        break;
      default:
        break;
    }
  }, [])

  useEffect(() => {

    //window.addEventListener('mjg', onMessage);
    // return function cleanup() {
    //   window.removeEventListener('mjg', onMessage);
    // };
    //return

    console.log(GlobalContext)
    GlobalContext.getDashboard()
    var element = document.getElementById("initialLoadMask");
    element.parentNode.removeChild(element);

    console.log(GlobalContext)



    // setTimeout(function(){
    //   //console.log(window.dashboardData)
    //   //console.log(window.dashboardData.dashboard.widgets)
    //   var action = {"success":true,"userName":"Marc Gusmano"}
    //   dispatch({type: 'userName', payload: action.userName});
    //   dispatch({type: 'dashboardData', payload: window.dashboardData});
    //   dispatch({type: 'widgetData', payload: window.dashboardData.dashboard.widgets});
    //   var element = document.getElementById("initialLoadMask");
    //   element.parentNode.removeChild(element);
    // }, 2000);
    // //return


    // axios
    //   .post('Actions.ashx', {action: 'passwordExpiration'})
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data))
    //     dispatch({type: 'userName', payload: response.data.userName});
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // axios
    //   .get('DashboardHandler.ashx?action=getInitialData', {action: 'getInitialData'})
    //   .then((response) => {
    //     dispatch({type: 'dashboardData', payload: response.data});
    //     dispatch({type: 'widgetData', payload: response.data.dashboard.widgets});
    //     var element = document.getElementById("initialLoadMask");
    //     element.parentNode.removeChild(element);
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })


  }, []);

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
  <>
  {GlobalContext.widgetData !== null 
    ?  <Vertical>
        <Toolbar/>    
        <div style={{background:'darkgray',height:'1px'}} role="separator"></div>
        <Horizontal style={{width:'100%',background:'blue'}}>
          {/* left */}
          <Vertical style={{xminWidth: '80px', width:'200px',background:'black',color:'white'}}>
            <Logo/>
            <div style={{textAlign:'center',fontSize:'11px'}}>Welcome {GlobalContext.userName}</div>
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
          <div id='absolute' className='absolute' style={{width:'100%',flex:'1',position:'relative',border:'0px solid #73AD21',display: 'flex'}}>
            {dashboardData.dashboard !== undefined &&
              //console.log(widgetData)
              GlobalContext.widgetData.map((widgetRecord) => {
                //console.log(widgetRecord)
                return (
                  <Widget key={widgetRecord.id} widgetRecord={widgetRecord}></Widget>
                )               
              })
            }
          </div>
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

: <div>wait</div>
}

</>
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
//   dispatch({type: 'ADD_WIDGET', payload: {x: 600, y: 100, w: 100, h: 100, title: 'new'}});
// }}>Add</button>}
// {<button onClick={() => {
//   dispatch({type: 'UPDATE_WIDGET', payload: {id: 0, x: 610, y: 110, w: 100, h: 100}});
// }}>Update</button>}
