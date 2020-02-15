import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../api';

function RootSelect() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  const getRoots = async (rootUrl: string) => {
    setLoading(true);
    const response = await fetch(rootUrl);
    if (response.ok) {
      setLoading(false);
      const json = await response.json();
      setData(json);
      console.log(Object.keys(json));
    } else {
      setLoading(false);
      console.log('HTTP Error: ', response.statusText);
    }
  };

  useEffect(() => {
    console.log('Getting baseURL');
    getRoots(baseUrl);
  }, []);

  return (
    <Select loading={loading} style={{width: '150px'}}>
      {Object.keys(data).map(item => <Select.Option key={item}>{item}</Select.Option>)}
    </Select>
  );
}

export default RootSelect;
