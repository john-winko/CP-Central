# Group Project - Code Platoon Central 

## Setup

### Clone repo (take note of ending dot if you don't want to make another subfolder)
~~~
git clone https://github.com/john-winko/CP-Central.git .
~~~

~~~
python -m venv .venv
~~~

#### (Windows) Go into virtual environment
~~~
.venv/scripts/activate.ps1
~~~

#### (Mac/Linux) Go into virtual environment
~~~
source venv/bin/activate
~~~

~~~.ve
pip install -r requirements.txt
~~~
Make .env file (from template)
~~~
cp .env.sample .env
~~~

### Update .env file
- Add django secret key
- Set DEBUG=true for local development
- Set REACT_APP_URL_PREFIX=http://localhost:8000 (or wherever you would run the django server)


~~~
python manage.py migrate
~~~


~~~
npm install
~~~

~~~
python manage.py runserver
~~~

~~~
npm run start
~~~

## (Optional) if you want to serve the app from django or host in cloud

change .env variables (changing debug is optional if not deploying)
~~~
DEBUG=false
REACT_APP_URL_PREFIX=
~~~

~~~
npm run build
~~~
