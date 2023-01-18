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
  public htmlElement: HTMLTableElement;

  private props: TableProps<T>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    this.props = props;
    this.checkColumnsCompatability();

    this.htmlElement = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.thead = document.createElement('thead');

    this.initialize();
  }

  private checkColumnsCompatability = (): void => {
    const { rowsData, columns } = this.props;

    if (this.props.rowsData.length === 0) return;
    const columnCount = getPropCount(columns);

    const columnCompatableWithRowsData = rowsData.every((row) => {
      const rowCellsCount = getPropCount(row);

      return rowCellsCount === columnCount;
    });

    if (!columnCompatableWithRowsData) {
      throw new Error('nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

  private initializeHead = (): void => {
    const columnsNames = Object.values(this.props.columns);
    const columnsHtmlStr = columnsNames
    .map((name) => `<th>${name}</th>`)
    .join('');
    this.thead.className = 'bg-dark text-white';
    this.thead.innerHTML = `
    <tr>
    <th colspan="${columnsNames.length}" class="text-center">${this.props.title}</th>
    </tr>
    <tr>${columnsHtmlStr}</tr>`;
  };

  private initializeBody = (): void => {
   const { rowsData, columns } = this.props;

   this.tbody.innerHTML = '';
   const rowsHtmlElements = rowsData
   .map((rowData) => {
    const rowHtmlElement = document.createElement('tr');

    const cellsHtmlString = Object.keys(columns)
    .map((key) => `<td>${rowData[key]}</td>`)
    .join('');

    rowHtmlElement.innerHTML = cellsHtmlString;

    return rowHtmlElement;
   });

   this.tbody.append(...rowsHtmlElements);
    };

  public initialize = (): void => {
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
