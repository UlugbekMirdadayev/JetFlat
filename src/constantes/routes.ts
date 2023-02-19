import { Main } from '../pages/main/Main';
import { AboutServices } from '../pages/aboutServices/AboutServices';
import { TestModal } from '../pages/main/components/test';
import { IpotekaOrder } from '../pages/ipoteka';
import { Login } from '../pages/login';
import { ResultSearch } from '../pages/resultSearch';

export const routes = [
  { path: '/', element: Main },
  { path: '/about-services', element: AboutServices },
  { path: '/test', element: TestModal },
  { path: '/ipoteka', element: IpotekaOrder },
  { path: '/login', element: Login },
  { path: '/result', element: ResultSearch }
];
