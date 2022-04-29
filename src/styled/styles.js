/** @format */

import React from "react";
import styled from "styled-components";

export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3px;
  marginbottom: 1.3rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: start;
  gap: 16px;
  flex-grow: 1;
`;

export const CommentDetail = styled.div`
    text-align: start;
    width:100%;
    margin-bottom : 12px;
    & h4: {
      margin-bottom: 10px;
    }
    ,
    & p: {
      font-size: 0.978rem;
    },
    width: -webkit-fill-available;
`;
export const MainReply = styled.div`
  margin-left: 3.75rem;
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
`;

export const ReplyBoxDiv = styled.div`
  margin-left: 3.75rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  gap: 16px;

  width: -webkit-fill-available;
`;

export const ReplyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ReplyDetail = styled.div`
  text-align: start;
  width: 100%;
  & h4: {
    margin-bottom: 10px;
  }
  ,
    & p: {
    font-size: 0.978rem;
  }
`;

export const Counting = styled.span`
  display: flex;
  vertical-align: flex-end;
  font-size: 1rem;
  color: #000;
`;

export const Wrapper = styled.div`
  minheight: 100vh;
  diplay: grid;
  place-items: center;
`;

export const CusFormInput = styled.div`
  text-align: start;
  padding: 10px 10px;
  width:100%;
  & label: {
    color: #333333;
    padding: 18px 0px;
    margin-bottom: 8px;
  }
  ,
  & .inputfield: {
    margin: 0.5rem 0px;
    background: rgb(245, 244, 242);
  },
  
`;
export const CusOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
