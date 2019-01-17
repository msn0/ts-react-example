import React from 'react';
import { shallow } from 'enzyme';
import BadgeFunctional from '../badge-functional';

describe('Functional Badge', () => {
    it('should render message', () => {
        const badge = shallow(<BadgeFunctional num={ 1 } />);
    });
});