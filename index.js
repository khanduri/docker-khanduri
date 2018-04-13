/*
DUMMY FILE

Without this file I get the following error when building through webpack:

ERROR in multi ./app/static/scripts/index.jsx ./
Module not found: Error: Can't resolve '/Users/pkrypto/projects/docker-khanduri/' in '/Users/pkrypto/projects/docker-khanduri'
resolve '/Users/pkrypto/projects/docker-khanduri/' in '/Users/pkrypto/projects/docker-khanduri'
  Parsed request is a directory
  using description file: /Users/pkrypto/projects/docker-khanduri/package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
  after using description file: /Users/pkrypto/projects/docker-khanduri/package.json (relative path: .)
    using description file: /Users/pkrypto/projects/docker-khanduri/package.json (relative path: .)
      as directory
        existing directory
          using path: /Users/pkrypto/projects/docker-khanduri/index
            using description file: /Users/pkrypto/projects/docker-khanduri/package.json (relative path: ./index)
              no extension
                Field 'browser' doesn't contain a valid alias configuration
                /Users/pkrypto/projects/docker-khanduri/index doesn't exist
              .js
                Field 'browser' doesn't contain a valid alias configuration
                /Users/pkrypto/projects/docker-khanduri/index.js doesn't exist
              .jsx
                Field 'browser' doesn't contain a valid alias configuration
                /Users/pkrypto/projects/docker-khanduri/index.jsx doesn't exist
[/Users/pkrypto/projects/docker-khanduri/index]
[/Users/pkrypto/projects/docker-khanduri/index.js]
[/Users/pkrypto/projects/docker-khanduri/index.jsx]
 @ multi ./app/static/scripts/index.jsx ./


I'm not sure how to solve it.

*/