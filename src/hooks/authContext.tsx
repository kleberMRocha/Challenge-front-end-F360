import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface UserData {
  email: string;
  password: string;
}

interface UserObj {
  email: string;
}

interface AuthContexData {
  user: UserObj;
  token: string;
  sigin(data: UserData): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: UserObj;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

export const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CNPJ:token');
    const user = localStorage.getItem('@CNPJ:user');

    if (token && user) {
      api.defaults.headers.token = `Bearer ${JSON.parse(token)}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const sigin = useCallback(async ({ email, password }) => {
      
    const response = await api.post('/login', { email, password });
  
    localStorage.setItem('@CNPJ:token', JSON.stringify(response.data));
    localStorage.setItem('@CNPJ:user', JSON.stringify(email));

    setData({ token:response.data, user:email });


  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CNPJ:token');
    localStorage.removeItem('@CNPJ:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, sigin, signOut, token: data.token}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContexData {
  const authcontex = useContext(AuthContext);
  if (!authcontex) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  return authcontex;
}