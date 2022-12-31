import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, removePostWithFilterMethod, RootState } from '../../redux/PostSlice';
import styled from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #646cff;
  color: #f9f9f9;
  max-width: 50%;
  align-items: flex-start;
  padding: 32px;
  border-radius: 4px;
  transition: background-color, .4s;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover {
    background-color: #5159ff;
  }

  .wrapper-with-buttons {
    display: flex;
    grid-gap: 8px;
  }
`;

const AllPosts = () => {
  const posts = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleRemovePost = (i: number) => {
    dispatch(removePost({ i }));
  };

  const handleRemovePostWithFilterMethod = (id: string) => {
    dispatch(removePostWithFilterMethod({ id }));
  };

  return (
    <>
      {posts.map(({ title, id, content, author }, i) => (
        <PostWrapper key={id}>
          <b>{i}</b>
          <b>{author}</b>
          <h2>{title}</h2>
          <p>{content}</p>
          <div className='wrapper-with-buttons'>
            <button onClick={() => handleRemovePost(i)}>Remove with slice</button>
            <button onClick={() => handleRemovePostWithFilterMethod(id)}>Remove with filter</button>
          </div>
        </PostWrapper>
      ))}
    </>
  );
};

export default AllPosts;