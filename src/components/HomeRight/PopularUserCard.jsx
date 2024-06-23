import React from 'react'
import { Avatar, Button } from '@mui/material';
import { CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';


const PopularUserCard = () => {
  return (
    <div>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        action={
        <Button size='small'>
          Follow

        </Button>
        }
        title="Ayat"
        subheader="@pfa"
      />
    </div>
  )
}

export default PopularUserCard;
