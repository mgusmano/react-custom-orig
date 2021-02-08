import React from 'react';
//import { useGlobalState } from './globalstate/GlobalStateProvider';
import { useGlobalContext } from './globalstate/GlobalStateProvider'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridOnIcon from '@material-ui/icons/GridOn';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
  },
  heading: {
      background: 'black',
      color: 'white',
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
  },
      selectEmpty: {
      marginTop: theme.spacing(2),
  },
}));

const Toolkit = (props) => {
    //const [{userName,toolkitTitle,dashboardData,widgetData}, dispatch] = useGlobalState();
    const GlobalContext = useGlobalContext();
    const classes = useStyles();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
      <div style={{width:'100%'}} className={classes.root}>

        <Accordion>
          <AccordionSummary
            style={{background:'black',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'#424242'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography className={classes.heading}>{GlobalContext.toolkitTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{height:'100px',background:'lightgray'}}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            style={{background:'black',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'#424242'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography className={classes.heading}>Layout Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
             style={{background:'black',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'#424242'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography className={classes.heading}>Grid Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
             style={{background:'black',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'#424242'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography className={classes.heading}>Graph Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
             style={{background:'black',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'#424242'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography className={classes.heading}>Navigation Links</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
             style={{background:'black',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'#424242'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography className={classes.heading}>General Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    );
}

export default Toolkit
