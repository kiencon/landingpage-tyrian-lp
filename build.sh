#!/bin/bash
git pull;
pm2 stop 5;
rm -r .next;
npm run build;
pm2 start 5;
