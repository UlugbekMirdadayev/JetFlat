import { Main } from '../pages/main/Main';
import { AboutServices } from '../pages/aboutServices/AboutServices';
import { TestModal } from '../pages/main/components/test';
import { IpotekaOrder } from '../pages/ipoteka';
import { Login } from '../pages/login';
import { ResultSearch } from '../pages/resultSearch';
import { ResidentialComplexes } from '../pages/residentialComplexes';
import { ApartmentSelect } from '../pages/apartmentSelect';
import { Booking } from '../pages/booking';
import { Classes, Comforts, Library, Regions } from '../pages/library';
import { Developers } from '../pages/developers';

export const routes = [
  { path: '/', element: Main },
  { path: '/about-services', element: AboutServices },
  { path: '/test', element: TestModal },
  { path: '/ipoteka', element: IpotekaOrder },
  { path: '/login', element: Login },
  { path: '/result', element: ResultSearch },
  { path: '/residential-complexes', element: ResidentialComplexes },
  { path: '/apartment/:id', element: ApartmentSelect },
  { path: '/booking/:id', element: Booking },
  { path: '/library', element: Library },
  { path: '/library/classes', element: Classes },
  { path: '/library/classes/comforts', element: Comforts },
  { path: '/regions', element: Regions },
  { path: '/regions/:id', element: Regions },
  { path: '/developers', element: Developers }
];
