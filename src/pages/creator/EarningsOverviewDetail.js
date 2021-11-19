
import React from 'react'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles'
import { Grid, Typography, Card, CardContent, TextField } from '@mui/material';
import { CustomButtonNormal } from '../../layout/CutomButtonNormal';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CutomButtonWhiteOutline } from '../../layout/CutomButtonWhiteOutline';

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.up('lg')]: {
        container: {
            margin: '20px',
        },
        alignStart: {
            textAlign: 'end'
        },
        customButtonWhite: {
            width: '185px'
        }
    },
    [theme.breakpoints.down('lg')]: {
        container: {
            margin: '4px',
        },
        alignStart: {
            textAlign: 'end'
        },
        customButtonWhite: {
            width: '140px'
        }
    },
    
    customButton: {
        color: '#fff', height: '40px', padding: "0px 20px" 
    },
    boxMargin: {
        margin: '10px'
    },
    subTitle: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    cusFormInput: {
        textAlign: 'start',
        margin: '10px 0px',

        '& label': {
            color: '#333333',
        },
        '& .inputField': {
            margin: '0.5rem 0px',
            background: 'rgb(245, 244, 242)',
            height: '40px'
        },
    },
    inputField: {
        margin: '0.5rem 0px',
        background: 'rgb(245, 244, 242)'
    },
}))

const EarningsOverviewDetail = () => {
    const classes = useStyles()

    const data = [
        { argument: 'Bronze', value: 30 },
        { argument: 'Silver', value: 20 },
        { argument: 'Gold', value: 10 },
        { argument: 'Diamond', value: 50 },
    ];
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box className={classes.container}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.boxMargin}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6} md={8} xl={10} style={{textAlign: 'start'}} >
                                <Typography gutterBottom variant='h6' display="inline">
                                    Earnings Overview (Detail)
                                </Typography>
                            </Grid>

                            <Grid item xs={6} sm={3} md={2} xl={1} className={classes.alignStart}>
                                <CustomButtonNormal size='small' className={classes.customButtonWhite}>
                                    Download Monthly CSV
                                </CustomButtonNormal>
                            </Grid>
                            <Grid item xs={6} sm={3} md={2} xl={1} style={{textAlign: 'end'}}>
                                <CustomButtonNormal size='small' className={classes.customButtonWhite}>
                                    Download Detail CSV
                                </CustomButtonNormal>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.boxMargin}>

                        <Typography gutterBottom variant='h6' style={{fontSize: '14px', justifyContent: 'space-between'}}>
                            Earnings  are the amount of income you take from the money pledged tp you as a creator on Pateron.
                            Earnings correspond to the time that Pateron sucessfully processed your pledges and refunds,
                            rather than the time when you performed the work or published paid posts.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.boxMargin}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Paper>
                                    <Box className={classes.boxMargin}>
                                        <Grid container>
                                            <Grid item xs={3} sm={3} md={6} style={{textAlign: 'start'}}>
                                                <Box className={classes.boxMargin}>
                                                    <Typography gutterBottom variant='h6' className={classes.subTitle}>
                                                        Earnings 
                                                    </Typography>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={9} sm={9} md={6} style={{textAlign: 'end'}}>
                                                <Box className={classes.boxMargin}>
                                                    <Typography gutterBottom variant='h6' display='inline' className={classes.subTitle} style={{margin: '10px'}}>
                                                        6 Months 
                                                    </Typography>
                                                    <Typography gutterBottom variant='h6' display='inline' className={classes.subTitle} style={{margin: '10px'}}>
                                                        1 Year Months 
                                                    </Typography>
                                                    <Typography gutterBottom variant='h6' display='inline' className={classes.subTitle} style={{margin: '10px'}}>
                                                        All Time 
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Chart
                                      data={data}
                                    >
                                      <ArgumentAxis />
                                      <ValueAxis />
  
                                      <BarSeries valueField="value" argumentField="argument" />
                                    </Chart>
                                  </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EarningsOverviewDetail;