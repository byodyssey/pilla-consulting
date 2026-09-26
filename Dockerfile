FROM nginx:alpine-slim

# Standart Nginx HTML papkasini tozalash va index.html ni ko'chirish
COPY index.html /usr/share/nginx/html/index.html

# Railway tayinlaydigan dinamik PORT bilan ishlashi uchun portni ko'rsatamiz
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
