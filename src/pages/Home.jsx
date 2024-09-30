import React, { useState, useEffect } from 'react';

const Home = () => {
    const [isdark, setIsdark] = useState(
      JSON.parse(localStorage.getItem('isdark'))
    );
    useEffect(() => {
      localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark]);
    return (
        <>
            <div>
<input
  type="checkbox"
  value="synthwave"
                    className="toggle theme-controller"
  checked={isdark}
  onChange={() => setIsdark(!isdark)}
  />
            </div>
            <div>Home</div>
        </>
    );
};

export default Home;
