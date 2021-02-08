import React from 'react';
//import { useGlobalState } from './globalstate/GlobalStateProvider';
import { useGlobalContext } from './globalstate/GlobalStateProvider';
import { useModal } from "react-modal-hook";

import TestDialog from './dialog/TestDialog'
import AddWidgetDialog from './dialog/AddWidgetDialog'
import WidgetRecordDialog from './dialog/WidgetRecordDialog'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Toolbar.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import Grid from '@material-ui/core/Grid';

const Toolbar = (props) => {
    //const [{userName,dashboardData,widgetData}, dispatch] = useGlobalState();
    const GlobalContext = useGlobalContext();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [showModalAddWidget, hideModalAddWidget] = useModal(({ in: open, onExited }) => (
      <AddWidgetDialog showModal={showModalAddWidget} hideModal={hideModalAddWidget} onExited={onExited} open={open}/>
    ));

    const [showModalWidgetRecord, hideModalWidgetRecord] = useModal(({ in: open, onExited }) => (
      <WidgetRecordDialog hideModal={hideModalWidgetRecord} onExited={onExited} open={open}/>
    ));

    const onTileClick = (e) => {
      //dispatch({type: 'TILE_WIDGETS', payload: {}});
      GlobalContext.tileWidgets({type: 'TILE_WIDGETS', payload: {}});
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event, who) => {
      setAnchorEl(null);
      if (who == 'dev') {
        showModalWidgetRecord()
      }
    };

    return (
      <div style={{background:'#e6e6e6',height:'40px',display:'flex',flexDirection:'rows',justifyContent:'space-between'}}>
        {/* <div style={{padding:'10px 0 0 10px'}}>{dashboardData.appTitle}</div> */}
        <div style={{padding:'10px 0 0 10px'}}>Dashboard</div>

        <div style={{padding:'5px 0 5px 0',display:'flex',flexDirection:'row'}}>
          <Button onClick={showModalAddWidget} style={{width:'100px',fontSize:'11px',background:'green',color:'white'}} >Add Widget</Button>
          <Divider orientation="vertical" flexItem />
          <Button onClick={onTileClick} style={{width:'100px',margin:'0 0 0 10px',fontSize:'11px',background:'gray',color:'white'}} >Tile</Button>
        </div>

        <div style={{padding:'1px 10px 0 0'}}>
          <Grid style={{padding:'8px 5px 0 5px'}} container alignItems="center">
            <FormatAlignLeftIcon style={{padding:'0 10px 0 0'}}>text</FormatAlignLeftIcon>
            <Divider orientation="vertical" flexItem />
            <MoreVertIcon style={{cursor:'pointer',padding:'0 0 0 10px'}} onClick={handleClick}/>
          </Grid>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><div style={{fontSize:'11px'}}>Another</div></MenuItem>
            <MenuItem onClick={handleClose}><div style={{fontSize:'11px'}}>Another</div></MenuItem>
            <Divider light />
            <MenuItem onClick={(event) => handleClose(event, 'dev')}><div style={{fontSize:'11px'}}>DEV</div></MenuItem>
          </Menu>
        </div>

      </div>
    );
}

export default Toolbar
