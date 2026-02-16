#!/bin/bash

# Script Bash pour créer un nouveau site streamer
# Usage: ./create-streamer-site.sh nom_du_streamer

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

if [ -z "$1" ]; then
    echo -e "${RED}❌ Erreur : Nom du streamer requis${NC}"
    echo "Usage: ./create-streamer-site.sh nom_du_streamer"
    exit 1
fi

STREAMER_NAME=$1
STREAMER_NAME_CLEAN=$(echo "$STREAMER_NAME" | sed 's/[^a-zA-Z0-9_-]//g')
NEW_SITE_NAME="site-$STREAMER_NAME_CLEAN"
SOURCE_PATH="."
DEST_PATH="../$NEW_SITE_NAME"

echo -e "${CYAN}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║   🌶️  GÉNÉRATEUR DE SITE STREAMER                     ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${YELLOW}📋 Configuration:${NC}"
echo -e "   Nom du streamer : ${STREAMER_NAME}"
echo -e "   Nom du projet   : ${NEW_SITE_NAME}"
echo -e "   Dossier cible   : ${DEST_PATH}"
echo ""

# Vérifier si le dossier existe déjà
if [ -d "$DEST_PATH" ]; then
    echo -e "${RED}❌ Erreur : Le dossier '$DEST_PATH' existe déjà !${NC}"
    echo -e "${RED}   Supprimez-le ou choisissez un autre nom.${NC}"
    exit 1
fi

# Confirmation
echo -e "${YELLOW}⚠️  Le script va créer le nouveau site dans : $DEST_PATH${NC}"
read -p "Continuer ? (o/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Oo]$ ]]; then
    echo -e "${RED}❌ Annulé par l'utilisateur.${NC}"
    exit 0
fi

echo ""
echo -e "${GREEN}🚀 Création du nouveau site...${NC}"

# Étape 1 : Copier le dossier
echo -e "${CYAN}📁 Copie des fichiers...${NC}"
rsync -av --progress "$SOURCE_PATH/" "$DEST_PATH/" \
    --exclude node_modules \
    --exclude .next \
    --exclude .git \
    --exclude .vercel \
    --exclude dist \
    --exclude build \
    || { echo -e "${RED}   ❌ Erreur lors de la copie${NC}"; exit 1; }
echo -e "${GREEN}   ✅ Fichiers copiés avec succès${NC}"

# Étape 2 : Mettre à jour package.json
echo -e "${CYAN}📝 Mise à jour de package.json...${NC}"
if [ -f "$DEST_PATH/package.json" ]; then
    sed -i'' -e "s/\"name\": \".*\"/\"name\": \"$NEW_SITE_NAME\"/" "$DEST_PATH/package.json"
    echo -e "${GREEN}   ✅ package.json mis à jour${NC}"
fi

# Étape 3 : Initialiser Git
echo -e "${CYAN}🔧 Initialisation de Git...${NC}"
cd "$DEST_PATH" || exit
git init > /dev/null 2>&1
echo -e "${GREEN}   ✅ Repository Git initialisé${NC}"
cd - > /dev/null || exit

# Instructions finales
echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅  SITE CRÉÉ AVEC SUCCÈS !                          ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "📍 Emplacement : $DEST_PATH"
echo ""
echo -e "${YELLOW}📋 Prochaines étapes :${NC}"
echo ""
echo -e "   ${CYAN}1️⃣  Se déplacer dans le dossier :${NC}"
echo -e "      cd $DEST_PATH"
echo ""
echo -e "   ${CYAN}2️⃣  Installer les dépendances :${NC}"
echo -e "      npm install"
echo ""
echo -e "   ${CYAN}3️⃣  Modifier la configuration :${NC}"
echo -e "      Éditez le fichier : config/streamer.config.ts"
echo ""
echo -e "   ${CYAN}4️⃣  Ajouter les images :${NC}"
echo -e "      Placez vos images dans : public/image/"
echo ""
echo -e "   ${CYAN}5️⃣  Lancer le serveur de développement :${NC}"
echo -e "      npm run dev"
echo ""
echo -e "   ${CYAN}6️⃣  Accéder au site :${NC}"
echo -e "      http://localhost:3000"
echo ""
echo -e "${CYAN}📚 Documentation complète : TEMPLATE-README.md${NC}"
echo ""
echo -e "${GREEN}🎉 Bon développement !${NC}"
echo ""
