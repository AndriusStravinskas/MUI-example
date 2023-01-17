import getPropCount from '../helpers/get-prop-count';

type TableRowData = {
  id: string,
  [key: string]: string,
};

type TableProps<Type extends TableRowData> = {
  title: string,
columns: Type,
rowsData: Type[],
};

class Table<T extends TableRowData> {
  public static checkColumnsCompatability<T extends TableRowData>(
    columns: T,
    rowsData: T[],
  ): boolean {
    return rowsData.some((rowData) => getPropCount(rowData) === getPropCount(columns));
  }

  public htmlElement: HTMLTableElement;

  private props: TableProps<T>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    if (Table.checkColumnsCompatability(props.columns, props.rowsData)) {
      throw new Error('nesutampa stulpelių skaičius su eilučių duomenimis');
    }

    this.props = props;
    this.htmlElement = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.thead = document.createElement('thead');
    this.initialize();
  }

  public initializeHead = () => {
    const columnsNames = Object.values(this.props.columns);
    const columnsHtmlStr = columnsNames
    .map((name) => `<th>${name}</th>`)
    .join('');
    this.thead.className = 'bg-dark text-white';
    this.thead.innerHTML = `
    <tr>
    <th colspan="${columnsNames.length}">${this.props.title}</th>
    </tr>
    <tr>${columnsHtmlStr}</tr>`;
  };

  public initializeBody = () => {
    const keys = Object.keys(this.props.columns);
    this.props.rowsData.forEach((rowData) => {
      const columnsHtmlStr = keys
      .map((key) => `<th>${rowData[key]}</th>`)
      .join('');

      this.tbody.innerHTML += `<tr>${columnsHtmlStr}</tr>`;
    });
  };

  public initialize = () => {
    this.initializeHead();
    this.initializeBody();

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };
}

export default Table;
