
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { Filter, Operators, TextFilter, BooleanFilter } from '@progress/kendo-react-data-tools';
import { filterBy } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
const initialFilter = {
  logic: 'and',
  filters: [{
    field: 'Discontinued',
    operator: 'eq',
    value: false
  }, {
    logic: 'or',
    filters: [{
      field: 'TShirtArtist',
      operator: 'contains',
      value: 'Hasmood'
    }, {
      field: 'TshirtSize',
      operator: 'contains',
      value: 'S'
    }]
  }]
};

function App() {
  const [filter, setFilter] = React.useState(initialFilter);

  const onFilterChange = event => {
    setFilter(event.filter);
  };

  return <React.Fragment>
    <Header />
        <Filter value={filter} onChange={onFilterChange} fields={[{
      name: "TShirtArtist",
      label: 'Artist',
      filter: TextFilter,
      operators: Operators.text
    }, {
      name: "TShirtSize",
      label: 'Size',
      filter: TextFilter,
      operators: Operators.text
    }, {
      name: "Discontinued",
      label: 'Discontinued',
      filter: BooleanFilter,
      operators: Operators.boolean
    }]} />
        <Grid style={{
      maxHeight: '400px'
    }} data={filterBy()}>
          <GridColumn field="TShirtArtist" title="Artist" width="300px" />
          <GridColumn field="TShirtSize" title="Size" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
        <Footer />
      </React.Fragment>;
};

ReactDOM.render(<App />, document.querySelector('megamood'));
export default App;




