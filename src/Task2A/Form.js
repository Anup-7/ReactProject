import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

function Task2A() {

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

                <div style={{ display: "flex" }}>
                    <div className=' mt-4' >
                        <label>How should we contact you?</label>
                        <Form.Select onChange={handleChange} name="contact" style={{ maxWidth: "250px" }} aria-label="Floating label select example">
                            <option>Choose option</option>
                            <option value="phone" onClick={handleChange} >Phone</option>
                            <option value="email" onClick={handleChange} >Email</option>
                        </Form.Select>
                    </div>
                    <div className=' mt-4' style={{marginLeft:"200px", maxWidth:"300px"}} >
                        {formdata.contact === "phone" &&
                            <div className='form-group'> <label>
                                Phone<br />
                                <input value={formdata.phone} name='phone' onChange={handleChange} className='form-control' />
                            </label></div> || formdata.contact === "email" &&
                            <div className='form-group'> <label>
                                Email<br />
                                <input value={formdata.email} name='email' onChange={handleChange} className='form-control' />
                            </label>
                            </div>
                        }
                    </div>
                </div>
                <Button className='mt-4' type='submit' variant="contained" onClick={handleSubmit} >Submit</Button>
            </Box>

        </>
    );
}

export default Task2A;