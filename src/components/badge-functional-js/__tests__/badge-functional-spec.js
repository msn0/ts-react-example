import * as React from 'react';
import { shallow } from 'enzyme';
import BadgeFunctional from '../badge-functional';

describe('Functional Badge JS', () => {
    it('should render message', () => {
        shallow(<BadgeFunctional num={ 2 } />)
            .text().should
            .equal('2new messages');
    });
});