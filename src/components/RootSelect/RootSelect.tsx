import React, { useEffect } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../api';

function RootSelect() {
  // const dispatch = useDispatch();
  const getRoots = (rootUrl: string) => {
    fetch(rootUrl).then(data => data).then(data => data);
  };

  useEffect(() => {
    getRoots(baseUrl);
  });

  return (
    <Select>
      {}
    </Select>
  );
}

export default RootSelect;
