Common Prefix | c64b4cfa3e9c48d8f8c9a761cfde79eb
==========

This project, when initialized, accepts array of strings and find the most common prefix in the inserted array (see the examples below).

## Installation

In order to start using this project, please first run the following command.
```
npm install
```

This project has been developed and tested with Node.js version 20.11.0.

## Utilization

Once the installation process is successful, you can start initializing this project with the following command:
```
npm run start
```

If everything is OK, you should be able to see the following (or this pattern of) messages in the terminal:
```
> common_prefix@1.0.0 start
> npx tsx index.ts

-------------------------------------------------------------
[NOTE] Type 'exit' to exit from this application.
[EXAMPLE] ["flower", "flow", "flight"]
Please provide the array:
```
The project will ask for the array of strings to find the common prefix. If you inserted the invalid data, this project will reject the array with a message.

## Example of valid inputs (double quote only):
```
["flower","flow","flight"] => will return "fl".
["dog","racecar","car"] => will return "".
["aaaaaa","aaaaaa","aaaaaa","aaaaaa","aaaaaa","aaab","aaaaaa"] => will return "aaa".
exit => will stop the application from running.
```
