# Skills from Torre.co

Skills from Torre it's made to complete the requeriments about the aplication as senior software developer in Torre.

The intention of this web application developed with vue.js and Java spring-boot it's to generate an interest about the plattform and get to see some of your data with your proficient skills related to some work experience the user register in Torre.

So this responsive app shows a little glimpse of the data about the user that's in the Torre plattform and possibly awake more interest about the job opportunities present in Torre, also show a general perspective about the jobs available and a very simple way to use this web application.

Project Links:

[Github - Back-end](https://github.com/travs15/BackTorreApp)

[Github - Front-end](https://github.com/travs15/FrontTorreApp)

Deployment Links

[Heroku - Back-end](https://torretechback.herokuapp.com/)

There's no main page in the back end app but the way to try to an end point is:

Get user info:
https://torretechback.herokuapp.com/technicalback/api/person/alejandroreyespena

Get skill info:
https://torretechback.herokuapp.com/technicalback/api/person/alejandroreyespena/ANa01exy

[Heroku - Front-end](https://torretechfront.herokuapp.com/)

Links to Documentation

[Wireframe](/wireframe.jpg)

[Use Case Diagram](/UseCaseModel.PNG)

[Components Diagram](/ComponentTechApplication.pdf)

[Progress](/Development_progress.log)

# If I had more time...
I would have improved the way that the application interacts with the user putting on, some more feedback about the functionalities presented in the web app, also I would like to use the available packages in the net to implement animations in the web site, I think this would make a more likeable page to the final user.

Thinking about other important features that the app may have like, the accesibility for non "typical" users and other ways they have to interact with the web page, currently there's some tags and attributes in Html that make life easear for some people that may need it.

I thought this app didn't need security management because it manages open information that is exposed by Torre, but in a larger application and sending other type of sensitive information  for the user I would use Json Web Tokens, cookies and the restrictions I could stablish in the vue router.


# FrontTorreApp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
