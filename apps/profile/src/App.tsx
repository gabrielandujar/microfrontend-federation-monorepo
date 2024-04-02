import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Profile />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
