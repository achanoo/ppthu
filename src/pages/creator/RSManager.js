
import React from 'react'
import { Avatar, Card, CardContent, Checkbox, Divider, Drawer, FormControlLabel, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles'
import { styled, alpha } from '@mui/material/styles'
import MenuButton from '../../layout/MenuItem'
import { CheckBox, Close, DeleteOutline, FilterListOutlined, InboxOutlined, KeyboardArrowDown, MailOutline, Send } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { CustomButton } from '../../layout/CutomerButton'
import { CustomButtonWhite } from '../../layout/CutomButtonWhite'
import { Link } from 'react-router-dom'
import send from '../../assets/others/sent-email.svg'
import download from '../../assets/others/download.svg'
import filter from '../../assets/others/filter.svg'
import more from '../../assets/others/more.svg'
import { visuallyHidden } from '@mui/utils';
import PropTypes from 'prop-types';
import gear from '../../assets/menu/gear.svg'
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.up('md')]: {
      container: {
        margin: '25px',
      },
      header: {
        margin: '10px',
      },
      customButtonWhite: {
          height: '40px', margin: '8px 4px', padding: "0px 16px"
      },
      alignStart: {
          textAlign: 'start'
      },
      alignEnd: {
          textAlign: 'end'
      },
    },
    [theme.breakpoints.down('lg')]: {
      container: {
        margin: '10px',
      },
      header: {
        margin: '4px',
      },
      customButtonWhite: {
          height: '40px', margin: '8px 2px', padding: "0px 15px"
      },
      alignStart: {
          textAlign: 'justify'
      },
      alignEnd: {
          textAlign: 'justify'
      },
    },
    linkBtn: {
        fontSize: '12px',color: 'rgb(51,149,255)'
    },
    addition: {
        background: '#f7f7f7',
        height: '90px',
        borderRadius: '4px',
        padding: '20px'
    }, 
    cardContent: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0
        }
    },
    subTitle: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    customButton: {
        color: '#fff', height: '40px', padding: "0px 16px" 
    },
    buttonImage: {
        width: 20, height: 20, display: 'inline-flex' 
    },
    tableContainer: {
        boxShadow: 'none'
    },
    tableCell: {
        padding: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
    }
  }))
  
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    display: 'inline-flex',
    margin: '6px',
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginLeft: 0,
    width: '100%',
    color: '#000',
    [theme.breakpoints.up('md')]: {
      // marginLeft: theme.spacing(1),
      width: '25ch',
    },
  }))
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))
  

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.4, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '18ch',
        '&:focus': {
          width: 'autoc',
        },
      },
    },
  }))

//   Sample Table Start

  function createDataSimple(id, date, amt, status) {
    return { id, date, amt, status };
  }
  
  const rowSamples = [
    createDataSimple(1,'2021-03-01', '$10', "Paid"),
    createDataSimple(2,'2021-03-01', '$10', "Paid"),
    createDataSimple(3,'2021-03-01', '$10', "Paid"),
  ];
  //   Sample Table End

  // DataTable Start
  function createData(id, name, email, currentTier, lifeTime, joinDate, cancelDate, accessExpiration) {
    return {
        id,
        name,
        email,
        currentTier,
        lifeTime,
        joinDate,
        cancelDate,
        accessExpiration
    };
  }
  
  const rows = [
    createData(1, 'Ma', 'mama@gmail.com', 'Platinum', 'Yes', '2021-05-10', '2021-07-10', '2022-05-10'),
    createData(2, 'Ma Chan', 'mama@gmail.com', 'Platinum', 'Yes', '2021-05-10', '2021-07-10', '2022-05-10'),
    createData(3, 'Ma Ei', 'mama@gmail.com', 'Platinum', 'Yes', '2021-05-10', '2021-07-10', '2022-05-10')
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'name',
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'email',
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'currentTier',
      disablePadding: false,
      label: 'Current Tier',
    },
    {
      id: 'lifeTime',
      disablePadding: false,
      label: 'Life Time',
    },
    {
      id: 'joinDate',
      disablePadding: false,
      label: 'Join Date',
    },
    {
      id: 'cancelDate',
      disablePadding: false,
      label: 'Cancel Date',
    },
    {
      id: 'accessExpiration',
      disablePadding: false,
      label: 'Acess Expiration',
    },
  ];

  
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutline />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListOutlined />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  // DataTable End
//Tab Start
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
//Tab End

const RSManager = () => {
    
    const classes = useStyles()

    // DataTable Start
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
    
    const handleClick = (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
    
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
    
      setSelected(newSelected);
    };
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };
    
    const isSelected = (id) => selected.indexOf(id) !== -1;
    
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
// DataTable End

//Drawer Start

const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  //Tab Start
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Tab End
  const list = (anchor) => (
    <Box
      sx={{ width: 350}}
      // role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <Box sx={{padding: '20px'}}>
        <Grid container>
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={2}>
            <Close />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs value={value} onChange={handleChange}  textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example" centered variant="fullWidth">
            <Tab label="All filters" {...a11yProps(0)} />
            <Tab label="Saved filters" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                    Status
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Active" className={classes.subTitle}/>
                    <FormControlLabel control={<Checkbox />} label="New" className={classes.subTitle}/>
                    <FormControlLabel control={<Checkbox />} label="Cancelled" className={classes.subTitle}/>
                  </FormGroup>
              </Grid>
            </Grid>
          </Box>

          <Divider />
          <Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                    Tiers
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="All Tiers" className={classes.subTitle}/>
                    <FormControlLabel control={<Checkbox />} label="Bronze" className={classes.subTitle}/>
                    <FormControlLabel control={<Checkbox />} label="Silver" className={classes.subTitle}/>
                  </FormGroup>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Gold" className={classes.subTitle}/>
                    <FormControlLabel control={<Checkbox />} label="Diamond" className={classes.subTitle}/>
                    <FormControlLabel control={<Checkbox />} label="No Tier" className={classes.subTitle}/>
                  </FormGroup>
              </Grid>
            </Grid>
          </Box>
          <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                  Benefits
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                  All benefits to your tiers to acces the filter. <Link to="#" className={classes.linkBtn} sx={{float:'right' }}>Learn more</Link>
              </Typography>
            </Grid>
          </Grid>
          </Box>
          <Divider />
          <Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                    Join Date
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                    This week
                </CustomButtonWhite>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                  Last week
                </CustomButtonWhite>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                    This month
                </CustomButtonWhite>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                  Last month
                </CustomButtonWhite>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box>
            <Grid container>
              <Grid item xs={2} sm={2} md={2}>
                </Grid>
              <Grid item xs={5} sm={5} md={5}>
                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                  Save filters
                </CustomButtonWhite>
              </Grid>
              <Grid item xs={5} sm={5} md={5}>
                <CustomButton size='small' className={classes.customButtonWhite}>
                    Apply filters
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
      <Divider />
    </Box>
  );
//Drawer End
    return (
        <Box className={classes.container}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.header}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography gutterBottom variant='h6' display="inline">
                                    Relationship Manager
                                </Typography>
                                <MenuButton
                                    label='As of today'
                                    icon={<KeyboardArrowDown fontSize='large' />}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                
                <Grid item xs={12} sm={12} md={9}>
                    <Box className={classes.header}>
                        <Grid container spacing={2} 
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                <Search>
                                    <SearchIconWrapper>
                                    <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                    placeholder='Search Name or Email'
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                              </Grid>
                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                <Grid container>
                                  <Grid item xs={6} sm={6} md={6} >
                                    <CustomButton size='small' style={{margin: '6px', textAlign: 'start', width: '115px', display: 'flex', alignItems: 'center'}}  className={classes.customButton}>
                                      <Avatar alt='Remy Sharp' src={send} className={classes.buttonImage}/>
                                          <span>Message</span>
                                    </CustomButton>
                                  </Grid>
                                  <Grid item xs={6} sm={6} md={6} style={{textAlign: 'end'}} >
                                    <CustomButton size='small' style={{margin: '6px 15px', textAlign: 'end', display: 'flex', alignItems: 'center'}}  className={classes.customButton}>
                                      <Avatar alt='Remy Sharp' src={download} className={classes.buttonImage}/>
                                      CSV
                                    </CustomButton>
                                  </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} xl={6} className={classes.alignEnd}>
                                <CustomButton size='small' style={{margin: '8px 2px'}} className={classes.customButton}>
                                        Acitve
                                </CustomButton>
                                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                                        New
                                </CustomButtonWhite>
                                <CustomButtonWhite size='small' className={classes.customButtonWhite}>
                                        Cancelled
                                </CustomButtonWhite>
                                <CustomButtonWhite size='small' style={{ height: '40px', margin: '0px 4px', padding: "0px 20px" }}>
                                    <Avatar alt='Remy Sharp' src={filter} sx={{ width: 20, height: 16, display: 'inline-flex', alignItems: 'center'}}/>
                                        Filters - 1
                                </CustomButtonWhite>
                                <Link to="#" className={classes.linkBtn} sx={{float:'right' }}>Clear all</Link>
                            </Grid>
                        </Grid>
                    </Box>
                    
                    <Box className={classes.header}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} style={{textAlign: 'end'}}>
                                <React.Fragment>
                                <Button onClick={toggleDrawer('right', true)}>
                                    <Avatar alt='Remy Sharp' src={gear} sx={{ width: 20, height: 20, float:'right' }}/>
                                </Button>
                                <Drawer
                                    anchor={'right'}
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}
                                >
                                    {list('right')}
                                </Drawer>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    </Box>
                    
                    <Box className={classes.header}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                            <Box sx={{ width: '100%' }}>
                                <Paper sx={{ width: '100%', mb: 2 }}>
                                  <EnhancedTableToolbar numSelected={selected.length} />
                                  <TableContainer>
                                    <Table
                                      sx={{ minWidth: 750 }}
                                      aria-labelledby="tableTitle"
                                      size={dense ? 'small' : 'medium'}
                                    >
                                      <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                      />
                                      <TableBody>
                                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                           rows.slice().sort(getComparator(order, orderBy)) */}
                                        {stableSort(rows, getComparator(order, orderBy))
                                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                          .map((row, index) => {
                                            const isItemSelected = isSelected(row.id);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                              <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                              >
                                                <TableCell padding="checkbox">
                                                  <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                      'aria-labelledby': labelId,
                                                    }}
                                                  />
                                                </TableCell>
                                                <TableCell
                                                  component="th"
                                                  id={labelId}
                                                  scope="row"
                                                  padding="none"
                                                >
                                                  {row.name}
                                                </TableCell>
                                                <TableCell align="center">{row.email}</TableCell>
                                                <TableCell align="center">{row.currentTier}</TableCell>
                                                <TableCell align="center">{row.lifeTime}</TableCell>
                                                <TableCell align="center">{row.joinDate}</TableCell>
                                                <TableCell align="center">{row.cancelDate}</TableCell>
                                                <TableCell align="center">{row.accessExpiration}</TableCell>

                                              </TableRow>
                                            );
                                          })}
                                        {emptyRows > 0 && (
                                          <TableRow
                                            style={{
                                              height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                          >
                                            <TableCell colSpan={6} />
                                          </TableRow>
                                        )}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                  <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                  />
                                </Paper>
                                <FormControlLabel
                                  control={<Switch checked={dense} onChange={handleChangeDense} />}
                                  label="Dense padding"
                                />
                              </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    
                    <Box className={classes.header}>
                        <Card>
                            <CardContent  className={classes.cardContent}>
                                <Grid container>
                                    <Grid item xs={2} sm={2} md={2} style={{padding: '16px 0px 0px 16px'}} justifyContent='center' alignItems='center'>
                                        <Avatar
                                            alt='Remy Sharp'
                                            src='/static/images/avatar/1.jpg'
                                            sx={{ width: 30, height: 30 }} display="inline"
                                        />
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={10} style={{padding: '16px 0px 0px 6px'}}  justifyContent='center' alignItems='center'>
                                        <Typography variant='subtitle1' display="inline">
                                            Creator
                                        </Typography>
                                        <div style={{padding: '4px 0px'}} className={classes.subTitle}>Your pantpoethu for 19 months</div>
                                        <div style={{padding: '0px 0px 4px 0px'}} className={classes.subTitle}>No Reward</div>
                                    </Grid>
                                </Grid>
                                <Divider style={{margin: '6px 0px'}}/>
                                <Grid item xs={12} sm={12} md={12}>
                                  <Box>
                                    <Grid container justifyContent="space-between" alignItems="center">
                                      <Grid item xs={6} sm={6} md={6} style={{textAlign: 'start'}}>
                                        <CustomButton size='small' style={{ color: '#fff', height: '36px', margin: '6px', display: 'flex', alignItems: 'center' }}>
                                            <Avatar alt='Remy Sharp' src={send} sx={{ width: 20, height: 18, display: 'inline-flex' }}/>
                                                Message
                                        </CustomButton>
                                      </Grid>
                                      <Grid item xs={6} sm={6} md={6} style={{textAlign: 'end'}}>
                                        <CustomButton size='small' style={{ color: '#fff', height: '36px', margin: '6px',  display: 'flex', alignItems: 'center' }}>
                                            <Avatar alt='Remy Sharp' src={more} sx={{ width: 20, height: 18, display: 'inline-flex' }}/>
                                                More
                                        </CustomButton>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className={classes.header}>
                        <Card className='card'>
                            <CardContent className='cardcontent'>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}  justifyContent='center' alignItems='center'>
                                        <Typography variant='subtitle1' display="inline" style={{fontWeight: "bold"}}>
                                            ADDITIONAL DETAILS
                                        </Typography>
                                        <Box style={{padding: '4px', fontWeight: "bold"}} className={classes.addition}>:D</Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className={classes.header}>
                        <Card>
                            <CardContent  className={classes.cardContent}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} style={{padding: '16px 0px 0px 16px'}} justifyContent='center' alignItems='center'>
                                        <Typography variant='subtitle1' display="inline" style={{fontWeight: "bold"}}>
                                            CONTACT INFORMATION
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider style={{margin: '6px 0px'}}/>
                                <Grid container style={{margin: '6px 0px'}}>
                                    <Grid item xs={6} sm={6} md={6} justifyContent='center' alignItems='center' textAlign="center">
                                        <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                                            Email Address
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} justifyContent='center' alignItems='center' textAlign="center">
                                        <Link to="#" className={classes.linkBtn}>COPY</Link>
                                    </Grid>
                                </Grid>
                                <Grid container style={{margin: '6px 0px'}}>
                                    <Grid item xs={12} sm={12} md={12} justifyContent='center' alignItems='center' textAlign="center">
                                        <Typography variant='subtitle1' display="inline" className={classes.subTitle}>
                                            sample@gmail.com
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className={classes.header}>
                        <Card>
                            <CardContent  className={classes.cardContent}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} style={{padding: '16px 0px 0px 16px'}} justifyContent='center' alignItems='center'>
                                        <Typography variant='subtitle1' display="inline" style={{fontWeight: "bold"}}>
                                            PAYMENT HISTORY
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider style={{margin: '6px 0px'}}/>
                                <Grid container style={{margin: '6px 0px'}}>
                                    <Grid item xs={12} sm={12} md={12} justifyContent='center' alignItems='center' textAlign="center">
                                        <TableContainer component={Paper} className={classes.tableContainer}>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell className={classes.tableCell}>CHARGE DATE</TableCell>
                                                        <TableCell className={classes.tableCell} align="center">AMT</TableCell>
                                                        <TableCell className={classes.tableCell} align="center">STATUS</TableCell>
                                                        <TableCell className={classes.tableCell} align="center"></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                {rowSamples.map((row) => (
                                                    <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell className={classes.tableCell} component="th" scope="row">
                                                        {row.date}
                                                    </TableCell>
                                                    <TableCell className={classes.tableCell} align="center">{row.amt}</TableCell>
                                                    <TableCell className={classes.tableCell} align="center">{row.status}</TableCell>
                                                    <TableCell className={classes.tableCell} align="center"> <Link to="#" className={classes.linkBtn}>REFUND</Link></TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                                <Divider style={{ margin: '6px 0px' }} />
                                <Grid container>
                                  <Grid item xs={12} sm={12} md={12} style={{padding: '16px'}} justifyContent='center' alignItems='center'>
                                      <Typography variant='subtitle1'>
                                          Showing more 3 more recent bills.
                                      </Typography>

                                      <Link to="#" className={classes.linkBtn} sx={{float:'right'}}>See all payment history</Link>
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

export default RSManager