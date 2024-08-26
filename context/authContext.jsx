import { auth } from "@/firebaseConfiguration";
import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
   const unsub = onAuthStateChanged(auth,(user)=>{
    if(user){
      setIsAuthenticated(true);
      setUser(user)
    }else{
      setIsAuthenticated(false);
      setUser(null)
    }
   })
   return unsub;
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {}
  };
  const logout = async (email, password) => {
    try {
    } catch (error) {}
  };
  const register = async (email, password, username, profileUrl) => {
    try {
    } catch (error) {}
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=>{
    const value = useContext(AuthContext);
    if(!value){
        throw new Error("useAuth must be used within a AuthContextProvider");
    }
    return value;
}
