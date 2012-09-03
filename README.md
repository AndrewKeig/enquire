# enquire

   provides a simple convention based solution to overriding dependencies in node.js.

   enquire is a simple wrapper around the require module; which allows you to require alternative; environment specific implementations of a module.

   using nodes core process.NODE_ENV environment variable we can setup alternative implementations for unit/integration testing; development, uat and production environments.


## Installation

    $ npm install enquire



## Why would you want to do this

   **Testing.**

   consider a module you have written that has some dependecy on an io bound resource. In order to unit test this module you would ideally like to abstract away the call to the io bound resource.

   lots of OO frameworks out there use a technique called dependency injection in order to solve this decoupling problem; generally refered to as Inversion of Control.  Other patterns which can be used to solve the problen are generally frowned upon such as Service Locator and the Factory pattern.
  
   node.js does not support dependency injection; so an alternative solution is required.  There are modules in the community which attempt to solve this problem; but I was not happy with any I researched.
 
 
## API

	. var module = enquire.load('some-module');
     	load an env specific implementation of a module based on the current state of process.env.NODE_ENV

    . enquire.paths
		returns a list of registered paths

    . enquire.register('environment', 'path');  
		register an environment/path pair; this overidde allows you to store alternative implementations in different locations; by default enquire will simply look in the path provided when you perform a load



## Examples for registering environment/paths

	given I register the following environment/paths

    	enquire.register('unit-testing', '/path-to-unit-testing-implementation/');  

	when i request a module in a unit testing environment

		process.env.NODE_ENV = 'unit-testing';
		
		var module = enquire.load("some-module");

	then the module requested is located in this location

		/path-to-unit-testing-implementation/some-module
		
		


## Examples for loading modules

   given the following module exists 
    
    /some-module/

   when we request the module with enquire
 
    var module = enquire.load('some-module');

   we get the following implementation of the module
   
 

  when default NODE_ENV 

    /some-module/

   when process.env.NODE_ENV = "unit-testing";    

    /some-module-unit-testig/

   when process.env.NODE_ENV = "development";    

    /some-module-developments/



## Example 1; 

with module request, default NODE_ENV


    given the following module structure

    /some_module/
        index.js
    /some_module-development/
        index.js

     when we request some_module with default NODE_ENV

     var module = enquire.load('some_module');

     then return some_module

     module = some_module


##Example 2

with module request, development NODE_ENV


given the following module structure

    /some_module/
        index.js
    /some_module-development/
        index.js

when we request some_module with NODE_ENV set to "development"

     process.env.NODE_ENV = "development";
     var module = enquire.load('some_module');

then return some_module-development

     module = some_module-development


## Example 3

with module request, environment parameter override

    given the following module structure

     /some-module/
         index.js
     /some-module-development/
         index.js

    when we request some_module overriding environment parameter as "development"

     var module = enquire.load('../test/doubles', "development");

    then return some-module-development

     module = some-module-development

