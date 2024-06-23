import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar, IconButton, Backdrop, CircularProgress } from '@mui/material'; 
import { uploadToCloudinary } from '../../utils/uploadToCloud';
import { createPostAction } from '../../Redux/Post/postaction';
import { useDispatch } from 'react-redux'; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none"
};

const CreatePostModal = ({ handleClose, open }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch();

  const handleSelectImage = async (event) => {
    setIsLoading(true);
      const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
      setSelectedImage(imageUrl);
      setIsLoading(false);
      formik.setFieldValue("image", imageUrl);
  };


  const handleSelectVideo =async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("image", videoUrl);
  };


  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log("formik values", values);
      dispatch(createPostAction(values))
    }
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
          <div>
            <div className='flex space-x-4 items-center'>
              <Avatar />
              <div>
                <p className='font-bold text-lg'>Code with me</p>
                <p className='text-sm'>@ayatsidielkhir</p>
              </div>
            </div>
            <textarea
              className="outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054]"
              placeholder='write caption ...'
              name="caption"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.caption}
            ></textarea>
            <div className='flex space-x-5 items-center mt-5'>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary">
                    <VideoCallIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>

            {selectedImage && (
              <div className="mt-4">
                <img className="h-[10rem]" src={selectedImage} alt="Selected" />
              </div>
            )}

            <div className='flex w-full justify-end mt-4'>
              <Button variant='contained' type="submit" sx={{ borderRadius: "1.5rem" }}>Post</Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
}

export default CreatePostModal;
