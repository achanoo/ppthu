
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
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.up('md')]: {
        container: {
            margin: '25px',
        },
        alignStart: {
            textAlign: 'start'
        },
        alignEnd: {
            textAlign: 'end'
        },
        customButtonWhite: {
            width: '160px'
        },
        customButton: {
            width: '160px'
        }
    },
    [theme.breakpoints.down('md')]: {
        container: {
            margin: '10px',
        },
        alignStart: {
            textAlign: 'center'
        },
        alignEnd: {
            textAlign: 'center'
        },
        customButtonWhite: {
            width: '150px'
        }
    },
    customButton: {
        color: '#fff', padding: "0px 20px" 
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

const EarningsOverview = () => {
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
        <Box className={classes.container} style={{margin: '10px'}}>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <Box className={classes.boxMargin}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={9} style={{textAlign: 'start'}}>
                                <Typography gutterBottom variant='h6' display="inline">
                                    Earnings Overview
                                </Typography>
                            </Grid>

                            <Grid item xs={6} sm={6} md={3} style={{textAlign: 'end'}}>
                                <CustomButtonNormal size='small' className={classes.customButtonWhite}>
                                    <Link to="/earnings-overview-detail" style={{textDecoration: 'none', color: 'white'}}>Detail</Link>
                                </CustomButtonNormal>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <Box className={classes.boxMargin}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                            <Paper>
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
                    <Box className={classes.boxMargin} style={{marginTop: '25px'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} className={classes.alignStart}>
                                <Typography gutterBottom variant='h6' className={classes.subTitle}>
                                    Tiers & <span style={{color: 'rgb(51, 149, 255)'}}>(Pricing)</span>
                                </Typography>
                                <Typography gutterBottom variant='h6' className={classes.subTitle}>
                                    Total of this month = 540, 000
                                </Typography>
                                <Typography gutterBottom variant='h6' className={classes.subTitle}>
                                    Total = 1, 000, 000
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} className={classes.alignEnd}>
                                <CustomButtonNormal size='small' className={classes.customButton}>
                                    Edit Your Bank Information
                                </CustomButtonNormal>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>
                                <Typography gutterBottom variant='h6' className={classes.subTitle} className={classes.alignStart} style={{color: 'red',fontSize: '14px',fontWeight: 'bold'}}>
                                    * Your earnings will delivered to your Bank account at the end of each month.*
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Box className={classes.header}>
                        <Card className='card'>
                            <CardContent className='cardcontent'>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}  justifyContent='center' alignItems='center'>
                                        <div>
                                        <label className='input-label' htmlFor='bankAccount'>
                                          Bank
                                        </label>
                                        <FormControl sx={{ minWidth: '100%' }}>
                                            <InputLabel id="demo-simple-select-helper-label">Bank</InputLabel>
                                            <Select
                                                fullWidth
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                                className={classes.inputField}
                                            
                                            >
                                            <MenuItem value={10}>KBZ</MenuItem>
                                            <MenuItem value={20}>AYA</MenuItem>
                                            <MenuItem value={30}>CB</MenuItem>
                                            </Select>
                                        </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} justifyContent='center' alignItems='center' className={classes.cusFormInput}>
                                        <label className='input-label' htmlFor='bankAccount'>
                                          Bank Account
                                        </label>
                                        <TextField
                                          id='bankAccount'
                                          type='number'
                                          name='bankAccount'
                                          className={classes.inputField}
                                          fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} justifyContent='center' alignItems='center' className={classes.cusFormInput}>
                                        <label className='input-label' htmlFor='bankAccountName'>
                                          Bank Account Name
                                        </label>
                                        <TextField
                                          id='bankAccountName'
                                          type='text'
                                          name='bankAccountName'
                                          className={classes.inputField}
                                          fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} justifyContent='center' alignItems='center' className={classes.cusFormInput}>
                                        <label className='input-label' htmlFor='otp'>
                                          Enter OTP
                                        </label>
                                        <TextField
                                          id='otp'
                                          type='number'
                                          name='otp'
                                          className={classes.inputField}
                                            fullWidth
                                            height={100}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} justifyContent='center' alignItems='center' className={classes.cusFormInput}>
                                        <Box>
                                            <Grid container spacing={1}>
                                                <Grid item xs={6} sm={6} md={6} justifyContent='center' alignItems='center' style={{textAlign: 'start'}}>
                                                    <CutomButtonWhiteOutline size='small' className={classes.customButtonWhite}>
                                                        Request OTP
                                                    </CutomButtonWhiteOutline>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={6} justifyContent='center' alignItems='center' style={{textAlign: 'end'}}>
                                                    <CustomButtonNormal size='small' className={classes.customButtonWhite}  >
                                                        Confirm
                                                    </CustomButtonNormal>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid> 
            </Grid>
        </Box>
    );
}

export default EarningsOverview;