import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }

  };
  return (
    <form className="space-y-4" onSubmit={submitHandler}>
      <div>
        <label htmlFor="email" className="text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="text-gray-800">Password</label>
        <input
          type="password"
          id="password"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          disabled={isLoading}
        >
          Login
        </button>
        <Link to="/register" className="text-gray-700 hover:text-gray-500 text-sm pl-4">
          Register New Account
        </Link>
      </div>
      {isLoading && <p>Loading...</p>}
    </form>
  );
}
