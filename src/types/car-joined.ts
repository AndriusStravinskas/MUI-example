import Brand from './brand';
import type Car from './car';
import Model from './model';

type CarJoined = Omit<Car, 'modelId'> & {
  brand: Brand['title'],
  model: Model['title'],
};

export default CarJoined;
