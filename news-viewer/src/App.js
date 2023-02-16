import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {  
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=00fa3476cfad483c8955e0e4b890cd5d')
      setData(response.data)
    } catch (e) { 
      console.log(e)
    } 
  }
  useEffect(()=>{ 
    // 화면이 갱신되면 호출됨.]
    if (data != null) {
      console.log('data = ' + JSON.stringify(data));
    }
  })

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea cols={100} rows={100} value={JSON.stringify(data,null,2)} readOnly={true} />} 
    </div>
  );
};

export default App;