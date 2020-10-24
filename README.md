# 🤖 Poet bot

A robot that creates a beautiful and tragic poem and post on social networks.

## ⚙️ Installation

```
  # git clone https://github.com/RaphaelOliveiraMoura/stopots-bot.git
  # npm install
  # npm run poet {tone} {social network} {social network}
```

{tone} is a category of the poem that will be generated.<br>
There are 4 options of tone:

- Sad
- Dark
- Love
- Heartbreak

{social network} is the location where the poem will be published.<br>
Available: facebook and twitter

Example of an execution command:

```
# npm run poet sad facebook
```

# Environment

To make a publish in your social networks, the bot will need your credentials to signin and write the post. So, in the .env file, add the following lines with your email and password of facebook and/or twitter account.

- facebook credentials

```
FB_EMAIL=example@email.com
FB_PASSWORD=password
```

- twitter credentials

```
TW_EMAIL=example@email.com
TW_PASSWORD=password
```
