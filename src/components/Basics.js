import React, { useState, useRef } from 'react'
import {
  Typography,
  Box,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  ButtonGroup,
  Button,
} from '@mui/material'
import moment from 'moment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import RemoveCircleOutlineSharpIcon  from '@mui/icons-material/RemoveCircleOutlineSharp';
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import badge from '../assets/menu/badge.svg'
import FormControlLabel from '@mui/material/FormControlLabel'
import JoditEditor from 'jodit-react'
import Link from '@mui/material/Link'
import { CheckCircle, RadioButtonUnchecked, SocialDistanceRounded } from '@mui/icons-material'
import '../assets/style.css'
import Avatar from '@mui/material/Avatar'
import { FiEdit3 } from 'react-icons/fi'
import { makeStyles } from '@mui/styles'
import { CButton } from '../layout/CCButton'
import { coverphoto } from '../assets/data'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import FemaleIcon from '@mui/icons-material/Female'
import MaleIcon from '@mui/icons-material/Male'
import SelectOption from './../layout/SelectOption'
import { useHistory } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import axios from 'axios';
import { BaseUrl } from '../helpers/Constant';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
    },
    
  },
  container: {
    width: '90vw',
    maxWidth: '700px',
    textAlign: 'center',
    height: 'auto',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  firstinfo:{
    display:'flex',
     border:'1px solid rgb(229,227,221)',
    justifyContent: 'space-between',
    justifyItems: 'center',
  },
  boxer: {
   
    display: 'flex',
    padding: '20px 25px',
    justifyContent: 'flex-start',
    justifyItems: 'center',
    alignItems: 'baseline',
    '& .MuiAvatar-root': {
      display: 'flex',
      alignSelf: 'center',
      marginRight: theme.spacing(2),
    },
    '& h4': {
      display: 'flex',
      alignSelf: 'center',
      marginRight: theme.spacing(1),
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.3rem',
    },
    '& Button':{
      display:'flex',
      alignSelf:'center'
    },
    '& svg': {
      color: 'rgb(229,227,221)',
      fontSize: '1.3rem',
      alignSelf: 'center',
    },
  },
  userinfo:{
    '& .MuiTextField-root':{
      display:'flex',
      alignSelf:'center',
      border:'0px'
    },
    '& .MuiInputBase-input::before':{
      border:'0px'
    }
  },
  cusFormInput: {
    textAlign: 'start',
    padding: ' 10px 0px',

    '& label': {
      color: '#333333',
      padding: '18px 0px',
      marginBottom: '8px',
    },
    '& .inputField': {
      margin: '0.5rem 0px',
      background: 'rgb(245, 244, 242)',
    },
  },
  datePickupInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    '& span': {
      margin: '0px 8px',
    },
    '& .MuiOutlinedInput-root #day,.MuiOutlinedInput-root #month': {
      width: '24px',
    },
    '& .MuiOutlinedInput-root #year': {
      width: '42px',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
    },

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      '& ~$mdsize': {
        margin: '0px 8px',
        display: 'none',
      },
      '& .MuiOutlinedInput-root #day,.MuiOutlinedInput-root #month': {
        width: '100%',
      },
      '& .MuiOutlinedInput-root #year': {
        width: '100%',
      },
    },
  },
  xssize: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      alignSelf: 'self-start',
    },
  },
  mdsize: {
    display: 'inline',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  subtitle: {
    fontSize: '0.725rem',
    color: '#c9c8c4',
  },
  buttonGroup: {
    float: 'right',
  },
  selectOption: {
    margin: '0px 8px!important',
  },
  cusFormControl: {
    '& .MuiFormControl-root ': {
      margin: '0px 0px 0px 0px !important',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  cusOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coverphoto: {
    marginTop: '16px',
    height: '250px',
    width: '100%',
    backgroundImage: `url(${coverphoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  hrdiv: {
    margin: '20px 0px !important',
  },
  general: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start',
    },
    gap: '15px',
  },
  hidddendiv:{
    display:'none !important'
  }
  
}))

// input formula=> (valu.length + 1)*8

const initalData={
  username:'Bingo',
  cover:'',
  profile:'',
  regions:'none',
  address:'',
  phone:'',
  gender:'',
  dob:'',
  bio:'',
  socials:[],
  day:'',
  month:'',
  year:'',
  email:'',
  categories:JSON.parse(localStorage.getItem('selectedCategory'))||[],
  role:''
}

const Basic = () => {
  const { getRegions, regions, user: authUser, updatetoCreator, loading, getUserData } = useAuthContext();
  const { role, name } = authUser;
  console.log(role);
    const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState('');

  const [errors, setErrors] = useState({
    cover:'',
    profile:'',
    regions:'',
    address:'',
    phone:'',
    gender:'',
    dob:'',
    bio:'',
    socials:'',
    day:'',
    month:'',
    year:'',
    email:'',
  });
  
  

  const [emailorphone,setEmailorphone]=React.useState({
    isEmail:true,
    isPhone:true
  })
  
  const history = useHistory()
  const classes = useStyles()
  const editor = useRef(null)
  const cover=useRef(null);
  const profile=useRef(null);
  const [content, setContent] = useState('');

  const [state,setState]=useState(initalData);
  const [social,setSocial]=useState({
    name:'none',
    link:''
  })
  const socialArray = [
    {id:1,name:'facebook'},
    {id:2,name:'instagram'},
    {id:3,name:'youtube'},
    {id:4,name:'twitter'},
    {id:5,name:'twitch'},
    {id:6,name:'discord'},
    {id:7,name:'tiktok'},
    {id:8,name:'others'},
  ]

  const places = ['yangon', 'mandalay', 'sagaing']

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  }

  const NewgetValue = (value) => {
    console.log(value)
    // setState({ ...state, isError })
  }

  const goToHome = () => {
    history.push('/creator-home')
  }

  const inputChange=(e)=>{
    const {name,value,files}=e.target;
    console.log(value);
    if(name === 'cover' || name==='profile'){
        setState(prev=>({
      ...prev,
      [name]:files[0]
    }))
    }
    else{
          setState(prev=>({
            ...prev,
            [name]:value
          }))
    }
  
    
  }

  const inputLinkChange=(e)=>{
    const {name,value}=e.target;
    if(name ==='social'){
      setSocial(prev=>({
        ...prev,
        name:value
      }))
    }else{
      setSocial(prev=>({
        ...prev,
        link:value
      }))
    }

  }

  const addMore=()=>{
    let acc=[];
    let cc=[];
    let {socials}=state;
    acc.push(social.name);
    acc.push(social.link);
    socials.push(acc);

    setState(prev=>({
      ...prev,
      socials
    }))
    setSocial({link:'',name:'none'});
    
  }


  
  const genderChange=(gender)=>{
    setState(prev=>({
      ...prev,
      gender:gender
    }))
  }

  const showimage=(image)=>{
    return URL.createObjectURL(image);
   // return window.URL.createObjectURL(image);
  }

  const removeLink=(i)=>{
    const {socials}=state;
    let newSocials=socials.filter((data,index)=>index!==i);
    setState(prev=>({
      ...prev,
      socials:newSocials
    }))
  }

  // const  getUserinfo=async()=>{
  //   try{

  //    const response=await axios(
  //       {
  //         method: 'get',
  //         url: `${BaseUrl}/user`,
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //           Authorization: `Bearer ${authUser.access_token}`,
  //         },
  //       });

  //       return response.data;

  //   }catch(error){
  //     return error.response;
  //   }
  // }

  const checkValidation = () => {



    
    for (const property in state) {
      // console.log(`${property}: ${state[property]}`);
      if (state[property].length <= 0 || state[property]==='none') {
        setErrors(prev => ({
          ...prev,
          [property]:`${property} is required`
        }))
       }
    }
  }

  console.log(errors);

 

  const hanldingSubmit=()=>{
    // console.log('you click');
    checkValidation();
    // console.log(regions.find(x => x.name === state.regions).id);
    // console.log(moment({'year': state.year, 'month': state.month-1,'date':state.day}).format("YYYY-MM-DD HH:mm:ss"));
   let dob=moment().add(state.day, 'days').month(state.month-1).year(state.year).format("YYYY-MM-DD HH:mm:ss");
    let formData=new FormData();
    // formData.append('name',state.username);
    // formData.append('email',state.email);
    // formData.append('phone_1',state.phone);
    // formData.append('role_id','2');
    // formData.append('cover_photo',state.cover);
    // formData.append('profile_image',state.profile);
    // formData.append('categories',JSON.stringify(state.categories));
    // formData.append('socials',JSON.stringify(state.socials));
    // formData.append('gender',state.gender);
    // formData.append('dob',dob);
    // formData.append('address',state.address);
    // formData.append('region_id',regions.find(x => x.name === state.regions).id);
    // formData.append('bio',state.bio);
    
    //updatetoCreator(formData);
    // setState(prev=>({
    //   ...prev,
    //   role:'creator'
    // }))
  }
  useEffect(() => {
    console.log('now i am changin cause context change!');
    setState((prev) => ({
      ...prev,
      role:authUser.role
    }))
  }, [authUser.role]);

   useEffect(()=>{
     console.log('i am working as state');
    let getData=true;
    if(getData){
     getRegions();
      let data=getUserData();  
      let {email,phone,role}=state;
      let userphone='';
      let useremail='';
      let name='';
     data.then(r=>{

       if(r.data.hasOwnProperty("user_info")){
         userphone =r.data.user_info.user.phone_no;
        useremail =r.data.user_info.user.email;
         name=r.data.user_info.user.name;
         
       }else{

           userphone =r.data.user.phone_no;
          useremail =r.data.user.email;
         name=r.data.user.name;
        
       }
       
        

        if (userphone === null || typeof userphone === 'object'|| typeof userphone === 'undefined') { 
          setEmailorphone(prev=>({
            ...prev,
            isPhone:false
          }))
        } else{
          phone=userphone
        }

        if (useremail === null || typeof useremail === 'object' || typeof useremail === 'undefined') { 
          setEmailorphone(prev=>({
            ...prev,
            isEmail:false
          }))
        } else{
          email=useremail
        }

        setState(prev=>({
          ...prev,
          username:name,
          phone:phone,
          email:email,
          
        }))

     })
    }
   
    return getData=false;
  },[]);

  // useEffect(()=>{
  //   //console.log('me too');
  //   getRegions();
  // },[])

    // if(loading){
    //   return <h5>Loading....</h5>
    // }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant='h4' gutterBottom component='div'>
          Edit Profile
        </Typography>

        <Box className={`${classes.firstinfo}`} >
          <Box className={`${classes.boxer} ${classes.userinfo}   `}>
            <Avatar sx={{width:40,height:40}} src={state.profile.length !== 0? showimage(state.profile):'https://cdn-icons-png.flaticon.com/128/1946/1946429.png'} />
            <input
              type='file'
              ref={profile}
              onChange={inputChange}
              name="profile"
              accept='image/*'
              className={classes.hidddendiv}
              />
             <TextField id="outlined-basic" value={state.username}
              name="username" onChange={inputChange} 
               variant="standard" 
               InputProps={{disableUnderline:true, 
                            'aria-label': 'Without label',style:{fontSize:'1.3rem',width:((state.username.length+4)*8)+'px'} }} />

          
            <IconButton onClick={()=>profile.current.click()}>
            <FiEdit3 />
            </IconButton>
          </Box>
          <Box className={`${classes.boxer}`}>
            <Avatar src={badge} sx={{ width: 30, height: 30 }}/>
            <CButton>Verify</CButton>
          </Box>
        </Box>

        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Cover photo </h5>
            <input
            type='file'
            ref={cover}
            onChange={inputChange}
            name="cover"
            accept='image/*'
            className={classes.hidddendiv}
            />
            <Button onClick={() => cover.current.click()}>Add</Button>
          </Box>
          
          <Box className={classes.coverphoto}>
          <img src={`${state.cover.length !==0 ? showimage(state.cover) : coverphoto}`}  alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </Box>
        </Box>

        <Divider className={classes.hrdiv} />

        {/* cover start */}
{/*         <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Cover photo </h5>
            <Button>Add</Button>
          </Box>
          <Box className={classes.coverphoto}></Box>
        </Box>

        <Divider className={classes.hrdiv} /> */}
        {/* bio start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Bio </h5>
            {/* <Button>Add</Button> */}
          </Box>

          <TextField
            id='filled-multiline-flexible'
            label='Multiline'
            inputProps={{ 'aria-label': 'Without label' }}
            multiline
            fullWidth
            maxRows={4}
            name="bio"
            onChange={inputChange}
            variant='standard'
          />
        </Box>
        <Divider className={classes.hrdiv} />
        {/* dob and gender  */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> General Info </h5>
            {/* <Button>Add</Button> */}
          </Box>
          <Box className={classes.general}>
            <Box className={classes.cusFormControl}>
              <Box className={classes.cusOptions}>
                <h5 className='input-label'> Gender </h5>
              </Box>
              <Box className={classes.datePickupInput}>
                <ButtonGroup
                  variant='contained'
                  aria-label='outlined primary button group'
                >
                  <Button onClick={()=>genderChange('male')} style={{backgroundColor:`${state.gender =='male' ? '#333':''}`}}>
                    <MaleIcon  />
                  </Button>
                  <Button onClick={()=>genderChange('female')} style={{backgroundColor:`${state.gender =='female' ? '#333':''}`}}>
                    <FemaleIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box className={classes.cusFormControl}>
              <Box className={classes.cusOptions}>
                <h5 className='input-label'> Birthday </h5>
              </Box>
              <Box className={classes.datePickupInput}>
                <span className={classes.xssize}>Day</span>
                <TextField
                  id='day'
                  type='text'
                  // name={aemail}
                  name='day'
                  className={classes.inputField}
                  placeholder='XX'
                  
                  onChange={inputChange}
                />
                <span className={classes.mdsize}>Day</span>
                <span className={classes.xssize}>Month</span>
                <TextField
                  variant='outlined'
                  type='text'
                  id='month'
                  name='month'
                  placeholder='XX'
                  onChange={inputChange}
                />
                <span className={classes.mdsize}>Month</span>
                <span className={classes.xssize}>Year</span>
                <TextField
                  variant='outlined'
                  type='text'
                  name='year'
                  id='year'
                  placeholder='XXXX'
                  onChange={inputChange}
                />
                <span className={classes.mdsize}>Year</span>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider className={classes.hrdiv} />
        {/* link start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Links </h5>
             <CButton onClick={addMore}>Add </CButton> 
          </Box>
          <SelectOption fullWidth={true} data={socialArray} onChange={social.name} name='social' inputChange={inputLinkChange} />
          <TextField
            id='standard-basic'
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
            variant='standard'
            name='link'
            value={social.link}
            placeholder='https://www.example.com/...'
            onChange={inputLinkChange}
          />
          {/* social list */}
         
           
          <List >
            {state.socials.map((acc,index)=>{
              return <ListItem
              key={index}
              secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={()=>removeLink(index)}>
                      <RemoveCircleOutlineSharpIcon />
                    </IconButton>
                  }
              >
                <ListItemText
                  primary={acc[1]}
                  secondary={acc[0]}
                />
              </ListItem>
            })}
              
          </List>

          
        </Box>

        <Divider className={classes.hrdiv} />
        {/* email start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Email </h5>
            {/* <Button>Add</Button> */}
          </Box>

          <TextField
            id='standard-basic'
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
            name="email"
            value={state.email } 
            readOnly={emailorphone.isEmail}
            variant='standard'
            placeholder='example@gmail.com'
           
          />
        </Box>
        <Divider className={classes.hrdiv} />
        {/* phone start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Phone </h5>
            {/* <Button>Add</Button> */}
          </Box>

          <OutlinedInput
            fullWidth
            id='loginPh'
            name='phone'
            value={state.phone}
             readOnly={emailorphone.isPhone}
           onChange={inputChange}
            startAdornment={
              <InputAdornment position='start'>
                +95
                <KeyboardArrowRightIcon /> 9
              </InputAdornment>
            }
            aria-describedby='component-error-text'
            inputProps={{ type: 'text', 'aria-label': 'Without label'}}
            placeholder='000000000'
          />
        </Box>
        <Divider className={classes.hrdiv} />
        {/* region start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Regions </h5>
            {/* <Button>Add</Button> */}
          </Box>
          <SelectOption fullWidth={false} data={regions} onChange={state.regions} name="regions" inputChange={inputChange} />
        </Box>
        <Divider className={classes.hrdiv} />
        {/* region start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Address </h5>
            {/* <Button>Add</Button> */}
          </Box>
          <TextField
            id='filled-multiline-flexible'
            label='example street or quater,example township, example city'
            inputProps={{ 'aria-label': 'Without label' }}
            multiline
            fullWidth
            maxRows={4}
            name='address'
            onChange={inputChange}
            variant='standard'
          />
        </Box>
        {/* button start */}
        <Box className={classes.buttonGroup} sx={{ mt: 3 }}>
          <CButton border="false" bgcolor='#eeeeee' textcolor='#0f0f0f'>
            Cancel
          </CButton>
          <CButton onClick={hanldingSubmit}>Save</CButton>
        </Box>
      </div>
    </div>
  )
}

export default Basic
