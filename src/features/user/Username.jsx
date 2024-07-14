import { useSelector } from 'react-redux';
import { getUser } from './userSlice.js';

function Username() {
  const { userName } = useSelector(getUser);

  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold sm:block">{userName}</div>
  );
}

export default Username;
