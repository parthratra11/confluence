# Confluence '24

Confluence is the name of the annual fest of Hansraj College, University of Delhi.
This repo is for the website of the same.

## Architecture

This is a simple static website, without many moving parts. It is generally considered a good practice to decouple content and the code. I initially was gravitating towards such a set-up using Keystone.js. I was hoping to expose a GraphQL API to serve the content, with Keystone.js also providing an admin dashboard for data entry and manipulation out-of-the-box. That set-up was turning out to be time-consuming, and, thus, we find ourselves in this rather unwanted situation of having our data and code being figuratively intertwined.

Still, for what it's worth, there is a directory-level division between the logic and the content, which you can appreciate for yourself by browsing the files.

## Contributions

If you're looking at this, chances are you wish to make changes to the Confluence website. Also, it is perhaps likely that the nature of the changes that you wish to make is "content-oriented", that is to say, you wish to provide accurate content for the website. Here are the steps to do just that:

1. Clone this repository (assuming you are a contributor). You may be prompted to login.
2. Make the desired changes locally by editing the `src/content/constants.ts` file appropriately.
3. If some images are to be added, place them in the appropriate directory and then run `./minify-images.bash` from Git Bash (in the root directory of this project). This will minify the images, making the website faster. Do not skip the minification.
4. Commit your changes in this format: `content: <message>`. If your commit message is not in this format, it will not be accepted by Husky. Sample commit message: `content: add information about artists`. (Bonus: Write messages in the imperative case, i.e. "add" instead of "added" in the aforementioned example. This is considered a good practice.)
5. Push your changes back using `git push origin main`. If the push is not successfull, pull changes into your local repo using `git pull origin main`, and then try pushing back again. (Resolve any merge conflicts if there are some, although that is not very likely for this project.)
6. Relax and rejoice.
