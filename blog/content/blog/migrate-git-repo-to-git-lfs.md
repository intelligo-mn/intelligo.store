---
title: 'Migrate Git Repository to Git Large File Storage (LFS)'
description: 'How to migrate an existing Git Repository to use Git Large File Storage (LFS).'
published: true
publishedAt: 2020-04-26T15:45:00.000Z
updatedAt: 2020-04-26T15:45:00.000Z
tags:
  - Quick Tip
  - Git
keywords:
  - Git LFS
  - GitHub
authors:
  - 'Marc Stammerjohann'
---

If you ever come across this error while pushing an existing repository or a large file to GitHub...

`remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.`

... here is how to setup [Git Large File Storage (LFS)](https://git-lfs.github.com/) and migrate your Git history.

## 1. Download and Install Git LFS extension

Download and install the [Git LFS](https://git-lfs.github.com/) extension, you can also install it using [Homebrew](https://brew.sh/).

```bash
brew install git-lfs
```

## 2. Setup Git LFS for your current user account

```bash
git lfs install
```

## 3. Select files to be managed by Git LFS

```bash
# track files by file type
git lfs track "*.zip"

# track directories by path
git lfs track "assets/*"

# track entire directory trees
git lfs track "assets/**/*"

# track file by path
git lfs track "path/to/file"
```

`git lfs track` will add the files tracked by Git LFS to `.gitattributes`. It is important to add `.gitattributes` to Git.

```bash
git add .gitattributes
```

> **Note**: Tracking files are **not** automatically converting these files from your Git history or other branches.

## 4. Migrate Git History

If you have existing files in your Git history or in other branches you need to migrate those files to be tracked by Git LFS as well. Git LFS provides a command [git lfs migrate](https://github.com/git-lfs/git-lfs/blob/master/docs/man/git-lfs-migrate.1.ronn?utm_source=gitlfs_site&utm_medium=doc_man_migrate_link&utm_campaign=gitlfs) with various options depending on your use case.

Before performing your migration you can perform a dry run with `git lfs migrate info [options]`. Use the option `--everything` to perform a migration in every branch. If you only want to migrate files you added before with `git lfs track` you will add those with the `--include="*.zip,src/assets"` flag comma separated.

Here is an example which performs a migration for all Zip-files.

```bash
# dry run of your migration
git lfs migrate info --everything --include="*.zip"

# perform migration
git lfs migrate import --everything --include="*.zip" --verbose
```

Now go ahead and push your repository to GitHub. If successfully pushed and setup GitHub displays the following tag for each file tracked by Git LFS.

![Stored with Git LFS on GitHub](assets/img/blog/migrate-git-repo-to-git-lfs/optimized/stored-with-git-lfs.png)
