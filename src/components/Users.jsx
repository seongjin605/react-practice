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
    async function fetchUser() {
      const user = await getUserApi(userId);
      console.log(user);
      setUser(user);
    }
    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>사용자 정보 가져오는 중...</p>;
  }
  return (
    <div>
      <p>{`name is ${user.name}`}</p>
      <p>{`age is ${user.age}`}</p>
    </div>
  );
}

export default Users;
