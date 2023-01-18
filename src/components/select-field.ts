export type Option = {
  text: string,
  value: string,
};

type SelectFieldProps = {
  options: Option[],
};

class SelectField {
  public htmlElement: HTMLElement;

  private options: SelectFieldProps['options'];

  public constructor({ options }: SelectFieldProps) {
    this.htmlElement = document.createElement('select');
    this.options = options;

    this.initialize();
  }

  private initialize() {
    const OptionsStr = this.options
      .map(({ text, value }) => `<option value="${value}">${text}</option>`)
      .join('');

    this.htmlElement.className = 'form-select';
    this.htmlElement.innerHTML = OptionsStr;
  }
}

export default SelectField;
