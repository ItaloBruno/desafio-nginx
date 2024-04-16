FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/src/app/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/src/app/wait-for

EXPOSE 3000

CMD ["./wait-for", "db:3306", "--", "node", "index.js"]
