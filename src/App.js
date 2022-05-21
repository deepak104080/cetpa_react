import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/style.css';
import './css/tempcss.scss';
import Header from './common/Header';
import Footer from './common/Footer';
import MenuBar  from './common/MenuBar';
import Home  from './Home';
import ToDo from './ToDo';
import FnComp from './FnComp';
import FnCompAPI from './FnCompAPI';
import GitHub from './GitHub';
import ToDoFn from './ToDoFn';
import RefFn from './RefFn';
import RefClass from './RefClass';
import EMI from './EMI';
import FormFn from './FormFn';
import Parent from './context/Parent';
import ExpenseTracker from './expense/ExpenseTracker';
import DataApp, {DataAppContext} from './DataApp';
import HOC1 from './hoc/HOC1';
import HOC2 from './hoc/HOC2';
import ContactApp from './ContactApp';
import NotFound from './common/NotFound';
import ProtectedRoute from './common/ProtectedRoute';
import Weather from './Weather';
import Login from './common/Login';
import Accounts from './secure/Accounts';
import HookLayoutEffect from './hooks/HookLayoutEffect';
import HookMemo from './hooks/HookMemo';
import ColorApp from './ColorApp';

function App() {
  const temp = useContext(DataAppContext);
  console.log('----context in app js file - ', temp)
  //context variable not accessible here

  return (
    <BrowserRouter>
        <DataApp>
          <Header/>

          <MenuBar/>
          <div className='row'>
              <div className='col-sm-12 col-lg-2 bg-warning bg-opacity-50 app-sidebar'>Left</div>
              <div className='col-sm-12 col-lg-8 bg-light'>
                <Routes>
                  <Route path='/' element = {<Home/>}/>
                  <Route path='/home' element = {<Home/>}/>
                  <Route path='/login' element = {<Login/>}/>
                  <Route path='/github' element = {<GitHub/>}/>
                  <Route path='/todo' element = {<ToDo/>}/>
                  <Route path='/fn' element = {<FnComp/>}/>
                  <Route path='/fnapi' element = {<FnCompAPI/>}/>
                  <Route path='/todofn' element = {<ToDoFn/>}/>
                  <Route path='/reffn' element = {<RefFn/>}/>
                  <Route path='/refclass' element = {<RefClass/>}/>
                  <Route path='/emi' element = {<EMI/>}/>
                  <Route path='/formfn' element = {<FormFn/>}/>
                  <Route path='/context' element = {<Parent/>}/>
                  <Route path='/expensetracker' element = {<ExpenseTracker/>}/>
                  <Route path='/hoc1' element = {<HOC1/>}/>
                  <Route path='/hoc2' element = {<HOC2/>}/>
                  <Route path='/contactapp' element = {<ContactApp/>}/>
                  <Route path='/weather' element = {<Weather/>}/>
                  <Route path='/apps' element = {<ContactApp/>}/>
                  <Route path='/data/:id' element = {<ToDoFn/>}/>
                  <Route path='/accounts' element = {
                    <ProtectedRoute>
                      <Accounts/>
                    </ProtectedRoute>
                  }/>
                  <Route path='apps'>
                    <Route path='app1' element = {<ToDo/>}/>
                    <Route path='app2' element = {<EMI/>}/>
                  </Route>
                  <Route path='/hooklayouteffect' element = {<HookLayoutEffect/>}/>
                  <Route path='/hookmemo' element = {<HookMemo/>}/>
                  <Route path='/colorapp' element = {<ColorApp/>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
              </div>
              <div className='col-sm-12 col-lg-2 bg-warning bg-opacity-50 app-sidebar'>Right</div>
          </div>
          
          <Footer/>
        </DataApp>
    </BrowserRouter>
  );
}

export default App;




// JSX - JS + HTML / Templating Mechanism (Angular, Express, Laravel, )


// Virtual DOM

// obj - one orginal copy of dom


// re-render component
// obj2 - another copy of dom
// shallow comparison and deep comparison

// list of changes - node
//render to html - implement it on actual dom

// document.getElementById.value = new value


// SPA


// Type of Component : -
// Class Component - class - React Features
// Functional Component - function - static html





// Till React 16.7 (16.8 - Hooks (jugad of react features))


// SPA - Single Page Aplication