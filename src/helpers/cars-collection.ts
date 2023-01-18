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
  private props: CarsCollectionProps;

  constructor(props: CarsCollectionProps) {
    this.props = props;
  }

  public get all(): CarJoined[] {
    return this.props.cars.map(this.joinCar);
  }

  private joinCar = ({ modelId, ...car }: Car) => {
    const { brands, models } = this.props;
    const [carModel] = models.filter((model) => model.id === modelId);
    const [carBrand] = brands.filter((brand) => carModel.brandId === brand.id);

    return {
      ...car,
      brand: carBrand.title,
      model: carModel.title,
    };
  };
}

export default CarsCollection;
