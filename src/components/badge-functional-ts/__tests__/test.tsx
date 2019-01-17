import * as React from 'react';
import { shallow } from 'enzyme';
import BadgeFunctional from '../badge-functional';

describe('Functional Badge TS', () => {
    it('should render message', () => {
        shallow(<BadgeFunctional num={ 1 } />)
            .text().should
            .equal('1new message');
    });
});