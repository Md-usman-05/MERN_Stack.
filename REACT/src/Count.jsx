import { useState, useEffect } from 'react';
import './Count.css';
import UserContext from './UserContext.jsx';
import Parent from './Parent.jsx';
function Count() {
  const [count, setCount] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [lunch, setLunch] = useState('');
  const userName = 'usman';
  useEffect(() => {
    document.title = `Count:${count}`;
  }, [count]);
  return (
    <UserContext.Provider value={userName}>
      <>
        <div>
          <h1 className="count">Count: {count}</h1>
          <div className="counting">
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
          </div>
        </div>
        <h2>Phone: {mobile ? 'Android' : 'iOS'}</h2>
        <button onClick={() => setMobile(!mobile)}>Change</button>
        <h2>I ate my {lunch || 'food'} for lunch</h2>
        <input
          type="text"
          placeholder="Dal Rice"
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
        />
        <Parent name={userName} />
      </>
    </UserContext.Provider>
  );
}
export default Count;