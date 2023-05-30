import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminProtect from './components/AdminProtect.jsx';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import LocationsScreen from './screens/LocationsScreen';
import EventsScreen from './screens/EventsScreen';
import PeopleScreen from './screens/PeopleScreen';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ViewContactsScreen from './screens/ViewContactsScreen.jsx';
import UserDashboard from './screens/UserDashboard.jsx';
import AdminDashboard from './screens/AdminDashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path="/locations" element={<LocationsScreen />} />
      <Route path="/events" element={<EventsScreen />} />
      <Route path="/people" element={<PeopleScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Route>
      <Route path="" element={<AdminProtect />}>
        <Route path="/viewcontacts" element={<ViewContactsScreen />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);