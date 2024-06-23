import { Card, CardActionArea } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import { CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import { IconButton } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction } from '../Redux/Post/postaction';

const PostCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const handleShowComment = () => setShowComments(!showComments);
  const dispatch = useDispatch();

  const {post} = useSelector(store=>store);

  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      data: {
        content
      }
    };
    console.log("Creating comment with data: ", reqData); // Log pour vérifier reqData
    dispatch(createCommentAction(reqData));
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* Initiales ou autre contenu */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${item.firstName} ${item.lastName}`}
        subheader={`@${item.firstName}_${item.lastName}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image} // Utilisez les accolades pour insérer des variables
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' disableSpacing>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={handleShowComment}>
            <ChatBubbleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
      {showComments && (
        <section>
          <div className='flex items-center space-x-5 mx-3 my-5'>
            <Avatar />
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCreateComment(e.target.value);
                  console.log("enter pressed ", e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder='write your comment ...'
            />
          </div>
          <Divider />
          <div className='mx-3 space-y-2 my-5 text-xs'>
            <div className='flex justify-between items-center'>
              {item.comments?.map((comment) => (
                <div  className='flex items-center space-x-5'>
                  <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>
                    {comment.user.firstName[0]}
                  </Avatar>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Card>
  );
}

export default PostCard;
