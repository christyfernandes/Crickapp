# Cricket App

This is a cricket app built with angular 2, node, express.
* It provides you cricketers playing statistics 
* You can serach by player name or go to all players list to see all available players
* New matches that are going to start along with teams,time and status of match
* Old matches recently played along with teams,status and status of match
* Match calendar or schedule 

## Built With

* [Angular](https://angular.io/guide/quickstart) - Javascript framework used from front-end
* [Node](https://nodejs.org/en/docs/) - Javascript framework used from back-end
* [Express](https://expressjs.com/en/starter/installing.html) - Express is a minimal and flexible Node.js framework

## Getting Started

Follow the below instrunctions to get **Cricket app** running on you local machine

### Prerequisites

Both the CLI and generated project have dependencies that require **Node 6.9.0** or higher, together with **NPM 3** or higher.

* To install node visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* NPM comes along with the node installation
* To verify node,npm installation and proper versions visit [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)



### Installing

BEFORE YOU INSTALL: please read the [prerequisites](#prerequisites)

```
npm install -g @angular/cli@latest
```

Once You install all dependencencies node, npm and angular cli just verify them 


### Steps for running the cricket app back-end 

1. Open command prompt and land inside the **crick-backend** folder and run 

    ```
    npm install
    ```

    The above step will install all the dependencies required for cricket app backend server to work.

2. Now start the server with the command

    ```
    npm start
    ```

    You should see something like below without any error

    ```
    path-to-cricket-app\Cricketapp\cric-backend>npm start

    > cric-backend@0.0.0 start C:\Users\christopher\Desktop\criccc\Cricketapp\Cricketapp\cric-backend
    > node ./bin/www

    -
    ```
3. If u see any error please check [prerequisites](#prerequisites) are properly installed  

    OR

    Check if you are in the proper directory before following the steps for running the cricket app backend.
    You should be inside **crick-backend** directory

    OR

    Make sure nothing is running on port 3000, because cricket app backend server is configured to run on **port 3000**

    OR

    remove the cricket app and take a fresh clone and try again 



## Running the cricket app front-end

1. Open command prompt and land inside the **crick-angular** folder and run 

    ```
    npm install
    ```

    The above step will take a while to complete and  install all the dependencies required for cricket app front-end.

2. Now run the following command

    ```
    ng serve
    ```

    The above step will take some time to build and serve the app once its done you should see something like below

    ```
    path-to-cricket-app\Cricketapp\cric-angular>ng serve
        ** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200 **
        Hash: 1ca5b588e7e0a8d79161
        Time: 16210ms
        chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 160 kB {5} [initial] [rendered]
        chunk    {1} main.bundle.js, main.bundle.js.map (main) 47.3 kB {4} [initial] [rendered]
        chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 129 kB {5} [initial] [rendered]
        chunk    {3} scripts.bundle.js, scripts.bundle.js.map (scripts) 128 kB {5} [initial] [rendered]
        chunk    {4} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.78 MB [initial] [rendered]
        chunk    {5} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]
        webpack: Compiled successfully.
    ```

3. Open browser and type **localhost:4200** 

4. If u see any error please check [prerequisites](#prerequisites) are properly installed 

    OR

    Check if you are in the proper directory before following the steps for running the cricket app front-end.
    You should be inside **crick-angular** directory

    OR

    Make sure nothing is running on port 4200, because cricket app frontend server is configured to run on **port 4200**

    OR

    remove the cricket app and take a fresh clone and try again 


## Api Source
[http://www.cricapi.com/](http://www.cricapi.com/) - Javascript framework used from front-end


## Authors

Christopher B Fernandes  
Software Engineer, web developer, front-end developer

## License

This project is has no license

