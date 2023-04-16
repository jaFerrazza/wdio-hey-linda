
# Hey Linda Meditation app e2e automation

This repo contains e2e tests that validate expected behavior for the Hey Linda app. 

The scenarios automated are available [here.](https://docs.google.com/spreadsheets/d/1kh9sRQfI4VhKRPVMaDxbzbUYrPlbLLpeU9SyYRyJKK8/edit?usp=sharing)

Framework uses the following stack:

- Node
- Babel
- Javascript
- WebDriverIO
- Appium



## Constraints

The original idea was to automate the [Hey Linda app](https://github.com/heylinda/heylinda-app) using Detox and Javascript. The problem arises on how Detox interacts with the app being tested, Detox needs a build in order to function, actually, as part of their set up process, you would need to have access to the build process. The app, while being open source and available for anyone to contribute, uses [Expo](https://docs.expo.dev/) to generate their dev/qa/production builds and in order to have debug build, you'd need access to the Hey Linda project on Expo, which at the moment of writing this, is unaccessiable.  

### How were the test implemented then?
An APK was searched through the internet, said APK has the app build and all the assets, the problem is that is not hooked into any backend and doesn't have access to any audio data. The tests implemented are a result of that, since the Stats screen is the only that works without needing to connect to any backend, the tests were able to be developed without any issues.
## Run Locally

### Dependencies needed

Before running the project, you need the following dependencies in your local:

- Appium 2 (used in order to develop the e2e tests)
``` bash
npm install -g appium@next 
```
- UiAutomator2 (is a driver for Android devices)
``` bash
appium driver install uiautomator2
```
- Android Studio for the android emulator, available [here](https://developer.android.com/studio)
- The ANDROID_HOME variable needs to be set in your local machine
- ADB for device management 
``` bash
 brew install android-platform-tools
```
Android Studio and ADB are used for device emulation and management

### Install dependencies

Node dependencies

```bash
  npm install
```

To install the app on the emulator, with the emulator opened, run the following command:
The bash file installs the Hey Linda app in the emulator by installing all the apks in the /app folder.
```bash
  bash install.sh
```

To execute the tests on the emulator:

```bash
  npm run wdio
```

To generate reports:
```bash
  npm run generate-report
```

To displayed the reports on the browser:
```bash
  npm run open-report
```


## Acknowledgements

 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Hey Linda app](https://github.com/heylinda/heylinda-app)
 - [WebdriverIO + Appium boilerplate](https://github.com/webdriverio/appium-boilerplate)


## Authors

- [@jaFerrazza](https://github.com/jaFerrazza/)

