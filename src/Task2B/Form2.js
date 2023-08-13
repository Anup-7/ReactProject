import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

function Form2() {

    const [formdata, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        contact: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        setFormData({
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            contact: ""
        })
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <Box borderRadius={"5px"} border={"0.25px solid #ccc"} margin={"10px auto"} padding={"100px"} justifyContent={"center"} display={"flex"} flexDirection={'column'} maxWidth={"1000px"}>
                <Typography >First Name</Typography>
                <TextField value={formdata.firstname} variant="outlined" onChange={handleChange} name='firstname' placeholder='First Name' type='text'></TextField>

                <Typography sx={{ mt: 3 }}>Last Name</Typography>
                <TextField value={formdata.lastname} onChange={handleChange} name='lastname' placeholder='Last Name' type='text'></TextField>

                <FormControl>
                    <FormLabel id="row-label" style={{marginTop:"5px" ,color:"black"}}>How should we contact you?</FormLabel>

                    <RadioGroup
                        row
                        aria-labelledby="row"
                        name="contact"
                        style={{ marginTop: "2px" }}
                    >
                        <FormControlLabel value="phone" onClick={handleChange} control={<Radio />} label="Phone" />
                        <FormControlLabel value="email" onClick={handleChange} control={<Radio />} label="Email" />

                        <div className='mt-2' style={{marginLeft:"200px", maxWidth:"300px"}}>
                            {formdata.contact === "phone" &&
                                <div className='form-group'> <label> Phone
                                    <br/>
                                    <TextField variant="outlined"  value={formdata.phone} name='phone'  onChange={handleChange}  />
                                </label></div> || formdata.contact === "email" &&
                                <div className='form-group'> <label>
                                    Email<br />
                                    <TextField value={formdata.email} name='email' onChange={handleChange} />
                                </label>
                                </div>
                            }
                        </div>
                    </RadioGroup>
                </FormControl>
                <Button className="mt-2" type='submit' variant="contained" onClick={handleSubmit} >Submit</Button>
            </Box>

        </>
    );
}
export default Form2
