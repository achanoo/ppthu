import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import '../assets/style.css'
import Basic from './Basics'
import Tiers from './Tiers'
import GettingPaid from './GettingPaid'
import PageSetting from './PageSetting'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Toolbar sx={{ padding: '1%' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            variant='fullWidth'
            centered
          >
            <Tab
              label='Basics'
              {...a11yProps(0)}
              style={{ fontVariant: 'normal' }}
            />
            <Tab label='Tiers' {...a11yProps(1)} />
            {/* <Tab label='Getting Paid' {...a11yProps(2)} />
            <Tab label='Page Settings' {...a11yProps(3)} />
            <Tab label='Preview' {...a11yProps(4)} /> */}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Basic />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tiers />
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          <GettingPaid />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PageSetting />
        </TabPanel> */}
      </Box>
    </Toolbar>
  )
}
