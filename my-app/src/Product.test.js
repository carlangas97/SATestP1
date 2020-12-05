import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Product from "./Product";

describe('Product Component', () => {

    it('has an h2 tag', () => {

        const component = ReactTestUtils.renderIntoDocument(<Product/>);
        var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'h2'
        );

    });

    it('has a title class', () => {

        const component = ReactTestUtils.renderIntoDocument(<Product/>);
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'title'
        );
    });
})