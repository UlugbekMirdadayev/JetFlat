import { Main } from '../pages/main/Main';
import { AboutServices } from '../pages/aboutServices/AboutServices';
import { TestModal } from '../pages/main/components/test';
import { IpotekaOrder } from '../pages/ipoteka';
import { Login } from '../pages/login';
import { ResultSearch } from '../pages/resultSearch';
import { ResidentialComplexes } from '../pages/residentialComplexes';
import { ApartmentSelect } from '../pages/apartmentSelect';

export const routes = [
  { path: '/', element: Main },
  { path: '/about-services', element: AboutServices },
  { path: '/test', element: TestModal },
  { path: '/ipoteka', element: IpotekaOrder },
  { path: '/login', element: Login },
  { path: '/result', element: ResultSearch },
  { path: '/residential-complexes', element: ResidentialComplexes },
  { path: '/apartment/:id', element: ApartmentSelect }
];
