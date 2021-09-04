const { app } = require('./sources/utils/server');

const port = app.get('port');

app.listen(port, () => {
  console.log(`Server Up on port: ${port}`);
});
