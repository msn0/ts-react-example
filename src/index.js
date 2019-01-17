import React from 'react';
import { render } from 'react-dom';
import BadgeFunctionalTs from './components/badge-functional-ts/badge-functional';
import BadgeFunctionalJs from './components/badge-functional-js/badge-functional';
import BadgePure from './components/badge-pure-ts/badge-pure';

render((
    <React.Fragment>
        <p>
            <BadgeFunctionalTs num={ 135 } />
        </p>
        <p>
            <BadgeFunctionalJs num={ 2 } />
        </p>
        <p>
            <BadgePure num={ 1 } />
        </p>
    </React.Fragment>
), document.body);

if (module.hot) {
    module.hot.accept();
}
