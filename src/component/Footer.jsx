import { useSelector } from "react-redux";

const Footer = () => {
  const users = useSelector((state) => state.users.value);
  return (
    <div>
      {users.map((user) => {
        return <p>{user.username}</p>;
      })}
    </div>
  );
};

export default Footer;
