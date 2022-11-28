/* eslint-disable func-names */
const { DateTime } = require('luxon');
const chalk = require('chalk');

exports.handler = async () => {
  const date = DateTime.now();
  console.log(chalk.blue(`${date}: Hello from Netlify Functions!`));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
