import create from "zustand";
import { persist } from "zustand/middleware";
import './App.css';
import Login from './components/login/login';

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
      <p> Hello </p>
      <Login />
      {UserName && <p>Hello, {UserName}</p>}
    </div>
  );
}

export default App;
