import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox({info}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
  };
  return (
    <FormControlLabel
        label={info.name}
        control={<Checkbox 
                    checked={checked} 
                    sx={{
                          color: "black",
                          '&.Mui-checked': {
                            color: "black",
                          },
                       }}
                    onChange={handleChange}
                />}
    />
  );
}
