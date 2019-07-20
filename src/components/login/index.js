import React from "react";
import { withAuth, gql } from "@8base/react-sdk";
import { Query } from 'react-apollo';
import LogoutButton from "./logout";

const USER_INFO = gql`
  query UserQuery {
    user {
      firstName
    }
  }
`
const Login = ({ auth: { isAuthorized, authorize } }) => {
  // If user is authorized, fetch user information and display
  if (isAuthorized) {
    return <Query query={USER_INFO}>
      {({ data, loading }) => (
        <div>
          {!loading && <p>{data && data.user.firstName} </p>} <LogoutButton/>
        </div>
      )}
    </Query>;
  }

  return (
    <div>
      <button onClick={() => authorize()}>Login</button>
    </div>
  );
};
export default withAuth(Login);