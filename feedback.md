# Project 3 Evaluation
[inline code comments]()
## Back-end Technology
**2: Performing**
>Includes 2 models

Good job here. You have at least two fully functional models. I did notice, however, that you reference some models that don't actually exist in your schema, like comments and users. If you're not going to use those models, I would remove references to them from your code. I would strongly encourage you to build those out though -- your application would benefit from the added functionality! I would also like to hear you talk about the "Home" model and why you opted to use it.

## Front-end Technology
**2: Performing**
>Front-end makes appropriate use of Angular controllers and states with ui-router. Includes 1 custom directive

Kudos on integrating Angular into a singular Rails app. That's not an easy thing to do. A next step (that is dependent on changes on the back-end) would be to implement comments or some other child model into the front-end.

## Code Quality
**2: Performing**
>Code is well-formatted, well-named, and contains few style / quality issues

Had no issue reading through your code. I did notice that there a lot of files that don't come by default with rails that you're not using (e.g., `mailer.html.erb` in `views/layouts`). I'm guessing these may have come from using `rails scaffold`. Nothing wrong with using that as long as you're aware of what exactly it does and already have a good understanding of implementing Rails CRUD. It does more than just set up RESTful routes.

## Deployment and Functionality
**2: Performing**
>Application contains no major errors, is deployed correctly, and contains a custom Heroku app name appropriate for the app.

The deployed site seems to be working just like the local one. No complaints here.

## Planning / Process / Submission
**0: Incomplete**
>No submission received, or submission does not contain basic documentation of planning (ERD, wireframes, commit history, etc)

I don't see any `planning` folder or populated `readme.md`. Let me know if I'm not looking in the right place / when you submit it and I'll be happy to update this feedback.
