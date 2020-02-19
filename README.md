# React&Python simple messenger app
* The simple app for online  messaging. First, user needs to register in app, then can send/receive messages.

## Main stack
The app uses React (frontend) and Python3 (backend).
For frontend part you need NodeJs installed to run/install npm packages. To install, please go to [NodeJS](https://nodejs.org/en/).
For backend part you need Python 3 version. To install, please go to [Python](https://www.python.org/).

## Scripts to get started

* To start a server part, please run:
```
cd server/
python3 -m venv ./venv
source ./venv/bin/activate
pip install -r requirements.txt 
python3 app.py
```
* When you're finished working with the app, to go out of env, please run
```
deactivate
```
* To start the frontend part, please run:
```
cd client/
npm install
npm start
```
* As a result, it runs the app in the development mode. Open [App](http://localhost:3000) to view it in the browser.

![](demo.gif)
