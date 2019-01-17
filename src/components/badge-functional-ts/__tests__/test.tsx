import * as React from 'react';
import { shallow } from 'enzyme';
import BadgeFunctional from '../badge-functional';

describe('Functional Badge TS', () => {
    it('should render message', () => {
        const wrapper = shallow(<BadgeFunctional num={ 1 } />);

        const text = wrapper.text() as any;
    });
});