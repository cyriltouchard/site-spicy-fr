# 🌐 Configuration du domaine spicy-fr.com sur Vercel

## ✅ Étape 1 : Sur Vercel (Dashboard Web)

### 1.1 Accéder aux paramètres du domaine

1. Allez sur : https://vercel.com/dashboard
2. Cliquez sur votre projet **site-spicy-fr**
3. Cliquez sur l'onglet **"Settings"** (en haut)
4. Dans le menu de gauche, cliquez sur **"Domains"**

### 1.2 Ajouter le domaine

1. Vous verrez un champ texte avec "Add Domain"
2. Tapez exactement : `spicy-fr.com`
3. Cliquez sur le bouton **"Add"**
4. Vercel va vous montrer une page avec les configurations DNS

## ✅ Étape 2 : Configuration DNS sur GANDI 🎯

### 2.1 Se connecter à Gandi

1. Allez sur : **https://admin.gandi.net**
2. Connectez-vous avec vos identifiants
3. Vous arrivez sur le tableau de bord

### 2.2 Accéder aux enregistrements DNS de spicy-fr.com

**Méthode 1 - Via le menu principal :**

1. Dans le menu de gauche, cliquez sur **"Nom de domaine"** ou **"Domain names"**
2. Cliquez sur **spicy-fr.com** dans la liste
3. Cliquez sur l'onglet **"Enregistrements DNS"** ou **"DNS Records"**

**Méthode 2 - Directe :**

1. Allez directement sur : https://admin.gandi.net/domain/spicy-fr.com/records

### 2.3 Modifier les enregistrements DNS

Vous allez voir une liste d'enregistrements existants. Voici ce qu'il faut faire :

#### Étape A : Supprimer les anciens enregistrements A (si existants)

1. Cherchez les lignes avec **Type "A"** qui pointent vers **@ ou www**
2. Cliquez sur l'icône **🗑️ (poubelle)** ou **"Supprimer"** à droite
3. Confirmez la suppression

#### Étape B : Ajouter le premier enregistrement (domaine racine)

1. Cliquez sur le bouton **"+ Ajouter un enregistrement"** ou **"Add Record"**
2. Remplissez :
   - **Type** : Sélectionnez **A**
   - **Nom** : Tapez **@** (c'est le domaine racine)
   - **Valeur** ou **IPv4 Address** : **76.76.21.21**
   - **TTL** : Laissez **3 heures** (par défaut) ou mettez **1800**
3. Cliquez sur **"Ajouter"** ou **"Create"**

#### Étape C : Ajouter le deuxième enregistrement (www)

1. Cliquez à nouveau sur **"+ Ajouter un enregistrement"**
2. Remplissez :
   - **Type** : **CNAME**
   - **Nom** : **www**
   - **Valeur** : **cname.vercel-dns.com**
   - **TTL** : **1800** (ou laissez par défaut)
3. Cliquez sur **"Ajouter"**

### 2.4 Valider les modifications

**🔍 Vérifiez que vos enregistrements ressemblent à ça :**

| Type  | Nom | Valeur               | TTL  |
| ----- | --- | -------------------- | ---- |
| A     | @   | 76.76.21.21          | 1800 |
| CNAME | www | cname.vercel-dns.com | 1800 |

⚠️ **Les modifications sont automatiquement sauvegardées sur Gandi !**

### 2.5 Temps de propagation

- **Délai** : 5 à 30 minutes généralement
- Gandi est rapide, souvent c'est actif en 5-10 minutes

## ✅ Étape 3 : Vérification sur Vercel

1. Retournez sur Vercel → Settings → Domains
2. Vous devriez voir **spicy-fr.com** avec un statut **"Pending"**
3. Attendez 5-10 minutes
4. Rafraîchissez la page
5. Le statut devrait passer à **"Valid"** avec un ✓ vert

## ✅ Étape 4 : HTTPS automatique

Une fois le domaine validé :

- Vercel va automatiquement générer un certificat SSL
- Votre site sera accessible sur https://spicy-fr.com
- Délai : 2-5 minutes

## 🔧 En cas de problème

### Le domaine reste en "Pending" ?

- Attendez 1-2 heures (propagation DNS)
- Vérifiez que vous avez bien sauvegardé les enregistrements DNS
- Vérifiez avec : https://dnschecker.org/#A/spicy-fr.com

### Erreur "Invalid Configuration" ?

- Supprimez le domaine sur Vercel
- Attendez 5 minutes
- Réajoutez-le

### Besoin d'aide ?

Dites-moi chez quel registrar vous avez acheté le domaine, je vous donnerai des instructions spécifiques !

---

📝 **Note** : La propagation DNS peut prendre jusqu'à 48h, mais c'est généralement instantané avec les registrars modernes.
