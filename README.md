# Minimal Webpack + Typescript + Sass + Tailwind Starter
## Why?
I struggled to find both a modern and minimal solution for simply bundling the above mentioned resources. So here we are.
### Why Webpack and not Vite!?!?!? 
Because at the time of this writing _11/17/2022_ Vite and ESBuild had problems with transpiling to ES5 and unforutnately I have clients that want to support IE11 right now. Bummer.

## Usage
Clone the repository in your local machine.
Run the following command to install the dependencies
```bash
npm install
# or
yarn
```

Then run the following command to start the dev server:
```bash
npm start
# OR
yarn start
```

## Build
To generate the production build, run the following command:
```bash
npm run build
# OR
yarn build
```

Because at the time of this writing

# License
[MIT](LICENSE)