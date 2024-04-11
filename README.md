# PokeGuess Frontend

## Description

This is a React Application build with [vite](https://vitejs.dev/). This application is suggested to be used with the backend application [here](https://github.com/SamOr1014/pokeGuess-backend)

## Usage

Before starting the app, remember to add a `.env` file and you can reference the `.env.example` in the repo

### To Start Locally

`yarn && yarn dev`

You can config the port in the `vite.config.ts` file. Doc is [here](https://vitejs.dev/config/server-options.html).

### To build and run

`yarn build && npx serve -s dist`

### To Test

`yarn test`

add `--coverage` flag if you wanna check coverage and add `--ui` for using the vitest ui

#### Current Coverage

| File                                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    |
| ------------------------------------ | ------- | -------- | ------- | ------- | -------------------- |
| All files                            | 96.68   | 83.07    | 96.66   | 96.68   |
| components                           | 92.98   | 80       | 83.33   | 92.98   |
| Spinner.tsx                          | 100     | 100      | 100     | 100     |
| ThemeSwitch.tsx                      | 100     | 66.66    | 100     | 100     | 13                   |
| themeProvider.tsx                    | 87.69   | 80       | 66.66   | 87.69   | 40-47                |
| hooks                                | 95.16   | 76.47    | 100     | 95.16   |
| useQuizState.tsx                     | 94.82   | 75       | 100     | 94.82   | 79-80,99-100,103-104 |
| useTheme.tsx                         | 100     | 100      | 100     | 100     |
| lib                                  | 100     | 100      | 100     | 100     |
| utils.ts                             | 100     | 100      | 100     | 100     |
| pages                                | 92.59   | 50       | 100     | 92.59   |
| ErrorPage.tsx                        | 92.59   | 50       | 100     | 92.59   | 17-18                |
| pages/front                          | 100     | 100      | 100     | 100     |
| index.tsx                            | 100     | 100      | 100     | 100     |
| pages/layout                         | 100     | 100      | 100     | 100     |
| index.tsx                            | 100     | 100      | 100     | 100     |
| pages/layout/components              | 100     | 100      | 100     | 100     |
| NavBar.tsx                           | 100     | 100      | 100     | 100     |
| pages/quiz                           | 100     | 100      | 100     | 100     |
| index.tsx                            | 100     | 100      | 100     | 100     |
| pages/quiz/components/AnswerPanel    | 96.07   | 86.66    | 100     | 96.07   |
| AnswerButtons.tsx                    | 93.1    | 71.42    | 100     | 93.1    | 27-30                |
| Q&A.tsx                              | 94.44   | 100      | 100     | 94.44   | 12-13                |
| RevealResult.tsx                     | 100     | 100      | 100     | 100     |
| index.tsx                            | 100     | 100      | 100     | 100     |
| pages/quiz/components/PokemonDisplay | 100     | 80       | 100     | 100     |
| index.tsx                            | 100     | 80       | 100     | 100     | 20                   |
| pages/quiz/components/Toolbar        | 100     | 100      | 100     | 100     |
| MuteButton.tsx                       | 100     | 100      | 100     | 100     |
| Score.tsx                            | 100     | 100      | 100     | 100     |
| index.tsx                            | 100     | 100      | 100     | 100     |
| utilities                            | 100     | 50       | 100     | 100     |
| axiosInstance.ts                     | 100     | 100      | 100     | 100     |
| createSoundObject.ts                 | 100     | 50       | 100     | 100     | 9                    |

### Run on Docker (Dockerised production build)

The react application is built using vite and served using nginx.

`yarn compose`

if your interested in the command checkout package.json

## Design

This single page application currently consist of 2 routes: The home route (`/`) and the quiz route (`/quiz`). The home page consist a welcoming message for the user and the quiz page is the actual Pokemon Trivia.

The application is using [shadcn.ui](https://ui.shadcn.com/) and [tailwindcss](https://tailwindcss.com/) for styling

### File structure

#### `src/asset`

Can put external source file like mp3 or image (svg png img) for the code base

#### `src/component`

Commonly share components + related test and shadcn.ui installed components will located here at `/ui` folder

#### `src/hooks`

All hooks and related test is in there

#### `src/lib`

shadcn.ui related folder -> only contain twcss merge function

#### `src/pages`

All pages components and test are located here as folder and specific components in the page are put inside the related page

#### `src/routes`

React Router route config file is located here.

#### `src/utilities`

All utilities functions are located here e.g helper function
