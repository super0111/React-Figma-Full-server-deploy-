import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';


export default function CutomedCheckBox({isChecked, label, idx, checkedItem}) {
  const handleChange = (event) => {
    checkedItem(idx);
  };
  return (
    <div style={{paddingBottom: 24}}>
      <FormControlLabel
              label={<Typography 
                style={{
                  fontFamily: 'var(--font-family-pp_telegraf-regular) !important',
                  fontSize: 'var(--font-size-17) !important',
                  fontWeight: 400,
                }}>
                  {label}</Typography>}
              control={<Checkbox 
                          checked={isChecked} 
                          sx={{
                                color: "#84818A",
                                '&.Mui-checked': {
                                  color: "#5542F6",
                                },
                            }}
                          onChange={handleChange}
                      />}
          />
    </div>
    
  );
}
