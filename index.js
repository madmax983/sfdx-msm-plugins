const zip = require('./commands/zipStatic.js');
const unzip = require('./commands/unzipStatic.js');
const upload = require('./commands/uploadFile.js');
const userPhoto = require('./commands/userPhoto.js');
const packageRetrieve = require('./commands/packageRetrieve.js');
const passwordSet = require('./commands/passwordSet.js');
const orgCreate = require('./commands/orgCreate.js');

(function () {
  'use strict';

exports.topics = [{
    name: 'unzipStatic',
    description: 'unzips zipped static resources'
  },{
    name: 'zipStatic',
    description: 'zips static resources'
  },{
    name: 'uploadFile.js',
    description: 'uploads files'
  }, {
    name: 'userPhoto.js',
    description: 'set user Chatter photos'
  },
  {
    name: 'packageRetrieve.js',
    description: 'retrieve package from existing org'
  },
  {
    name: 'passwordSet.js',
    description: 'set the password for a user in a scratch org'
  },
    {
      name: 'orgCreate.js',
      description: 'creates an org, but with a friendlier username than the default version'
    }];

  exports.namespace = {
    name: 'msm',
    description: 'commands from Shane McLaughlin @mshanemc'
  };

  exports.commands = [
    unzip,
    zip,
    upload,
    userPhoto,
    packageRetrieve,
    passwordSet,
    orgCreate
  ];

}());