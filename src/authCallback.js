import React, {useEffect} from 'react';
import { withAuth, gql } from '@8base/react-sdk';
import { withApollo, compose } from 'react-apollo';

const CURRENT_USER = gql`
  query currentUser {
    user {
      id
    }
  }
`;
const SIGN_UP_USER = gql`
  mutation userSignUp($user: UserCreateInput!) {
    userSignUp(user: $user) {
      id
      email
    }
  }
`;

const AuthCallback = ({ auth, history, client }) => {
  useEffect(() => {
    const completeAuth = async () => {
      const { idToken, email } = await auth.getAuthorizedData();
      try {
        // Check if user exists, if not it'll return an error
        await client.query({
          query: CURRENT_USER,
          context: { headers: { authorization: `Bearer ${idToken}` } },
        });
      } catch {
        // If user is not found - sign them up
        await client.mutate({
          mutation: SIGN_UP_USER,
          variables: { user: { email } },
          context: { headers: { authorization: `Bearer ${idToken}` } },
        });
      }
      // After succesfull signup store token in local storage
      await auth.setAuthState({ token: idToken });
      // Redirect back to home page
      history.replace('/');
    };
    completeAuth();
  }, []);
  return <p>Please wait...</p>;
};

export default compose(withAuth,withApollo)(AuthCallback);