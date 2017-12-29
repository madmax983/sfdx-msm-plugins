Making SFDX flow easier.

## Setup

Install plugin: `sfdx plugins:install sfdx-msm-plugin`

There's a prompt for 'y' because the package is unsigned.  If you're doing this in a CI environment where no user is at the keyboard, use `echo 'y' | sfdx plugins:install sfdx-msm-plugin` to get around that.  :)

---

## Usage

### unzip all your zipped static resources
`sfdx msm:static:unzip`

This crawls up to the top of your sfdx project, inspects your sfdx-project.json file, and then looks through all your package directories to find any static resources that are zipped files.

Then it creates (if you don't have one already) a folder called **resource-bundles** (a la MavensMate) and unzips them there, preserving the directory paths.

You did want to check those static resources into source, right? :)

---

### zip them all back up
`sfdx msm:static:zip`

Using the same methods, loops through the static resources again, and zips up their local equivalent from the **resource-bundles** folder

---

### Uploading a file
`sfdx msm:data:file:upload -f ~/Downloads/King.png -c 0011900000VkJgrAAF`

Uploads a local file at location `-f` and optionally names it, attaches it in Files or via Chatter.  Don't use -p and -c together.

---

### Setting a user's Chatter profile pic
`sfdx msm:user:photo -g Oscar -l Mayer -f ~/Downloads/King.png`

Sets the chatter photo for the user who has a first name Oscar and last name Mayer.  I used -g for first name (given name) since -f usually refers to a file elsewhere in sfdx commands.

---

### Manually set a password
`sfdx msm:user:password:set -u cg1 -p sfdx1234 -g Oscar -l Mayer`

Sets Oscar's password to be sfdx1234 in the scratch org whose alias is cg1.

---

### Retrieving a package, unzipping, converting
`sfdx msm:mdapi:package:get -u cg1 -p "Reporting Objects" -d testApp`

The quotes are optional unless you've got a space in the name.  -p is the package name as defined in the UI where you built the package.  -d defaults to force-app but you could store the package somewhere else in your source tree.

---

### Things you can't do:

zip/unzip an individual file (just use CLI zip...this is for doing a bunch in bulk!)


---

## Testing

`mocha tests --recursive --watch`