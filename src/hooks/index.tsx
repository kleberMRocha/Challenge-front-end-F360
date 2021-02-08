import React from 'react';
import { AuthProvider } from './authContext';


const ContextWrapper: React.FC = ({ children }) => (
  <AuthProvider>
       {children}
  </AuthProvider>
);

export default ContextWrapper;