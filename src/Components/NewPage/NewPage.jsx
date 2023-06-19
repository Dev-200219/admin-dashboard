import React, { useState } from 'react'
import './NewPage.css'
import { Avatar, Paper, Typography, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { productInputs, userInputs } from '../../formsData';

function NewPage({ type = 'users' }) {
    const [file, setFile] = useState(null);
    const message = type === 'users' ? "Add New User" : "Add New Product";
    const inputs = type === 'users' ? userInputs : productInputs;
    return (
        <Paper className='new-page-container'>
            <Typography sx={{ color: 'gray' }} variant='h3'>{message}</Typography>
            <div className='input-form-container'>
                <div className="input-form-left">
                    <Avatar sx={{ height: '150px', width: '150px' }} src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} />
                </div>
                <div className="input-form-right">
                    <div className="form-element">
                        <label style={{ display: 'flex', alignItems: 'center' }} htmlFor='file'>Upload Image: <CloudUploadIcon fontSize='large' sx={{ marginLeft: '0.5rem' }} /></label>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" id='file' placeholder='Jane Doe' style={{ display: 'none' }} />
                    </div>
                    {
                        inputs.map((input) => {
                            return (
                                <div key={input.id} className="form-element">
                                    <label>{`${input.label}: `}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Button style={{ alignSelf: 'center' }} variant='contained' color='secondary'>Send Data</Button>
        </Paper>
    )
}

export default NewPage