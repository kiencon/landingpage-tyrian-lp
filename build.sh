#!/bin/bash
pm2 stop 5;
rm -r .next;
nvm use v22.11.0;
npm run build;
pm2 start 5;
