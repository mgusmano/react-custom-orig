import React, { createContext, useReducer, useContext } from 'react';
import { GlobalStateReducer } from './GlobalStateReducer';
import { RESIZE_WIDGET } from './GlobalStateTypes';

const GlobalContext = createContext();

export const GlobalStateProvider = (props) => {

  const initialState = {
    highWidgetId: 0,
    userName: '',
    toolkitTitle: 'Workspace',
    dashboardData: {appTitle:''},
    widgetData: null,
  }
  const[state, dispatch] = useReducer(GlobalStateReducer, initialState);

  const getDashboard = () => {
    setTimeout(function(){
      console.log(window.dashboardData)
      //console.log(window.dashboardData.dashboard.widgets)
      var action = {"success":true,"userName":"Marc Gusmano"}
      dispatch({type: 'userName', payload: action.userName});
      dispatch({type: 'dashboardData', payload: window.dashboardData});
      console.log( window.dashboardData.dashboard.widgets)
      dispatch({type: 'widgetData', payload: window.dashboardData.dashboard.widgets});
      var element = document.getElementById("initialLoadMask");
      if (element) {
        element.parentNode.removeChild(element);
      }
    }, 500);
  }

  const resizeWidget = (payload) => {
    var event = {type: RESIZE_WIDGET, payload: payload}
    console.log(event)
    dispatch(event);
  }

  const addWidget = (payload) => {
    dispatch(payload);
  }

  const deleteWidget = (payload) => {
    dispatch(payload);
  }

  const tileWidgets = (payload) => {
    dispatch(payload);
  }

  const activateWidget = (payload) => {
    dispatch(payload);
  }







  //const reducer = useReducer(GlobalStateReducer, initialState);







  return (
    <GlobalContext.Provider value={{
      highWidgetId: state.highWidgetId,
      userName: state.userName,
      toolkitTitle: state.toolkitTitle,
      dashboardData: state.dashboardData,
      widgetData: state.widgetData,
      getDashboard,
      resizeWidget,
      addWidget,
      deleteWidget,
      tileWidgets,
      activateWidget
    }}>
      {props.children}
    </GlobalContext.Provider>
  );

  // return (
  //   <GlobalContext.Provider value={ useReducer(GlobalStateReducer, initialState) }>
  //     {props.children}
  //   </GlobalContext.Provider>
  // );
}
export const useGlobalContext = () => useContext(GlobalContext);
