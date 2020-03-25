## Marketgeek

Marketgeek app admin.

| [Requirements][] | [Development][] | [Deploy][] | [Author][] | [Contributors][] | [License][] |
|---|---|---|---|---|---|

### Related projects

* [Android app](https://github.com/opengineer/marketgeek)

### Requirements

* [MongoDB](https://docs.mongodb.com/manual/installation/)

* [Node.js](https://nodejs.org/en/download/)

* [Git](https://git-scm.com/download/win)

### Development

Clone repository `git clone https://github.com/opengineer/marketgeek-admin.git && cd marketgeek-admin`

Install dependencies `npm install`

Copy `default-example.json` to `default.json`

Database URL and paste it into the `DB_URL`

Add `SECRET=<session-secret>`

Start up your game by running node `node app.js`

Web browser [this link](http://localhost:5000) to test the game.


## Deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Deploy to Heroku

<img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png" width="150">

- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the mLab add-on and configure the `DB_JISHO` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

**Note:** To install Heroku add-ons your account must be verified.

---

<img src="https://mlab.com/company/img/branding/mLab-logo-onlight.svg" width="150">

- Open [mlab.com](https://mlab.com) website
- Click the yellow **Sign up** button
- Fill in your user information then hit **Create account**
- From the dashboard, click on **:zap:Create new** button
- Select **any** cloud provider (I usually go with AWS)
- Under *Plan* click on **Single-node (development)** tab and select **Sandbox** (it's free)
 - *Leave MongoDB version as is - `2.4.x`*
- Enter *Database name** for your web app
- Then click on **:zap:Create new MongoDB deployment** button
- Now, to access your database you need to create a DB user
- Click to the recently created database
- You should see the following message:
 - *A database user is required to connect to this database.* **Click here** *to create a new one.*
- Click the link and fill in **DB Username** and **DB Password** fields
- Finally, in `default.json` instead of `mongodb://localhost:27017/test`, use the following URI with your credentials:
 - `db: 'mongodb://USERNAME:PASSWORD@ds027479.mongolab.com:27479/DATABASE_NAME'`

### Author

 [Turtuvshin](https://github.com/tortuvshin)

### Contributors

You may contribute in several ways like creating new features, fixing bugs, improving documentation and examples
or translating any document here to your language. [Find more information in CONTRIBUTING.md](CONTRIBUTING.md).

### License

Marketgeek is open-sourced software licensed under the [MIT](LICENSE).

**[⬆ back to top](#memorize)**

[Requirements]:#requirements
[Development]:#development
[Deploy]:#deploy
[Author]:#author
[Contributors]:#contributors
[License]:#license
