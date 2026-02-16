# 📧 Configuration du Formulaire de Contact

Le formulaire de contact est prêt à fonctionner ! Il utilise **Web3Forms** (gratuit, sans compte requis).

## 🚀 Activation en 3 étapes (2 minutes)

### 1️⃣ Obtenir la clé API Web3Forms

1. Va sur **https://web3forms.com**
2. Dans le formulaire sur la page d'accueil :
   - Entre l'email : **contact.spicyfr@gmail.com**
   - Clique sur "Get Access Key"
3. 🎉 Une clé API s'affiche immédiatement (format : `abc123-def456-ghi789`)
4. **Copie cette clé**

### 2️⃣ Ajouter la clé dans le code

1. Ouvre le fichier : `app/contact/page.tsx`
2. Trouve la ligne 20 environ :
   ```typescript
   const accessKey = "VOTRE_CLE_WEB3FORMS_ICI";
   ```
3. Remplace `VOTRE_CLE_WEB3FORMS_ICI` par ta clé (garde les guillemets) :
   ```typescript
   const accessKey = "abc123-def456-ghi789";
   ```

### 3️⃣ C'est tout ! ✅

Le formulaire fonctionne maintenant :

- Les messages seront envoyés à **contact.spicyfr@gmail.com**
- Limite gratuite : **250 messages/mois**
- Pas de vérification d'email nécessaire
- Fonctionne immédiatement

## 🔍 Tester le formulaire

1. Lance le site en local : `npm run dev`
2. Va sur : http://localhost:3000
3. Clique sur "Devenir Partenaire"
4. Remplis et envoie le formulaire
5. Vérifie la boîte mail **contact.spicyfr@gmail.com**

## 📝 Personnalisation (optionnel)

Dans `app/contact/page.tsx`, tu peux modifier :

- **Le sujet des emails** (ligne 33) :

  ```typescript
  subject: `🔥 Nouveau message de ${formData.name} - Site Spicy`,
  ```

- **Le nom d'expéditeur** (ligne 34) :
  ```typescript
  from_name: "Site Spicy - Formulaire Contact",
  ```

## ❓ Problèmes ?

**Le formulaire affiche une erreur ?**

- Vérifie que la clé API est bien copiée (pas d'espaces)
- Assure-toi d'être connecté à internet
- Vérifie la console du navigateur (F12) pour plus de détails

**Les emails n'arrivent pas ?**

- Vérifie les spams de contact.spicyfr@gmail.com
- Attends 1-2 minutes (parfois il y a un léger délai)
- Retourne sur web3forms.com pour vérifier que l'email est correct

---

🔥 **C'est prêt !** Le formulaire est maintenant fonctionnel et professionnel.
