import FormSelectField from './form-select-field';
import TextField from './text-field';

type FormValues = {
  brand: string;
  model: string;
  price: string;
  year: string;
};

type CarFormProps = {
  title: string;
  values: FormValues;
  submitBtnText: string;
  onSubmit: (values: FormValues) => void;
};

class CarForm {
  public htmlElement: HTMLFormElement;

  private props: CarFormProps;

  private brandSelectField: FormSelectField;
  private modelSelectField: FormSelectField;
  private priceTextField: TextField;
  private yearTextField: TextField;

  private formTitleHtmlElement: HTMLHeadingElement;
  private submitBtn: HTMLButtonElement;

  public constructor(props: CarFormProps) {
    this.props = props;

    this.htmlElement = document.createElement('form');
    this.formTitleHtmlElement = document.createElement('h2');
    this.submitBtn = document.createElement('button');

    this.brandSelectField = new FormSelectField({
      labelText: 'Markė',
      name: 'brand',
      options: [
        { label: 'Opel', value: '1' },
        { label: 'BMW', value: '2' },
        { label: 'Subaru', value: '3' },
      ],
      initialValue: props.values.brand,
    });

    this.modelSelectField = new FormSelectField({
      labelText: 'Modelis',
      name: 'model',
      options: [
        { label: 'Zafira', value: '1' },
        { label: 'Insignia', value: '2' },
        { label: 'X1', value: '3' },
        { label: 'X2', value: '4' },
        { label: 'X3', value: '5' },
        { label: 'Impreza', value: '6' },
        { label: 'Forester', value: '7' },
        { label: 'Ascent', value: '8' },
      ],
      initialValue: props.values.model,
    });

    this.priceTextField = new TextField({
      labelText: 'Kaina',
      name: 'price',
      initialValue: String(props.values.price),
    });

    this.yearTextField = new TextField({
      labelText: 'Metai',
      name: 'year',
      initialValue: String(props.values.year),
    });

    this.initialize();
    this.renderView();
  }

  private handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const formData = new FormData(this.htmlElement);

    const brand = formData.get('brand');
    const model = formData.get('model');
    const price = formData.get('price');
    const year = formData.get('year');

    if (typeof brand !== 'string') throw new Error('Validacijos klaida: Brand privalomas');
    if (typeof model !== 'string') throw new Error('Validacijos klaida: model privalomas');
    if (typeof price !== 'string') throw new Error('Validacijos klaida: price privalomas');
    if (typeof year !== 'string') throw new Error('Validacijos klaida: year privalomas');

    const formValues: FormValues = {
      brand,
      model,
      price,
      year,
    };

    this.props.onSubmit(formValues);
  };

  public initialize() {
    this.formTitleHtmlElement.className = 'h3 text-center';

    this.submitBtn.className = 'btn btn-primary';
    this.submitBtn.setAttribute('type', 'submit');

    this.htmlElement.className = 'd-flex flex-column p-3 border gap-3';
    this.htmlElement.style.width = '450 px';

    this.htmlElement.append(
      this.formTitleHtmlElement,
      this.brandSelectField.htmlElement,
      this.modelSelectField.htmlElement,
      this.priceTextField.htmlElement,
      this.yearTextField.htmlElement,
      this.submitBtn,
    );
    this.htmlElement.addEventListener('submit', this.handleSubmit);
  }

  private renderView = () => {
    const { values: { brand, model, price, year } } = this.props;

    this.formTitleHtmlElement.innerText = this.props.title;
    this.submitBtn.innerText = this.props.submitBtnText;

    this.brandSelectField.updateProps({ initialValue: brand });
    this.modelSelectField.updateProps({ initialValue: model });
    this.priceTextField.updateProps({ initialValue: String(price) });
    this.yearTextField.updateProps({ initialValue: String(year) });
  };

  public updateProps = (newProps: Partial<CarFormProps>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default CarForm;
