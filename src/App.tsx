import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/chat"  element={<Chat />}/>
      </Routes>
    </Layout>
  )
}

export default App

