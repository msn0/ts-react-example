import * as React from 'react';
import { render } from 'react-dom';
import BadgeFunctionalTs from './components/badge-functional-ts/badge-functional';
import BadgeFunctionalJs from './components/badge-functional-js/badge-functional';
import BadgePure from './components/badge-pure-ts/badge-pure';

render((
    <React.Fragment>
        <p>
            <BadgeFunctionalTs num={ 3 } />
        </p>
        <p>
            <BadgeFunctionalJs num={ 67 } />
        </p>
        <p>
            <BadgePure num={ 12 } backgroundColor={ 'tomato' } />
        </p>
    </React.Fragment>
), document.body);

if (module.hot) {
    module.hot.accept();
}
