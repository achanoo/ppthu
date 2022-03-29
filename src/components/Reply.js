import React from 'react';
import {MainReply,ReplyInfo,ReplyDetail,Counting} from '../styled/styles.js';
import {Avatar,IconButton,Badge} from '@mui/material'
import I from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
			        <IconButton
	                    aria-label="Example"
	                    onClick={() =>
	                      console.log('edit reply')
	                    }>
	                    <EditIcon fontSize="small" />
	                </IconButton>
			        <IconButton
	                    aria-label="Example"
	                    onClick={() => {
	                      console.log('delete reply')
	                    }}>
	                    <DeleteIcon fontSize="small" />
	                </IconButton>
			      </ReplyDetail>
			</ReplyInfo>
		</MainReply>
	);
}

export default Reply;