# Web Programming Final Project Group 91 NTU Biking 台大自行車網
組員： B10901171 黃品儒、B10901005 方世昕、B10901197 魏睿強

組內分工: 
1.黃品儒: 負責大部分後端、部分前端   2.方世昕: 負責登入畫面、加密   3.魏睿強: 負責google map頁面、部分前端

## Deployment link : 
https://lastfinaldeploy-production.up.railway.app/My-Bike

## Build Setup: Running code on your local computer (on localhost:3000)
```
# On your terminal
git clone <link-to-repository>

# Install frontend packages 
cd wp1111/final/NTU_Biking/frontend
yarn install

# Install backend packages
cd ../backend
yarn install 

# Set up environment variables (.env)
# Create a file .env in backend server
# Copy contents in .env.defaults to .env
# Paste the testing MONGO_URL into MONGO_URL=...

# Running the backend server
yarn server (typing 'yarn server' in the file NTU_Biking is also okay)

# Running the frontend react app
# On another terminal
cd <path-to-NTU_Biking>
yarn start
```

## Introducing our website 功能簡介
### Login feature
First time entering the website, you'll start with the main screen.

![Alt text](https://upload.cc/i1/2023/01/05/mhGFb0.png "Main page")

Click on the arrow below, a log in module will pop up.

![Alt text](https://upload.cc/i1/2023/01/05/XFpj4Q.png "Login page")

You can start by creating an account using the "Sign up" panel on the right of the screen, or use the test username and password provided as follows.

Email: JoeBiden@gmail.com
Password: USPresident

Don't worry, we won't directly get your password at backend. Your password would be hashed by bcyrpt before saving to database.

If login succeeds, you'll enter the homepage of our website.

### Homepage

![Alt text](https://upload.cc/i1/2023/01/05/kKEJuW.png "Homepage")

The four pages **Map, My Bike, Nearest Station, and Personal Settings** can be navigated from this page.

### The My Bike Page 
When login 1st time, the page looks like:

![Alt text](https://i.imgur.com/0dsWj9M.png "Initial Login Page")

The page greets you with Welcome! How nice!

Now, scrolling dowards, you can reach use our major features of parking and riding your bike.

Initially, your bike is given the "Riding" state. Once you've decided to park, enter your parking spot in the text block "Parking Spot" (currently, you can only park at stations on the list). Look around. How many bikes are there? Rate the number of bikes in the rating stars below. Now, press the "Park my bike" button. You'll receive a success message!

![Alt text](https://i.imgur.com/vRvUQTP.png "Park your bike demo")

Hopefully, you've got the success message from the database. If somehow, you forgot to enter the parking spot or rate the crowdedness of bikes, the will be an error message on the page!

![Alt text](https://i.imgur.com/bkTnt9F.png "Park your bike error demo")

When you finished your class, it's time to ride your bike to the next position! Click on the "Ride my bike" button to ride your bike!

![Alt text](https://i.imgur.com/KyjK1Oa.png "Ride your bike demo") 

You might worry if your class gets a bit long and if your website automatically closes. That's alright, the data of your bike is safely stored in mongodb and would not disappear automatically. If you login to the website and go to the My Bike page, you'll see the information again.

[Note] If your email did not pop out on the title of the page or the page is behaving like you're a new user, try tapping the blue "Refresh" button on the top of the page.

### Nearest Station Page

![Alt text](https://upload.cc/i1/2023/01/05/vG9M4F.png "Nearest Stations demo") 

Shows the available parking stations from near to far. The colors of the spaces left icon can be interpreted as follows:

Green  : 'Empty 車位很空',
Yellow : 'Plenty of spaces 仍有許多車位',
Orange : 'Normal/Some spaces left 尚有一些車位',
Red    : 'Full of bikes 很多腳踏車',
Purple : 'No spaces left 無位可停',

The color shown is the latest information updated from any users using NTU_Biking.

### Map page

![Alt text](https://upload.cc/i1/2023/01/05/iX6Dn5.png "Map demo") 

The red location icon (near 捷運大安站) indicates where we are at now, and all the other filled location icons tells us where the available parking spots in NTU are. To navigate on the map faster, you can use the little white circle on the corner of the page. You will reload the page, get your current bike position, change the style of the map, get your current position, or show/hide the available parking spots.

When clicking a parking spot, a model will pop out.

![Alt text](https://upload.cc/i1/2023/01/05/vVy1Cq.png "Map demo")

You can select the "Park In" button to park in, or "Navigate" to let google find a route from your current position to this station.

### Personal Settings page

![Alt text](https://upload.cc/i1/2023/01/05/Ev3BPk.png "Map demo") 

 You can set your new password on this page!
