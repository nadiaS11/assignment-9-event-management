# The Mingle
### https://the-mingle.web.app/ (firebase)
### https://the-mingle.netlify.app (netlify)

- In the header, the ui shows the user name, profile pic, and log-out button when there's no user logged in. Both gallery and Our Speakers routes are set to private and only show up for logged-in users otherwise redirect to the login page.
- In the login page, an invalid email or password returns a toast while if any error occurs in terms of the wrong email and password the toast shows an error according to the Firebase.
- On the home page, the View details button in the service section shows detailed info of each service which includes thumbnail, benefits, key features, pricing, and user testimonial
- On the home page, a marquee with the customer component and testimonial section are added as two bonus sections outside the navbar, banner, services, and footer.
- In Our Speakers route a loader loads speakers.json file and shows information about 6 speakers who are related to the Tech field. It includes their picture, name, position, company, and a short bio. 
