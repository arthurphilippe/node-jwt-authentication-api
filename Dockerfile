FROM node

WORKDIR /app
COPY ./package.json ./
COPY ./ /app
RUN yarn

EXPOSE 4000

CMD [ "entrypoint.sh" ]
