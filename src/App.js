import { Route, Routes } from "react-router-dom";
import create from "zustand";
import { persist } from "zustand/middleware";
import './App.css';
import Login from './components/login/login';
import ProtectedRoute from "./components/ProtectedRoute";

export const useStore = create(persist(
  (set, get) => ({
    UserName: "",
    setUserName: (name) => set(() => (
      { UserName: name }
    ))
  }),
  {
    name: "auth-storage", // unique name
    getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
))

function App() {
  const { UserName } = useStore();
  return (
    <div className="App">
      <Routes>
        <Route index element={<p>Hello, {UserName ? UserName : "User"}</p>} />
        <Route path="/todos" element={<ProtectedRoute isAuthenticated={UserName} />}>
          <Route index element={<p>All the elements</p>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
