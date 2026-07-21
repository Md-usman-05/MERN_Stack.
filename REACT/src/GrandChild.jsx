import { useContext } from 'react';
import UserContext from './UserContext.jsx';

function GrandChild() {
  const userName = useContext(UserContext);
  return <h2>{userName}</h2>;
}

export default GrandChild;