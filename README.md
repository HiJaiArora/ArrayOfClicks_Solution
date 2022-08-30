# The Array of Clicks

Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the
   result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
   period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
   of those clicks in the result set.
   The result set should be stored in an array of objects. Each object should represent a click. The
   expected result set should be a subset of the original array.

---

## Definitions

1. A click is the composite of an IP address, a timestamp, and a click amount.
2. Duplicate clicks are clicks that have the same IP address, regardless of timestamp or
   click amount.
3. Click periods are defined as the one hour spans that start at the top of the hour. So, in
   one day, there are 24 periods and they are broken down as follows (in HH:MM:SS
   format):
   00:00:00 - 00:59:59 (period 1)
   01:00:00 - 01:59:59 (period 2)
   02:00:00 - 02:59:59 (period 3)
   …
   22:00:00 - 22:59:59 (period 23)
   23:00:00 - 23:59:59 (period 24)

## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

## Dev Dependencies

1. Mocha is a widely used JavaScript test framework running on NodeJS and browsers. It supports asynchronous testing running the tests serially, allowing for more flexible and accurate reporting. It is a highly customizable framework that supports different assertions and libraries.

2. Chai is an assertion library that is mostly used alongside Mocha. It can be used both as a BDD / TDD assertion library for NodeJS and can be paired with any JavaScript testing framework. It has several interfaces that a developer can choose from and looks much like writing tests in English sentences

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.1

    $ npm --version
    8.3.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Running the project

    $ npm run solution

## Testing the Project

    $ npm run test
