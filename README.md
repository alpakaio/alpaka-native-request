# alpaka-native-request

[![npm version](https://badge.fury.io/js/%40alpakaio%2Falpaka-native-request.svg)](https://badge.fury.io/js/%40alpakaio%2Falpaka-native-request)

Request facade used by [Alpaka](https://www.alpaka.io) [React Native](https://github.com/facebook/react-native) apps.

## TOC

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Release Notes](#release-notes)

## Installation

Using npm:

```shell
npm install --save @alpakaio/alpaka-native-request
```

## Usage

```js
import UserAgent from '@alpakaio/alpaka-native-request';
```

## API

| Method                                                            | Return Type         |  iOS | Android | Windows | Since  |
| ----------------------------------------------------------------- | ------------------- | :--: | :-----: | :-----: | ------ |
| [createRequest(tenant, [token])](#createrequest)                  | `Promise<Request>`  |  ✅  |   ✅    |   ✅    | 1.0.0 |
| [createInstance()](#createinstance)                               | `Promise<Request>`  |  ✅  |   ✅    |   ✅    | 1.0.0 |

### createRequest()

Creates or gets a current axios instance configured to communicate with the Alpaka API

**Examples**

```js
const request = await createRequest('test');
const response = request.get('version');
console.log(response.data.version);
```

```js
createRequest((request) => (request.get('version'))).then((response) => {
    console.log(response.data.version);
});
```

### createInstance()

Creates an axios instance with an Alpaka user agent assigned

**Examples**

```js
const axios = await createInstance();
const response = axios.get('https://alpaka.alpaka.io/api/v3/version');
console.log(response.data.version);
```

```js
createInstance((axios) => (axios.get('https://alpaka.alpaka.io/api/v3/version'))).then((response) => {
    console.log(response.data.version);
});
```

## Release Notes

See the [CHANGELOG.md](https://github.com/alpakaio/alpaka-native-request/blob/master/CHANGELOG.md).
