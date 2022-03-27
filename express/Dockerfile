FROM node:alpine

COPY package.json ./

RUN npm install

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]