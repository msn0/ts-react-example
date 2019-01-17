import * as React from 'react';
import { render } from 'react-dom';
import BadgeFunctional from './components/badge-functional/badge-functional';
import BadgePure from './components/badge-pure/badge-pure';

render((
    <React.Fragment>
        <p>
            <BadgeFunctional num={135} />
        </p>
        <p>
            <BadgePure num={1} />
        </p>
    </React.Fragment>
), document.body);

if (module.hot) {
    module.hot.accept();
}
