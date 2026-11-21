import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getApiBase } from '../config/api';

export type UserRole = 'HOD' | 'Teacher' | 'Student' | 'Admin' | 'Guard';

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  full_name: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (payload: { username: string; email: string; password: string; role: UserRole; full_name?: string }) => Promise<{ success: boolean; error?: string; message?: string }>;
  logout: () => void;
  switchRoleDemo?: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'eagle_eye_auth_token';
const USER_KEY = 'eagle_eye_auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore stored session on mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error('Failed restoring auth session', e);
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const apiBase = getApiBase();
      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return { 
          success: false, 
          error: errorData.detail || 'Invalid username or password. Please try again.' 
        };
      }

      const data = await res.json();
      const accessToken = data.access_token;
      const userInfo: AuthUser = data.user;

      setToken(accessToken);
      setUser(userInfo);
      localStorage.setItem(TOKEN_KEY, accessToken);
      localStorage.setItem(USER_KEY, JSON.stringify(userInfo));

      return { success: true };
    } catch (err: any) {
      return { 
        success: false, 
        error: err.message || 'Unable to connect to authentication server.' 
      };
    }
  };

  const register = async (payload: { username: string; email: string; password: string; role: UserRole; full_name?: string }): Promise<{ success: boolean; error?: string; message?: string }> => {
    try {
      const apiBase = getApiBase();
      const res = await fetch(`${apiBase}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return {
          success: false,
          error: errorData.detail || 'Registration failed. Please check your details.'
        };
      }

      const data = await res.json();
      return { success: true, message: data.message };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || 'Unable to connect to registration service.'
      };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
