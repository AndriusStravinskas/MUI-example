import FormSelectField from './form-select-field';
import TextField from './text-field';

class CarForm {
  public htmlElement: HTMLFormElement;

  private formTitleHtmlElement: HTMLHeadingElement;

  private submitBtn: HTMLButtonElement;

  public constructor() {
    this.htmlElement = document.createElement('form');
    this.formTitleHtmlElement = document.createElement('h2');
    this.submitBtn = document.createElement('button');

    this.initialize();
    this.renderView();
  }

  public initialize() {
    this.formTitleHtmlElement.className = 'h3 text-center';
    this.formTitleHtmlElement.innerText = 'Pridėti naują mašiną';

    this.submitBtn.className = 'btn btn-primary';
    this.submitBtn.innerText = 'Pridėti';
    this.submitBtn.setAttribute('type', 'submit');

    this.htmlElement.className = 'd-flex flex-column p-3 border gap-3';
    this.htmlElement.style.width = '450 px';
  }

  private renderView = () => {
    const brandSelectField = new FormSelectField({
      labelText: 'Markė',
      name: 'brand',
      options: [
        { label: 'Opel', value: '1' },
        { label: 'BMW', value: '2' },
        { label: 'Subaru', value: '3' },
      ],
    });

    const modelSelectField = new FormSelectField({
      labelText: 'Modelis',
      name: 'model',
      options: [
        { label: 'Zafira', value: '1' },
        { label: 'Insignia', value: '1' },
        { label: 'X1', value: '1' },
        { label: 'X2', value: '1' },
        { label: 'X3', value: '1' },
        { label: 'Impreza', value: '1' },
        { label: 'Forester', value: '1' },
        { label: 'Ascent', value: '1' },
      ],
    });

    const priceTextField = new TextField({
      labelText: 'Kaina',
      name: 'price',
    });

    const yearTextField = new TextField({
      labelText: 'Metai',
      name: 'year',
    });

    this.htmlElement.append(
      this.formTitleHtmlElement,
      brandSelectField.htmlElement,
      modelSelectField.htmlElement,
      priceTextField.htmlElement,
      yearTextField.htmlElement,
      this.submitBtn,
    );
  };
}

export default CarForm;
