import './App.css';
import { Layout } from 'antd';
// import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
// import RestaurantRating from './components/RestaurantRating';

function App() {
  return (
    <Layout>
      <Layout.Header className='header'>Restaurant Ratings</Layout.Header>
      <Layout.Content className='content'>
        {/* <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/restaurant/:id' element={<RestaurantRating />} />
        </Routes> */}
        <Main />
      </Layout.Content>
      <Layout.Footer>&copy; 2022, Christian Klein</Layout.Footer>
    </Layout>
  );
}

export default App;
