import type Brand from '../types/brand';
import type Car from '../types/car';
import type CarJoined from '../types/car-joined';
import type Model from '../types/model';

type CarsCollectionProps = {
  cars: Car[],
  brands: Brand[],
  models: Model[],
};

const createId = (): string => String(Math.floor(Math.random() * 100000000000000));

export type CreateCarProps = Omit<Car, 'id'> & { brandIds: string };

class CarsCollection {
  // private props: CarsCollectionProps;

  private privateCars: Car[];

  private privateBrands: Brand[];

  private privateModels: Model[];

  constructor({
    cars,
    brands,
    models,
  }: CarsCollectionProps) {
    this.privateCars = JSON.parse(JSON.stringify(cars));
    this.privateBrands = JSON.parse(JSON.stringify(brands));
    this.privateModels = JSON.parse(JSON.stringify(models));
  }

  public get allCars(): CarJoined[] {
    return this.privateCars.map(this.joinCar);
  }

  public get Brand(): Model[] {
    return JSON.parse(JSON.stringify(this.privateBrands));
  }

  private joinCar = ({ modelId, ...car }: Car) => {
    const carModel = this.privateModels.find((model) => model.id === modelId);
    const carBrand = this.privateBrands.find((brand) => brand.id === carModel?.brandId);

    return {
      ...car,
      brand: (carBrand && carBrand.title) ?? 'unknown',
      model: (carModel && carModel.title) ?? 'unknown',
    };
  };

  public deleteCarById = (carId: string): void => {
    this.privateCars = this.privateCars.filter((car) => car.id !== carId);
  };

  public getByBrandId = (brandId: string): CarJoined[] => {
    const brandModelsIds = this.privateModels
    .filter((model) => model.brandId === brandId)
    .map((brand) => brand.id);

    const joindCars = this.privateCars
    .filter((car) => brandModelsIds.includes(car.modelId))
    .map(this.joinCar);

    return joindCars;
  };

  public getCarById = (brandId: string): Brand => {
    const brand = this.privateBrands.find((brands) => brands.id === brandId);

    if (brand === undefined) {
      throw new Error(`Markė su ID: '${brandId}' buvo nerasta`);
    }

    return brand;
  };

  public add = ({ brandIds, modelId, ...carProps }: CreateCarProps) => {
    const model = this.privateModels.find((m) => m.id === modelId);
    const brand = this.privateBrands.find((b) => b.id === brandIds);

    if (model === undefined) throw new Error('Netinkami model duomenys sukurti automobilį');
    if (brand === undefined) throw new Error('Netinkami brand duomenys sukurti automobilį');

    const newCar: Car = {
      id: createId(),
      ...carProps,
      modelId,
    };

    this.privateCars.push(newCar);
  };
}

  export default CarsCollection;
