import React, { useState, useEffect } from 'react';

const getUserApi = userId => {
  console.log(`userId: ${userId}`);
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          name: 'Test Jin',
          age: 30
        }),
      1000
    )
  );
};

/* eslint react/prop-types: 0 */
function Users({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId).then(response => {
      return setUser(response);
    });
  }, [userId]);

  return (
    <div>
      {!user && <p>사용자 정보 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

export default Users;
