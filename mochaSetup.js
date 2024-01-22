/* eslint-disable no-undef */
import { JSDOM } from 'jsdom';
import { describe, test } from 'mocha';

const { window } = new JSDOM('<div id="root"></div>', { url: 'http://localhost:3000' });

global.window = window;
global.history = window.history;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;
global.describe = describe;
global.test = test;
