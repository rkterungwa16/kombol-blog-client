# Blogging Platform


## Introduction
*  **`WorkList`** is an Laravel Powered web app built to enable users to create blog posts.
* You can find the link to the application here **[kombol-blog-platform](https://kombol-blog.herokuapp.com/)**.

*  It has the following features;
  *  Allows users to:
        *  Sign in or Sign up and logout when signed in
        *  Create a blog post.
        *  Edit a blog post.
        *  Delete a blog post
        *  Comment on a blog post
        *  Like and unlike a blog post
        *  Follow and unfollow a user

## Key Features
Based on project requirement, Worklist has the following features:

### Users
- Users can successfully create a new account by providing some signup details
- Registered Users can successfully login to the application
- A jsonwebtoken is generated on successful signup/login

### Blog Post
- A user can create a blog post
- A user can delete a blog post
- A user can edit a blog post
- A user can comment on a blog post
- A user can like and unlike a blog post


## Technologies
*  **[Laravel](https://laravel.com/)**
*  **[Angular](https://angular.io/)**
*  **[Postgres](https://www.postgresql.org/)**

## Documentation
For more in depth documentation see: **[here](https://kombolworklist.docs.apiary.io/)**

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone this repository on that directory.
    >`https://github.com/rkterungwa16/worklist`

*  Navigate to the repo's folder on your computer
  *  `cd kombol-blog-server/`
*  Install the app's dependencies. For best results, using a node package manager.
  *  `composer install`
* 
    >In order to use app dependencies, you need to install it through **composer**. You also need to have **php** installed on your system.

* Run the app
  *  `php artisan serve`
That should start your server. You are ready to go from there

## Contributing to the Project
Contributions are welcome and appreciated. To contribute
* Fork this repository [here](https://github.com/rkterungwa16/worklist/)
* Open a terminal and execute the following command to make a local copy
`$ git clone git@github.com:your-username/kombol-blog-server`
* Run this code to navigate into the folder `cd kombol-blog-server`
* Make your contributions to your local repo
* Add a connection to the original repo using
`$ git remote add repo_nickname https://github.com/rkterungwa16/kombol-blog-server/`
* Note that `repo_nickname` is a nickname you choose.
* Run `git remote -v` to verify that the connection is established
* Make your contributions to your local copy of the project
* Run `git add` and `git commit` to commit your contributions to the project
* Run `git push` to push your changes to your copy of the repository
* If you feel you've made a contribution that will improve the project, raise a Pull Request against the `develop` branch.
* Be descriptive enough about your contributions so other contributors will understand what you've done
* I look forward to your Pull Requests!

## Limitations
  kombol-blog's current limitations (aka features in development) include:
  - User cannot delete comments
  - User cannot edit comments

## License
  This project is available for use and modification under the MIT License. See the LICENSE file for more details.