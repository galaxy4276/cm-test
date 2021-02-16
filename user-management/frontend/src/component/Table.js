import React, { useMemo } from 'react';

const UserTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: '번호',
      },
      {
        Header: '이름',
      },
      {
        Header: '직업'
      },
    ],
    []
  );

  return (
    <table>

    </table>
  );
};


export default UserTable;