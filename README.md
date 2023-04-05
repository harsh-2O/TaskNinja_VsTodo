# Task-Ninja  ✔🥷

- The TaskNinja VS Todo extension is a productivity tool for Visual Studio Code that allows users to create, manage and track their daily tasks. The extension has several features, including the ability to add tasks by copying text and clicking the 'Add Task' button. Once a task is completed, it can be easily marked as done by simply clicking on the task.

- One of the main advantages of the TaskNinja VS Todo extension is its integration with MySQL database, which enables users to store their task data on a remote server. This means that each user has their own personal database where they can store their tasks and access them from any computer or device with an internet connection. Additionally, the extension uses GitHub authentication to securely manage user accounts and protect their data.

- The extension's user interface is simple and intuitive, making it easy for users to manage their tasks efficiently. Users can create new tasks, edit or delete existing ones, and view completed tasks. The extension also provides the ability to sort tasks by due date, priority, or name.

- In conclusion, the TaskNinja VS Todo extension is a powerful and flexible tool for managing tasks and improving productivity. Its integration with MySQL database and GitHub authentication ensure that users' data is secure and accessible from anywhere. With its intuitive user interface and a range of useful features, the TaskNinja VS Todo extension is an excellent choice for anyone looking to improve their task management and productivity.



## ScreenShots
![4st ScreenShot](/SS/4.png)
![2st ScreenShot](/SS/2.png)
![1st ScreenShot](/SS/1.png)


## Installation guide

**Getting Started**

The project requires the following prerequisites to be installed:

- NodeJs

Once the prerequisites are installed, clone the repository and navigate to the project directory. The sample input and output audio files can be found in the "data" directory.

### Technologies Used

> - VS Code Extension API: 
    The TaskNinja extension is built using the VS Code Extension API, which allows developers to extend the functionality of VS Code by creating custom extensions.

> - TypeScript: 
    TaskNinja is written in TypeScript, which is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript provides better tooling and error-checking than JavaScript.

> - Svelte: 
    Svelte is a component-based JavaScript framework that compiles components into highly efficient JavaScript code. TaskNinja uses Svelte to create the webviews displayed in the sidebar.

> - MySQL: 
    TaskNinja uses MySQL database to store the user data, including their tasks and authentication details.

> - GitHub Authentication: 
    TaskNinja uses GitHub Authentication to authenticate users and allow them to access their data stored in the MySQL database.

> - Webpack: 
    Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules. TaskNinja uses Webpack to bundle the TypeScript and Svelte code into a single JavaScript file that can be executed by the extension.

> - Rollup: 
    Rollup is a module bundler that specializes in bundling ES6 modules. TaskNinja uses Rollup to bundle the Svelte code into a JavaScript module that can be included in the extension.

> - ESLint: 
    ESLint is a linting utility that helps enforce coding standards and identify potential errors. TaskNinja uses ESLint to ensure the code adheres to the TypeScript and JavaScript coding standards.

> - Mocha: 
    Mocha is a JavaScript testing framework that runs on Node.js and the browser. TaskNinja uses Mocha to write and run tests for the extension.

> - Concurrently: 
    Concurrently is a utility that allows multiple commands to run concurrently in a single terminal window. TaskNinja uses Concurrently to run multiple commands simultaneously, including the TypeScript and Svelte compilers, the Webpack bundler, and the Mocha test runner.

    
```bash
npm install cors dotenv-safe express jsonwebtoken mysql2 passport passport-github reflect-metadata typeorm
npm install -D @types/cors @types/express @types/jsonwebtoken @types/node @types/passport @types/passport-github nodemon typescript
```
## Authors

- [@HarshMehta](https://github.com/harsh-2O)



## Contributing

Contributions are always welcome!

See `contribution.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Credits

This project was created with the help of the following resources:

- [Vsinder's YouTube tutorial series](https://www.youtube.com/@bawad)
- [VS Code API documentation](https://code.visualstudio.com/api)
- [Polka.js](https://github.com/lukeed/polka)
 


