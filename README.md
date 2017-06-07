# HAPI INIT - Authentication Plugin

This plugin makes it easy to authenticate via HTTP Basic Auth.

## Usage

Install via npm:

    $ npm install --save hapi-init-auth

Require authentication:

    // Configure users, can be multiple: Template code here.
    const users = {
      {{username}}: {
        username: '{{username}}',
        password: '{{encryted password}}',
        name: '{{name}}',
        id: '{{id}}'
      }
    };

    const Auth = require('hapi-init-auth');

    // In HAPI registration
    server.register([], (error) => {
      if (error) {
        throw error;
      }

      server.auth.strategy('simple', 'basic', {
        validateFunc: new Auth(users)
      });
    });
