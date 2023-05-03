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
import { Estates } from '../pages/estates';
import { AllDistrict } from '../pages/allDistrict';

export const routes = [
  { path: '/', element: Main },
  { path: '/about', element: AboutServices },
  { path: '/test', element: TestModal },
  { path: '/mortgage', element: IpotekaOrder },
  { path: '/login', element: Login },
  { path: '/search-result', element: ResultSearch },
  { path: '/residential-estates', element: Estates },
  { path: '/residential-estates/:id', element: ResidentialComplexes },
  { path: '/residential-estates/:id/choice-flat', element: ApartmentSelect },
  { path: '/booking/:id', element: Booking },
  { path: '/library', element: Library },
  { path: '/library/classes', element: Classes },
  { path: '/library/classes/comforts', element: Comforts },
  { path: '/districts', element: AllDistrict },
  { path: '/districts/:id', element: Regions },
  { path: '/developers', element: Developers }
];
