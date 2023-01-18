import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import Table from './table';
import stringifyProps from '../helpers/stringify-props';
import SelectField, { Option } from './select-field';
import Model from '../types/model';

const ModelsToOption = ({ id, title }: Model): Option => ({
  value: id,
  text: title,
});
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
    const selectField = new SelectField({
      options: this.carsCollection.Model.map(ModelsToOption),
    });

    const carTable = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'ID',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina',
        year: 'Metai',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
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
