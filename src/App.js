import { Route, Routes } from "react-router-dom";
import create from "zustand";
import { persist } from "zustand/middleware";
import './App.css';
import Login from './components/login/login';
import Logout from "./components/login/logout";
import ProtectedRoute from "./components/ProtectedRoute";
import NewTodoPage from "./components/todos/NewTodoPage";
import TodoMasonry from "./components/todos/todoMasonry";
import Todos from "./components/todos/todos";
import WelcomePage from "./components/Welcome";

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
        <Route index element={<WelcomePage UserName={UserName} />} />
        <Route path="/todos" element={<ProtectedRoute isAuthenticated={UserName} />}>
          <Route index element={<Todos BodyComponent={<TodoMasonry />} />} />
          <Route path="new" element={<Todos BodyComponent={<NewTodoPage />} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<ProtectedRoute isAuthenticated={UserName}><Logout /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
