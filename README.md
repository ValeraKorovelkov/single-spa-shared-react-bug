## Example project to reproduce the double loading of react as a shared dependency.

### How to run the project

1. Open first terminal window:
```shell
cd root-app
npm i
npm start
```

2. Open second terminal window:
```shell
cd app
npm i
npm start
```

3. Open `http://localhost:9001/` in the browser
4. Open Network tab and see react loads twice.
