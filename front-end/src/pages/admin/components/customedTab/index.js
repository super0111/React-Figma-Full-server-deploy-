import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
    backgroundColor: 'var(--background-gray)',
    borderBottom: '1px solid #e8e8e8',
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  color: 'var(--charade)',
  marginRight: theme.spacing(1),
  fontFamily: 'var(--font-family-manrope)',
  fontWeight: 400,
  '&:hover': {
    color: 'var(--black-hover)',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'var(--charade)',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#5542F6',
  },
}));

export default function CustomedTabs({handleTabs}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTabs(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs 
          value={value} 
          onChange={handleChange} 
          aria-label="ant example"
        >
          <AntTab label="All" />
          <AntTab label="New" />
          <AntTab label="Active" />
          <AntTab label="Suspended" />
        </AntTabs>
      </Box>
    </Box>
  );
}
