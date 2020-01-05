FROM node:12.14.0-alpine3.10

COPY dist/index.js /opt

CMD ["node", "/opt/index.js"]