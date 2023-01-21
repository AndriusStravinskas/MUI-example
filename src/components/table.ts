import getPropCount from '../helpers/get-prop-count';

export type TableRowData = {
  id: string;
  [key: string]: string;
};

export type TableProps<Type extends TableRowData> = {
  title: string;
  columns: Type;
  rowsData: Type[];
  editedCarId: string | null;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
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
      throw new Error(
        'nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi',
      );
    }
  };

  // Initialize metode atliekami veiksmai nepriklausantys nuo PROPS.
  private initialize = (): void => {
    this.thead.className = 'bg-dark text-white';
    this.htmlElement.className = 'table table-striped';
    this.htmlElement.append(this.thead, this.tbody);
  };

  private renderHeadView = () => {
    const columnsNames = Object.values(this.props.columns);
    const columnsHtmlStr = `${columnsNames
      .map((name) => `<th>${name}</th>`)
      .join('')}<th></th>`;
    this.thead.innerHTML = `
    <tr>
    <th colspan="${columnsNames.length + 1}" class="text-center">${
      this.props.title
    }</th>
    </tr>
    <tr>${columnsHtmlStr}</tr>`;
  };

  private renderBodyView = () => {
    this.tbody.innerHTML = '';
    const keys = Object.keys(this.props.columns);

    this.props.rowsData.forEach((rowData) => {
      const tr = document.createElement('tr');
      tr.innerHTML = keys.map((key) => `<td>${rowData[key]}</td>`).join('');

      const rowIsBeingEdited = this.props.editedCarId === rowData.id;

      if (rowIsBeingEdited) {
        tr.style.backgroundColor = '#ffe493';
      }
      const updateBtn = document.createElement('button');
      updateBtn.innerHTML = rowIsBeingEdited ? '🛇' : '⟳';
      updateBtn.className = `btn btn-table-action btn-${rowIsBeingEdited ? 'secondary' : 'warning'} btn-sm`;
      updateBtn.addEventListener('click', () => {
        tr.style.backgroundColor = 'yellow';
        this.props.onEdit(rowData.id);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✕';
      deleteBtn.className = 'btn btn-table-action btn-danger btn-sm';
      deleteBtn.addEventListener('click', () => {
        this.props.onDelete(rowData.id);
      });

      const btnContainer = document.createElement('div');
      btnContainer.className = 'd-flex gap-2';

      btnContainer.append(updateBtn, deleteBtn);

      const lastTd = document.createElement('td');
      lastTd.append(btnContainer);
      tr.append(lastTd);
      this.tbody.append(tr);
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
