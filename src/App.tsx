// import React from 'react';
// import { Checkbox } from './components/checkbox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './constantes/routes';
// import { Button } from './components/button';
// import { Radio } from './components/radio';
// import { Select } from './components/select/Select';
import { Header } from './components/header';
import { Cookie } from './components/cookie';
import { Footer } from './components/footer';

function App() {
  // const [idx, setIdx] = React.useState(0);
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        {/* <Checkbox /> */}
        {/* <Button variant="orange">Проверить цены</Button>
        <Button variant="outlined">Проверить цены</Button> */}
        {/* <Radio />
        <Select options={['ghh', 'gghgj']} selectedIbdex={idx} setSelectedIndex={setIdx} /> */}

        {/* <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Routes> */}

        {/* <Cookie />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
