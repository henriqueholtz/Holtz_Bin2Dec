# https://blog.codeexpertslearning.com.br/dockerizando-uma-aplica%C3%A7%C3%A3o-react-js-f6a22e93bc5d
FROM node:14
WORKDIR /app

# Add `/app/node_modules/.bin` to the $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Installing application dependencies and storing in cache 
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

# Start application
CMD ["npm", "start"]

# build and run:
# docker build -t holtzbin2dec:dev .
# docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm holtzbin2dec:dev