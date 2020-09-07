---
title: 'How to manage multiple Node.js versions on macOS X'
description: 'How to manage multiple Node.js versions on macOS X using homebrew.'
published: true
publishedAt: 2020-03-19T18:13:00.000Z
updatedAt: 2020-03-19T18:13:00.000Z
tags:
  - Quick Tip
  - Node
keywords:
  - macOS X
  - homebrew
authors:
  - 'Marc Stammerjohann'
---

Here is a quick tip on how to install multiple [Node.js](https://nodejs.org/en/) versions (10, 12, 13 etc.) on macOS X and how to switch between them for your applications.

## Installing Node via Homebrew

Install multiple Node versions using [Homebrew](https://brew.sh/). To install Homebrew run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Now install the Node versions you need using `brew`:

```bash
brew install node@<version>

# latest version
brew install node

# LTS 12
brew install node@12

# 10
brew install node@10
```

To check the default node version and installation path:

```bash
node -v # v13.11.0
which node # /usr/local/bin/node => /usr/local/opt/node@<version>/bin/node
```

## Switch Node via alias

Add an alias to your `.zshrc` or `.bash_profile` for each installed Node version. Node is installed at `/usr/local/opt/node@<version>/bin`

```bash
alias node13='export PATH="/usr/local/opt/node@13/bin:$PATH"'
alias node12='export PATH="/usr/local/opt/node@12/bin:$PATH"'
alias node10='export PATH="/usr/local/opt/node@10/bin:$PATH"'
```

Now, to switch between the node versions, enter an alias `node10` in your terminal. Execute `node -v` to verify that you are now using the correct node version.

> Note: Alias **only** changes the Node version in the used terminal instance
