### Playlist pour apprendre le express js

https://www.youtube.com/playlist?list=PL_cUvD4qzbkwjmjy-KjbieZ8J9cGwxZpC

---

Dans ce projet, tu peux regarder ce que j'ai fait aux fichiers:

- vite.config.ts (ajout d'un proxy)
- server.js (qui est le fichier api.js dans ton cas)
- Books.tsx (permet de fetch les données grâce à l'api)
- CreateBook.tsx (permet de créer un nouveau livre, toujours à l'aide de l'api)

---

Voici les commandes que tu peux utiliser pour ton api en local : 
applique les modifications fait à l'api instantanément: `npx codemon ./src/API/api.js`

OU, pour le déboggage : 
`DEBUG=express:* node ./src/API/api.js`, mais tu dois relancer toi même l'api à chaque modification
