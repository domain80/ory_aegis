FROM node:22-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY package.json ./
RUN echo $(which pnpm)
RUN pnpm install

COPY . .

CMD [ "pnpm", "dev" ]