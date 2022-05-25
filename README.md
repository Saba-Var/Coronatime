<div style="display:flex; align-items: center">
  <img src="readme/assets/Logo.png" alt="logo" width="200" style="margin-right: 20px" />
</div>

---

Coronatime shows you current covid situation in the world with statistics of countries.

#

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Resources](#resources)

## Prerequisites

- <img src="readme/assets/NodeJs.png" width="40" style="position: relative; top: 8px" /> _Node JS @12.X and up_
- <img src="readme/assets/Npm.png" width="40" style="position: relative; top: 4px" /> _npm @6 and up_

#

## Tech Stack

- <img src="readme/assets/React.png" height="25" style="position: relative; top: 4px" /> [React @18.0.0](https://reactjs.org) - front-end framework
- <img src="readme/assets/Typescript.png" height="25" style="position: relative; top: 4px" /> [Typescript @4.6.4](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- <img src='readme/assets/ReactHookForm.png'  height="25" style="position: relative; top: 4px" /> [React Hook Form @7.30.0](https://react-hook-form.com/) - flexible and extensible forms with easy-to-use validation.
- <img src="readme/assets/TailwindLogo.png" height="18" style="position: relative; top: 4px" /> [tailwindcss @3.0.24](https://tailwindcss.com/) - css framework
- <img src="readme/assets/Cypress.png" height="22" style="position: relative; top: 4px" /> [cypress @9.6.0](https://www.cypress.io/) - JavaScript End to End Testing Framework
- <img src="readme/assets/I18next.png" height="22" style="position: relative; top: 4px" /> [I18next @21.8.3](https://www.i18next.com/) - I18next is an internationalization-framework written in and for JavaScript.

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/coronatime-Var-Saba.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

or

```sh
yarn install
```

3\. after that you can run Covid Questionaire application from terminal:

```sh
npm start
```

Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

You can learn more in the [Create React App documentation.](https://create-react-app.dev/docs/getting-started/)
To learn React, check out the [React documentation.](https://reactjs.org/)

#

## Testing

1\. copy cypress.json

```sh
cp cypress.json.example cypress.json
```

2\. Run application from the terminal

```sh
npm start
```

3\. start cypress

```sh
npx cypress open
```

In order to see coverage of testing go to coverage/lcov-report and open index.html

#

## Project Structure

```bash
├─── cypress # project test files
├─── readme  # readme assets
├─── src     # project source codes
│    ├── assets      # project images
│    ├── components  # reusable components
│    │   └── svgs            # svg components
│    ├── pages       # project pages
│    │   ├── ConfirmationEmail
│    │   │   └── components         # page components
│    │   ├── ConfirmedEmail
│    │   │   └── components         # page components
│    │   ├── Country
│    │   │   └── components         # page components
│    │   ├── Dashboard
│    │   │   └── components         # page components
│    │   ├── Login
│    │   │   └── components         # page components
│    │   ├── NewPassword
│    │   │   └── components         # page components
│    │   ├── PasswordConfirmation
│    │   │   └── components          # page components
│    │   ├── RecoveryPasswordByEmail
│    │   │   └── components          # page components
│    │   ├── Signup
│    │   │   └── components          # page components
│    │   └── Worldwide
│    │       └── components          # page components 
│    └── state        # context api
- .eslintrc.json      # eslint config file
- .gitignore          # gitignore config file
- .prettierrc.js      # prettier config file
- cypress.json        # cypress config file
- jsconfig.json       # config file for absolute path
- package.json        # dependency manager configurations
- tailwind.config.js  # tailwindcss config file
- tsconfig.js         # typescript config file

```

#

## Resources

- [Application Design [Figma]](https://www.figma.com/file/O9A950iYrHgZHtBuCtNSY8/Coronatime?node-id=0%3A1)
- [Application Design Prototype](https://www.figma.com/proto/O9A950iYrHgZHtBuCtNSY8/Coronatime?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1)
- [Git commit rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)
- [Font [Inter]](https://fonts.google.com/specimen/Inter)
