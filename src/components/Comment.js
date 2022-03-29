import React from 'react'
import { Avatar ,IconButton,Badge} from "@mui/material";
import {CommentContent,Content,CommentDetail} from '../styled/styles.js';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from 'moment';
import Reply from './Reply';

const Comment = ({id,comment,item}) => {
	return (
		<div>
			<CommentContent>
				<Content>
					<Avatar
	                  alt='User'
	                  src={item?.user_info.profile_image}
	                />
					<CommentDetail>
					  <h4>{item?.user_info.user.name}</h4>
	                  <p>
	                    {item?.comment}
	                  </p>
	                  <IconButton aria-label='Example'>
		                  <Badge badgeContent={item?.comment_like_counts} color="error">
				            <FavoriteBorderIcon />
				          </Badge>  
	                  </IconButton>
	                  <IconButton aria-label='Example'>
	                    <ChatBubbleOutlineIcon fontSize='small' />
	                  </IconButton>
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
					</CommentDetail>
				</Content>
				<div className='commentTime'>
					{moment(item?.created_at).fromNow(true)}
				</div>
				

	        </CommentContent>
	        {item?.comment_replies && 
	        	item?.comment_replies.map((reply,index) => {
	        		return <Reply key={index} id={reply?.id} item={reply}/>
	        	})
	        }
	     </div>
	);
}

export default Comment;