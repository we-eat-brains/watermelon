import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// The reason that we want to attach all the window properties to the
// mocha global object is because developers often write code that is
// meant for the browser without explicitly using the global environment
// object.
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// Use the default immutable extension for chai
chai.use(chaiImmutable);
