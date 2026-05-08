import { useSelector } from "react-redux";
import md5 from "crypto-js/md5";

export default function HeaderUser() {
  const user = useSelector((state) => state.client.user);

  if (!user) return null;

  const hash = md5(user.email.trim().toLowerCase()).toString();

  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://www.gravatar.com/avatar/${hash}`}
        className="w-8 h-8 rounded-full"
      />
      <span>{user.name}</span>
    </div>
  );
}