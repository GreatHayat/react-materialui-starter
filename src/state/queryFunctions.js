import http from '../service/http';

export const getUsers = async () => {
  const { data } = await http.get('https://jsonplaceholder.typicode.com/users');
  return data;
};
