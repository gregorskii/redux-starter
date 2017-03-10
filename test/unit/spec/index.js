// Resolves using webpack aliases
const context = require.context('src', true, /-spec\.js(x)?$/);

context.keys().forEach(context);
