import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPost, Post } from '../../redux/PostSlice';

const CreatePost = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Post>();

  const handleAddPost = ({ title, content }: Post) => {
    dispatch(addPost({ title, content }));
  };

  return (
    <>
      <div>CreatePost</div>
      <form onSubmit={handleSubmit(handleAddPost)}>
        <input {...register('title')} />
        <input {...register('content', { required: true })} />
        {/*{errors.exampleRequired && <span>This field is required</span>}*/}
        <input type='submit' />
      </form>
    </>
  );
};

export default CreatePost;