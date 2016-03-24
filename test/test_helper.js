import jsdom from 'jsdom';

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
