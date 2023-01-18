import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import Table from './table';
import stringifyProps from '../helpers/stringify-props';
import SelectField, { Option } from './select-field';
import type Brand from '../types/brand';

const BrandsToOption = ({ id, title }: Brand): Option => ({
  value: id,
  text: title,
});

const ALL_BRANDS_ID = '-1';
const ALL_BRANDS_TITLE = 'All cars';
class App {
  private htmlElement: HTMLElement;

  private carsCollection!: CarsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
     this.carsCollection = new CarsCollection({
      cars,
      brands,
      models,
    });
  }

  initialize = (): void => {
    const carTable = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'ID',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina',
        year: 'Metai',
      },
      rowsData: this.carsCollection.allCars.map(stringifyProps),
    });

    const selectField = new SelectField({
      options: [
        { text: ALL_BRANDS_TITLE, value: ALL_BRANDS_ID },
        ...this.carsCollection.Brand.map(BrandsToOption),
      ],
      onChange: (_, brandId, { text: brandTitle }) => {
       const newCar = brandId === ALL_BRANDS_ID
       ? this.carsCollection.allCars
       : this.carsCollection.getByBrandId(brandId);

       carTable.updateProps({
        rowsData: newCar.map(stringifyProps),
        title: brandTitle,
       });
      },
    });

    const container = document.createElement('div');
    container.className = 'container my-5 d-flex flex-column gap-3';
    container.append(
      selectField.htmlElement,
      carTable.htmlElement,
      );

    this.htmlElement.append(container);
  };
}

export default App;
