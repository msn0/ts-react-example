import jsdom from 'jsdom';
import hook from 'css-modules-require-hook';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

hook({
    extensions: ['.pcss'],
    generateScopedName: '[local]',
    prepend: [
        require('postcss-import-sync2'),
        require('postcss-at-rules-variables'),
        require('postcss-mixins'),
        require('postcss-modular-scale-plus'),
        require('postcss-simple-vars'),
        require('postcss-custom-properties'),
        require('postcss-remove-null'),
        require('postcss-nested'),
        require('postcss-calc'),
        require('postcss-custom-media')
    ]
});

const { window } = new jsdom.JSDOM(``);
global.window = window;
global.document = window.document;