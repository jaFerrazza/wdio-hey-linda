
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
- ADB for device management, run `adb devices` to check that ADB has been installed successfully.
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

If running against an Intel based Mac, remove the `config.arm64_v8a.apk` from the command running inside the file.
```bash
  bash install.sh
```

To execute the tests on the emulator

If any issues come up, make sure that the `appium:deviceName` inside the `wdio.conf.js` file is set up to point to your local emulator. 

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
