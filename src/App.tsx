import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import AllPosts from './components/AllPosts/AllPosts';
import AllAuthors from './components/AllAuthors/AllAuthors';
import CreatePost from './components/CreatePost/CreatePost';
import styled from 'styled-components';

export const MainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100vh;
`;

function App() {
  return (
    <div className='App'>
      <MainTemplate>
        <Navigation />
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='/all-authors' element={<AllAuthors />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </MainTemplate>

    </div>
  );
}

export default App;
