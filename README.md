## Description

A simple authentication example using Node.js & [JWT](https://jwt.io) that protects static assets like HTML, JS, Image & Video files with custom middleware.

## Installation

```javascript
npm install
npm run build:prod // Also copies image.jpg to dist/
// navigate to http://localhost:5000
```

## Usage

Try navigating to `http://localhost:5000`.

You will redirected to `/auth/login`.

Login using **username:** `admin` & **password:** `test`.

You will be redirected to `/`.

Now try navigating to `/auth/login`. (You'll get redirected to `/`)

Unless you are logged in, you won't be able to request any static files, i.e. images.

Try opening an Incognito Chrome tab and request `http://localhost:5000/image.jpg`.  Then login, and try the same.

By default, users will remain logged in for **1 year**.


## Motivation

This is mainly meant to be an exercise in understanding how simple authentication is with Node.js & [JWT](https://jwt.io). Dive through the code, make changes, and send a pull request if anything is unclear.

## License

Copyright (c) 2016 Raphael Rafatpanah

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.