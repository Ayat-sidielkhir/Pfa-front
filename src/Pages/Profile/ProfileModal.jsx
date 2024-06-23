import * as React from 'react';
import { Box, Button, Modal, IconButton, Avatar, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateProfileAction } from '../../Redux/Auth/authentication';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: "none",
  overflow: "scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateProfileAction(values));
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <p>Edit Profile</p>
              <Button type="submit">Save</Button>
            </div>
            <div className='h-[15rem]'>
              <img className="w-full h-full rounded-t-md" src="https://media.istockphoto.com/id/516180836/photo/green-rice-fild-with-evening-sky.jpg?s=612x612&w=is&k=20&c=mg8KSWu_UWdNJThL2YH6LH3j6JFuYlcwDPFzkIznXcc=" alt="Profile Background"/>
            </div>
            <div className='pl-5'>
              <Avatar
                className="transform -translate-y-24"
                sx={{ width: "10rem", height: "10rem" }}
                src=""
              />
            </div>
          </div>
          <div className='space-y-3'>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
}
