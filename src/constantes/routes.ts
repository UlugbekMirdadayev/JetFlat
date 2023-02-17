import { Main } from '../pages/main/Main';
import { AboutServices } from '../pages/aboutServices/AboutServices';
import { TestModal } from '../pages/main/components/test';
import { IpotekaOrder } from '../pages/ipoteka';

export const routes = [
  { path: '/', element: Main },
  { path: '/about-services', element: AboutServices },
  { path: '/test', element: TestModal },
  { path: '/ipoteka', element: IpotekaOrder }
];
