FROM nginx:alpine
LABEL version="1.0.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/company-x-ui-a7 .

EXPOSE 8080
