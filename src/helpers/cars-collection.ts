import type Brand from '../types/brand';
import type Car from '../types/car';
import type CarJoined from '../types/car-joined';
import type Model from '../types/model';

type CarsCollectionProps = {
  cars: Car[],
  brands: Brand[],
  models: Model[],
};

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

  public getByBrandId = (brandId: string): CarJoined[] => {
    const brandModelsIds = this.privateModels
    .filter((model) => model.brandId === brandId)
    .map((brand) => brand.id);

    const joindCars = this.privateCars
    .filter((car) => brandModelsIds.includes(car.modelId))
    .map(this.joinCar);

    return joindCars;
  };
}

export default CarsCollection;
