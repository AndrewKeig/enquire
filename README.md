# enquire

    an environment based replacement for node.js require

## Installation

    $ npm install enquire


## why

    enquires task is simple; wrap the node.js require module to provide environment based modularisation.

    this module should be useful for the following scenarios

     - abstract away some io bound resource in order to simplify a dev or test environment
     - environment configuration that requires code execution


## Usage

# Example 1; with module request, default NODE_ENV


given the following module structure

    /some_module/
        index.js
    /some_module-development/
        index.js

when we request some_module with default NODE_ENV

     var module = enquire('some_module');

then return some_module

     module = some_module


# Example 2; with module request, development NODE_ENV


given the following module structure

    /some_module/
        index.js
    /some_module-development/
        index.js

when we request some_module with NODE_ENV set to "development"

     process.env.NODE_ENV = "development";
     var module = enquire('some_module');

then return some_module-development

     module = some_module-development


# Example 3; with module request, environment parameter override


given the following module structure

    /some_module/
        index.js
    /some_module-development/
        index.js

when we request some_module overriding environment parameter as "development"

     var module = enquire('../test/doubles', "development");

then some_module-development

     module = some_module-development

