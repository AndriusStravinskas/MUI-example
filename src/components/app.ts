import CarsCollection, { CreateCarProps } from '../helpers/cars-collection';
import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import Table, { TableProps, TableRowData } from './table';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import SelectField, { Option, SelectFieldProps } from './select-field';
import type Brand from '../types/brand';
import CarJoined from '../types/car-joined';
import CarForm, { FormValues } from './car-form';

const BrandsToOption = ({ id, title }: Brand): Option => ({
  value: id,
  text: title,
});

const ALL_BRANDS_ID = '-1';
const ALL_BRANDS_TITLE = 'Visos automobiliai';
class App {
  private htmlElement: HTMLElement;

  private selectedBrandId: string;
  private editedCarId: string | null;

  private carsCollection!: CarsCollection;
  private carsTable: Table<StringifiedObject<CarJoined>>;
  private carForm: CarForm;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) {
      throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);
    }

    this.htmlElement = foundElement;
    this.selectedBrandId = ALL_BRANDS_ID;
    this.editedCarId = null;
    this.carsCollection = new CarsCollection({
      cars,
      brands,
      models,
    });

    this.carsTable = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'ID',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina',
        year: 'Metai',
      },
      rowsData: this.carsCollection.allCars.map(stringifyProps),
      editedCarId: this.editedCarId,
      onDelete: this.handleCarDelete,
      onEdit: this.handleCarEdit,
    });

    this.carForm = new CarForm({
      title: 'Sukurti automobilį',
      submitBtnText: 'Sukurti',
      values: {
        brand: '',
        model: '',
        price: '',
        year: '',
      },
      onSubmit: this.handleCarCreate,
    });
  }

  private handleCarDelete = (carId: string): void => {
    this.carsCollection.deleteCarById(carId);
    this.update();
  };

  private handleBrandChange: SelectFieldProps['onChange'] = (_, brandId) => {
    this.selectedBrandId = brandId;
    this.update();
  };

  private handleCarCreate = ({
    brand,
    model,
    price,
    year,
  }: FormValues): void => {
    const carProps: CreateCarProps = {
      brandIds: brand,
      modelId: model,
      price: Number(price),
      year: Number(year),
    };

    this.carsCollection.add(carProps);
    this.update();
  };

  private handleCarEdit: TableProps<TableRowData>['onEdit'] = (carId) => {
    const CarIsAlreadyEdited = this.editedCarId === carId;
    this.editedCarId = CarIsAlreadyEdited ? null : carId;
    this.update();
  };

  public initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-5 d-flex flex-column gap-3';

    const uxContainer = document.createElement('div');
    uxContainer.className = 'd-flex justify-content-center gap-3 align-items-start';

    const selectField = new SelectField({
      options: [
        { text: ALL_BRANDS_TITLE, value: ALL_BRANDS_ID },
        ...this.carsCollection.Brand.map(BrandsToOption),
      ],
      onChange: this.handleBrandChange,
    });

    uxContainer.append(
      this.carsTable.htmlElement,
      this.carForm.htmlElement,
      );

    container.append(selectField.htmlElement, uxContainer);
    this.htmlElement.append(container);
  };

  public update = () => {
    const doSelectAllCars = this.selectedBrandId === ALL_BRANDS_ID;
    const carIsBeingEdited = this.editedCarId !== null;

    const selectedCars = doSelectAllCars
        ? this.carsCollection.allCars
        : this.carsCollection.getByBrandId(this.selectedBrandId);

    const brandTitle = doSelectAllCars
        ? ALL_BRANDS_TITLE
        : this.carsCollection.getCarById(this.selectedBrandId).title;

    this.carsTable.updateProps({
      title: brandTitle,
      rowsData: selectedCars.map(stringifyProps),
      editedCarId: this.editedCarId,
    });

    this.carForm.updateProps({
      title: carIsBeingEdited ? 'Atnaujinti automobilį' : 'Sukurti automobilį',
      submitBtnText: carIsBeingEdited ? 'Atnaujinti' : 'Sukurti',
    });
  };
}

export default App;
