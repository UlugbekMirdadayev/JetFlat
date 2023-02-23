import React from 'react';
import { FoxModal } from '../../components/popups/foxModal';
import { ApartmentByClass } from './components/apartmentByClass';
import { ApartmentSearch } from './components/apartmentSearch';
import { ApartmentSearchByDeveloper } from './components/apartmentSearchByDeveloper';
import { ApartmentTypeSearch } from './components/apartmentTypeSearch';
import { Banner } from './components/banner';
import { CityCollage } from './components/cityCollage';
import { Popular } from './components/popular';
import { Recent } from './components/recent';

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
