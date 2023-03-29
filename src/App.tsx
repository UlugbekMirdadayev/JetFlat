import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './constantes/routes';
import { Header } from './components/header';
// import { Cookie } from './components/cookie';
import { Footer } from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Routes>
        {/* <Cookie /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
