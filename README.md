# React  and Python simple messenger app
* The simple app for sendind messages. First you need register in app. Then you can send message.

## Main stack
The app uses React on frontend part and Python3 on backend part.
For frontend part you need NodeJs. For install it please go to (https://nodejs.org/en/)[NodeJS].
For backend part you need Python 3 version. For install it please go to (https://www.python.org/)[Python]

## Scripts to get started

* To start server part, please run:
```
cd api/
python3 -m venv ./venv
source ./venv/bin/activate
pip install -r requirements.txt 
python3 app.py
```
* When you're finished
```
deactivate
```
* To start the frontend part, please run:
```
cd ui/
npm install
npm start
```
* Runs the app in the development mode. Open (App)[http://localhost:3000] to view it in the browser.

![](demo.gif)
