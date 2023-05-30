import { useSelector } from "react-redux"

export default function UserDashboard() {
    const {userInfo } = useSelector((state) => state.auth);
  return (
    <div>
        <p>Name:  {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
    </div>
  )
}
