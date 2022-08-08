import React from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
function Jasper() {

	return (
<>
	<div > 
	  <h1 style = {{
		  textTransform:'uppercase',
		  textAlign:'center',
		  color:'#a9def9',
	}}> stylechar </h1>
	</div>
	
	<div style = {{
		fontSize:"25px",
		background:"gray",
	}}>stephen the god </div>
		<Button variant="contained">Hello World</Button>
		<Checkbox  defaultChecked />
		<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>


</>







	) 



}
export default Jasper;
