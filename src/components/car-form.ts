import TextField from './text-field';

class CarForm {
  public htmlElement: HTMLFormElement;

  public constructor() {
    this.htmlElement = document.createElement('form');
    this.initialize();
  }

  public initialize() {
    const priceTextField = new TextField({
      labelText: 'Kaina',
      name: 'price',
    });

    const yearTextField = new TextField({
      labelText: 'Metai',
      name: 'year',
    });

    this.htmlElement.className = 'd-flex flex-column p-3 border gap-3';
    this.htmlElement.style.width = '450 px';
    this.htmlElement.innerHTML = `
    <form class="card d-flex flex-column gap-3 p-3">
      <h2 class="h3 text-center">Sukurkite naują automobilį</h2>
      <div class="d-flex flex-column gap-2">
        <div class="form-group"><label for="select-2">Markė</label><select class="form-select" id="select-2" name="brand">
            <option value="1">Opel</option>
            <option value="2">BMW</option>
            <option value="3">Subaru</option>
          </select></div>
        <div class="form-group"><label for="select-3">Modelis</label><select class="form-select" id="select-3" name="model">
            <option value="1">Zafira</option>
            <option value="2">Astra</option>
            <option value="3">Insignia</option>
            <option value="4">X1</option>
            <option value="5">X2</option>
            <option value="6">X3</option>
            <option value="7">Impreza</option>
            <option value="8">Forester</option>
            <option value="9">Ascent</option>
          </select></div>
        <div>
          <label for="input-TextField-1" class="form-label">Kaina</label>
          <input id="input-TextField-1" class="form-control" type="text" name="price">
        </div>
        <div>
          <label for="input-TextField-2" class="form-label">Metai</label>
          <input id="input-TextField-2"class="form-control" type="text" name="year">
        </div>
      </div><button class="btn btn-primary">Sukurti</button>
    </form>`;
  }
}

export default CarForm;
