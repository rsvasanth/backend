
## Installation

### Dependencies

Installation depends on `node`/`npm` with `grunt` and `bower` installed globally.

    $ npm install -g bower grunt-cli

### The one-liner install (please create an [issue](https://github.com/beeman/loopback-angular-admin/issues/new) if this one does not work!)

    git clone https://github.com/beeman/loopback-angular-admin.git && cd loopback-angular-admin && npm install && grunt build && grunt serve

### The steps above: 

### Checkout the project:

    git clone https://github.com/beeman/loopback-angular-admin.git

### Install the Node packages:

    npm install

### Run grunt build:

    grunt build
    
### Run grunt serve to start the API and frontend:

    grunt serve
    

## Running

The project is separated in a server and a client.

### Server

To run the server you issue the command:

    npm start

Or to run it with nodemon (needs `nodemon` installed globally). This will
automatically restart the server when you change its code:

    npm run dev

The command `grunt serve` explained below wil automatically start the API.

### Client

Rebuild the lb-services.js file with the correct `API_URL` for development.

    API_URL=http://0.0.0.0:3000/api grunt

To run the client you issue the command. This will also start the API.

    grunt serve

It will open the project in your default browser with livereload enabled.
This will take care of reloading the page when you change your code.

## Connect to a database

You can specify the URL to the MongoDB database you want to use with the `MONGODB_URL` environment variable.

    MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

Set `INITDB` to true if you want to load the initial dataset, which creates the admin user. The memory database (default) does this automatically.

    INITDB=true MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

This also works with the free hosted MongoDB instances at [compose.io](https://www.compose.io) and [mongolab.com](https://mongolab.com)!




## Unit Testing using Karma/Jasmine

    $ node_modules/.bin/karma start client/test/karma.conf.js

    INFO [karma]: Karma v0.12.31 server started at http://localhost:8080/
    INFO [launcher]: Starting browser PhantomJS
    INFO [PhantomJS 1.9.8 (Linux)]: Connected on socket aLJmRuSNUH2rPfpWgS3l with id 89641972
    PhantomJS 1.9.8 (Linux): Executed 1 of 1 SUCCESS (0.007 secs / 0.029 secs)


### Useful commits

These commits might be useful when extending the functionality.

- [Add support for MongoDB databases](https://github.com/beeman/loopback-angular-admin/commit/6b884e601d535ed64b4ef4f6f07e0f55d357a5b6)
- [Add custom method to the API](https://github.com/beeman/loopback-angular-admin/commit/eedbd03f755ddf2234872886ee390ac4f6753c64)
- [Rename a model](https://github.com/beeman/loopback-angular-admin/commit/88254ce59af29818aec900514693e3fe6c94acea)

### WebSockets / socket.io

At this moment there is no integration for socket.io or websockets, nor will there be in the near future. Once LoopBack has integrated support for it we will leverage from that.

Having that said, it's certainly possible to integrate socket.io, check [this](https://github.com/beeman/loopback-angular-admin/pull/44) pull request by [@movibe](https://github.com/movibe).


