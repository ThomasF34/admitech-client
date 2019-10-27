# Admitech

![Logo admmitech](https://user-images.githubusercontent.com/32480223/67026906-f68d5280-f108-11e9-8d42-b9a836db4a4b.png)

Recrutment platform for IG & DO courses in Polytech Montpellier

Team : Lucas Gonçalves, Inès Missoum, Fatima Machhouri, Thomas Falcone, Raphael
Luciano, Martin Cayuelas

# Deploy

For information:
```
apps:create admitech
apps:create test-admitech

proxy:ports-add admitech http:80:3000
proxy:ports-add test-admitech http:80:3000
```