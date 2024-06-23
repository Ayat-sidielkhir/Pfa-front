import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { Button, Avatar, Box, Tab, Card } from '@mui/material';
import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PostCard from '../../Post/PostCard';
import UserReelCard from '../../Reels/UserReelCard';
import ProfileModal from './ProfileModal';

const tabs = [
  { value: 'post', name: 'Post' },
  { value: 'reels', name: 'Reels' },
  { value: 'saved', name: 'Saved' },
  { value: 'repost', name: 'Repost' },
];
const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost=[1,1,1];

const Profile = () => {
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpenFileModal= () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [value, setValue] = React.useState('post'); // Set initial value to 'post'

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='flex py-10'>
      <SideBar />
      <div className='w-[70%] ml-auto'>
        <div className='rounded-md'>
          <div className='h-[15rem]'>
            <img
              className="w-full h-full rounded-t-md"
              src="https://media.istockphoto.com/id/516180836/photo/green-rice-fild-with-evening-sky.jpg?s=612x612&w=is&k=20&c=mg8KSWu_UWdNJThL2YH6LH3j6JFuYlcwDPFzkIznXcc="
              alt=""
            />
            <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
              <Avatar className="transform -translate-y-24" sx={{ width: '10rem', height: '10rem' }} />
              {true ? (
                <Button sx={{ borderRadius: '20px' }} variant="outlined" onClick={handleOpenFileModal}>
                  Edit profile
                </Button>
              ) : (
                <Button variant="outlined" sx={{ width: '10rem', height: '10rem' }}>
                  Follow
                </Button>
              )}
            </div>
            <div className='p-5'>
              <div className='py-1 font-bold text-x1'>
                <h1>Pfa</h1>
                <p>@Pfa</p>
              </div>

              <div className='flex gap-2 items-center py-3'>
                <span>31 posts</span>
                <span>99 followers</span>
                <span>1000 followings</span>
              </div>
              <div>
                <p>heeeeeeeeeeeeeeeeeeeeeeeeey</p>
              </div>
            </div>
            <section>
              <Box sx={{ width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'divider' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      {tabs.map((item) => (
                        <Tab key={item.value} label={item.name} value={item.value} />
                      ))}
                    </TabList>
                  </Box>
                  <TabPanel value="post">
                    <div className='flex justify-center'>
                      <div className='space-y-5 w-[70%] my-10'>
                        {posts.map((item, index) => (
                          <div key={index} className="border borders-slate-100 rounded-md">
                            <PostCard />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="reels">
                    <div className='flex  justify-center flex-wrap gap-2 my-10'>
                      {reels.map((item, index) => (
                        <UserReelCard key={index} />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel value="saved">
                  <div className='flex  justify-center flex-wrap gap-2 my-10'>
                      {savedPost.map((item, index) => (
                        <PostCard key={index} />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel value="repost">
                    Repost Content
                  </TabPanel>
                </TabContext>
              </Box>
            </section>
          </div>
        </div>
      </div>
     <ProfileModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Profile;