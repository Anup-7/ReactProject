import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

const Navigate=useNavigate()

    return (
        <>

            <AppBar sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Button onClick={()=>Navigate('task2A')}>Task2A</Button>
                    <Button onClick={()=>Navigate('task2B')}>Task2B</Button>
                    <Button onClick={()=>Navigate('task3')}>Task3</Button>
                    <Button onClick={()=>Navigate('task4')}>Task4</Button>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar