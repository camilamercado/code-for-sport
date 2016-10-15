CODE FOR SPORT
------------------------------
React / Redux / React-Router / Heroku

Project cloned from @Mars [Create React App](https://github.com/mars/create-react-app-buildpack)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-ap/blob/master/packages/react-scripts/template/README.md).

Usage
-----

### Generate a React app

```bash
git clone https://github.com/camilamercado/Software_BoilerPlate my-app-name
cd my-app-name
```

### Make it a git repo

```bash
git init
```

At this point, this new repo is local, only on your computer. Eventually, you may want to [push to Github](#push-to-github).

### Create the Heroku app

```bash
heroku create my-app-name --buildpack https://github.com/mars/create-react-app-buildpack.git
```

✏️ *Replace `my-app-name` with a name for your unique app.*

This command:

* sets the [app name](https://devcenter.heroku.com/articles/creating-apps#creating-a-named-app) & its URL `https://my-app-name.herokuapp.com`
* sets the [buildpack](https://devcenter.heroku.com/articles/buildpacks) to deploy a `create-react-app` app
* configures the [`heroku` remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote) in the local git repo, so `git push heroku master` will push to this new Heroku app.

### Commit & deploy ♻️

```bash
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
```

### Visit the app's public URL in your browser

```bash
heroku open
```

### Visit the Heroku Dashboard for the app

Find the app on [your dashboard](https://dashboard.heroku.com).
