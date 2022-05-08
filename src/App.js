import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddItem from './Page/AddItem/AddItem';
import Allitems from './Page/AllItems/Allitems';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home/Home';
import SingleItem from './Page/singleItem/SingleItem';
import './App.css'
import Login from './Page/Login/Login';
import RequirAuth from './Page/Requirauth/RequirAuth';
import SignIn from './Page/Signin/SignIn';
import 'react-toastify/dist/ReactToastify.css';
import MyItem from './Page/MyItem/MyItem';
import AddMyItem from './Page/Addmyitem/AddMyItem';
import NotFound404 from './Page/Notfound404/NotFound404';
import Blog from './Page/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myitem" element={<MyItem></MyItem>} />

          <Route path="/allitems" element={
            <RequirAuth>
              < Allitems />
            </RequirAuth>

          } />
          <Route path="/singleItem/:id" element={
            <RequirAuth>
              < SingleItem></SingleItem>
            </RequirAuth>
          } />


          <Route path="/addItem" element={
            <RequirAuth>
              <AddItem></AddItem>
            </RequirAuth>

          } />
          <Route path="/addMyItem" element={
            <RequirAuth>
             <AddMyItem></AddMyItem>
            </RequirAuth>

          } />

          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignIn></SignIn>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="*" element={<NotFound404></NotFound404>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;