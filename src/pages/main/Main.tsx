import React from 'react';
import { Banner } from './components/banner';
import { Recent } from './components/recent';
import { Popular } from './components/popular';
import { ApartmentSearch } from './components/apartmentSearch';
import { ApartmentTypeSearch } from './components/apartmentTypeSearch';
import { ApartmentByClass } from './components/apartmentByClass';
import { ApartmentSearchByDeveloper } from './components/apartmentSearchByDeveloper';
import { CityCollage } from './components/cityCollage';
import { FoxModal } from '../../components/popups/foxModal';

export const Main = () => {
  return (
    <>
      <Banner />
      <Recent />
      <Popular />
      <ApartmentSearch />
      <ApartmentTypeSearch />
      <ApartmentByClass />
      <ApartmentSearchByDeveloper />
      <CityCollage />
      <FoxModal />
    </>
  );
};
