import * as React from 'react';
import { render } from 'react-dom';
import BadgeFunctional from './components/badge-functional/badge-functional';
import BadgePure from './components/badge-pure/badge-pure';

render([
    <BadgeFunctional num={ 135 }/>,
    <BadgePure num={ 1 }/>
], document.body);

if (module.hot) {
    module.hot.accept();
}
