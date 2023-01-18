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
    this.renderView();
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

  // Initialize metode atliekami veiksmai nepriklausantys nuo PROPS.
  private initialize = (): void => {
    this.thead.className = 'bg-dark text-white';
    this.htmlElement.className = 'table table-striped';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };

  private renderHeadView = () => {
    const columnsNames = Object.values(this.props.columns);
    const columnsHtmlStr = columnsNames
    .map((name) => `<th>${name}</th>`)
    .join('');
    this.thead.innerHTML = `
    <tr>
    <th colspan="${columnsNames.length}" class="text-center">${this.props.title}</th>
    </tr>
    <tr>${columnsHtmlStr}</tr>`;
  };

  private renderBodyView = () => {
    this.tbody.innerHTML = '';
    const keys = Object.keys(this.props.columns);

    this.props.rowsData.forEach((rowData) => {
    const columnHtmlStr = keys
    .map((key) => `<td>${rowData[key]}</td>`)
    .join('');

    this.tbody.innerHTML += `<tr>${columnHtmlStr}</tr>`;
   });
  };

  // RenderView metode atliekami veiksmai priklausantys nuo PROPS.
  private renderView = () => {
    this.renderHeadView();
    this.renderBodyView();
  };

  public updateProps = (newProps: Partial<TableProps<T>>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };
    this.renderView();
  };
}

export default Table;
