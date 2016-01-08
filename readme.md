# parse-aws-lambda-name [![Build Status](https://travis-ci.org/SamVerschueren/parse-aws-lambda-name.svg?branch=master)](https://travis-ci.org/SamVerschueren/parse-aws-lambda-name)

> Parse an AWS Lambda function name into a name and a qualifier

The qualifier of an AWS Lambda function name is the version or alias of that function.


## Install

```
$ npm install --save parse-aws-lambda-name
```


## Usage

```js
const parseName = require('parse-aws-lambda-name');

parseName('foo');
//=> {functionName: 'foo'}

parseName('foo:bar');
//=> {functionName: 'foo', qualifier: 'bar'}

parseName('foo:1');
//=> {functionName: 'foo', qualifier: '1'}

parseName('123456789876:foo');
//=> {functionName: '123456789876:foo'}

parseName('123456789876:foo:bar');
//=> {functionName: '123456789876:foo', qualifier: 'bar'}

parseName('arn:aws:lambda:eu-west-1:123456789876:function:foo');
//=> {functionName: 'arn:aws:lambda:eu-west-1:123456789876:function:foo'}

parseName('arn:aws:lambda:eu-west-1:123456789876:function:foo:bar');
//=> {functionName: 'arn:aws:lambda:eu-west-1:123456789876:function:foo', qualifier: 'bar'}
```


## API

### parseName(name)

#### name

Type: `string`

Function name to parse.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
