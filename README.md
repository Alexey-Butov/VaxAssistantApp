# VaxAssistantApp

a short summury about my jurney in this project.
to be honest i'm very dissapointed by the end results.
but I will try to describe what I did the best way possible.

frontend works.

I've downloaded PgAdmin and all the postgres server installations
I've menaged to create the front end and to define a database and it's migrations
I've defined the models and the configurations
I've defined views and path urls

the data is being sent to the database and is saved to it if it passes validation.
there is a bug that the been infected with covid Checkbox needs Capital letters at server side but the react sends non capital true and false
this causes a problem so I tried to translate it to a string but it didn't solve the problem
on top of that the data from the checkbox that was defined as boolean is sent only when it's checked.

I used Form submit to send the data to the server but couldn't find how to get the results back and render it to the screen.

I also couldn't concatenate the checkboxes of the background deseses into one string.

another problem was to understand how to fit all cities of the world into one dropdown.
I thought about building it from a Json but couldn't find an API to fetch this data from
and there was nothing about adding a country so given the little time I had I just added Afew random cities of my choice to the dropdown.

to run the project open 2 terminals one for react and another for the Django
for the react project you need to install the node modules and run 
npm start

for the django run:
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
