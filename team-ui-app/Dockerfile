
# NGINX Web Server
FROM nginx:alpine

# Node server
# FROM node:10.16.0

# Build Angular App for Production
# RUN npm install && npm run build --prod

#  Replace Config to nginx Config
COPY nginx.conf /etc/nginx/nginx.conf

#  Changed to respective directory
WORKDIR /usr/share/nginx/html

#  Copy Dist Folder to nginx  server
COPY dist/team-ui-app/ .