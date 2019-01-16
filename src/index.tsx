import * as React from 'react';
import { render } from 'react-dom';
import Badge from './components/badge/badge';

render(<Badge num={ 135 }/>, document.body);

if (module.hot) {
    module.hot.accept();
}
