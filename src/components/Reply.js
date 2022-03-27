import React from 'react';
import {MainReply,ReplyInfo,ReplyDetail,Counting} from '../styled/styles.js';
import {Avatar,IconButton} from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from 'moment';

const Reply = ({id,item}) => {
	return (
		<MainReply> 
			<ReplyInfo>
				<Avatar
			        alt='Avatar'
			        src={item?.user_info.profile_image}
			      />
			      <ReplyDetail>
			      	<h4>{item?.user_info.user.name}</h4>
			        <p>
			          {item?.comment}
			        </p>
			        <IconButton aria-label='Example'>
			          <FavoriteBorderIcon fontSize='small' />{' '}
			          <Counting>3</Counting>
			        </IconButton>
			        <IconButton aria-label='Example'>
			          <ChatBubbleOutlineIcon fontSize='small' />
			        </IconButton>
			      </ReplyDetail>
			</ReplyInfo>
		</MainReply>
	);
}

export default Reply;