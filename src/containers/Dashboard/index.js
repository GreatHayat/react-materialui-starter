import React from 'react';
import { useQuery } from 'react-query';
import Dashboard from '../../pages/Dashboard';
import { getUsers } from '../../state/queryFunctions';
import { keys } from '../../state/queryKeys';

const DashboardContainer = () => {
  const { data: users, isLoading } = useQuery(keys.users, getUsers);

  return (
    <>{isLoading ? <p>Loading...</p> : <Dashboard name="Hi" users={users} />}</>
  );
};

export default DashboardContainer;
