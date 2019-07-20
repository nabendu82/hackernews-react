import React from 'react';
import { withLogout } from '@8base/react-sdk';

const LogoutButton = ({ logout }) => (
  <button onClick={() => logout()}>logout</button>
);

export default withLogout(LogoutButton);