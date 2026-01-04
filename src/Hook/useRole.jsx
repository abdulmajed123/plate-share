import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [roleLoading, setRoleLoading] = useState(true);
  console.log(role);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(
        ` https://plate-share-api-server-delta.vercel.app/users/${user.email}/role`
      )
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role); // admin / user
          setRoleLoading(false);
        })
        .catch((err) => {
          console.error("Role fetch error:", err);
          setRoleLoading(false);
        });
    }
  }, [user, loading]);

  return { role, roleLoading };
};

export default useRole;
