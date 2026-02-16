# Script PowerShell pour créer un nouveau site streamer
# Usage: .\create-streamer-site.ps1 -StreamerName "nom_du_streamer"

param(
    [Parameter(Mandatory = $true)]
    [string]$StreamerName,
    
    [Parameter(Mandatory = $false)]
    [string]$SourcePath = ".",
    
    [Parameter(Mandatory = $false)]
    [string]$DestinationPath = ".."
)

Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   🌶️  GÉNÉRATEUR DE SITE STREAMER                     ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Nettoyer le nom du streamer
$StreamerNameClean = $StreamerName -replace '[^a-zA-Z0-9_-]', ''
$NewSiteName = "site-$StreamerNameClean"
$NewSitePath = Join-Path $DestinationPath $NewSiteName

Write-Host "📋 Configuration:" -ForegroundColor Yellow
Write-Host "   Nom du streamer : $StreamerName" -ForegroundColor White
Write-Host "   Nom du projet   : $NewSiteName" -ForegroundColor White
Write-Host "   Dossier source  : $SourcePath" -ForegroundColor White
Write-Host "   Dossier cible   : $NewSitePath" -ForegroundColor White
Write-Host ""

# Vérifier si le dossier existe déjà
if (Test-Path $NewSitePath) {
    Write-Host "❌ Erreur : Le dossier '$NewSitePath' existe déjà !" -ForegroundColor Red
    Write-Host "   Supprimez-le ou choisissez un autre nom." -ForegroundColor Red
    exit 1
}

# Confirmation
Write-Host "⚠️  Le script va créer le nouveau site dans : $NewSitePath" -ForegroundColor Yellow
$confirmation = Read-Host "Continuer ? (O/N)"
if ($confirmation -ne 'O' -and $confirmation -ne 'o') {
    Write-Host "❌ Annulé par l'utilisateur." -ForegroundColor Red
    exit 0
}

Write-Host ""
Write-Host "🚀 Création du nouveau site..." -ForegroundColor Green

# Étape 1 : Copier le dossier
Write-Host "📁 Copie des fichiers..." -ForegroundColor Cyan
try {
    # Exclure node_modules, .next, .git, etc.
    $excludeDirs = @('node_modules', '.next', '.git', '.vercel', 'dist', 'build')
    
    # Créer le dossier de destination
    New-Item -ItemType Directory -Path $NewSitePath -Force | Out-Null
    
    # Copier tous les fichiers sauf les dossiers exclus
    Get-ChildItem -Path $SourcePath -Recurse | Where-Object {
        $item = $_
        $exclude = $false
        foreach ($dir in $excludeDirs) {
            if ($item.FullName -match [regex]::Escape($dir)) {
                $exclude = $true
                break
            }
        }
        -not $exclude
    } | ForEach-Object {
        $targetPath = $_.FullName.Replace($SourcePath, $NewSitePath)
        if ($_.PSIsContainer) {
            New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
        }
        else {
            Copy-Item -Path $_.FullName -Destination $targetPath -Force
        }
    }
    
    Write-Host "   ✅ Fichiers copiés avec succès" -ForegroundColor Green
}
catch {
    Write-Host "   ❌ Erreur lors de la copie : $_" -ForegroundColor Red
    exit 1
}

# Étape 2 : Mettre à jour package.json
Write-Host "📝 Mise à jour de package.json..." -ForegroundColor Cyan
try {
    $packageJsonPath = Join-Path $NewSitePath "package.json"
    if (Test-Path $packageJsonPath) {
        $packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
        $packageJson.name = $NewSiteName
        $packageJson | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath
        Write-Host "   ✅ package.json mis à jour" -ForegroundColor Green
    }
}
catch {
    Write-Host "   ⚠️  Attention : Erreur lors de la mise à jour de package.json : $_" -ForegroundColor Yellow
}

# Étape 3 : Initialiser Git
Write-Host "🔧 Initialisation de Git..." -ForegroundColor Cyan
try {
    Push-Location $NewSitePath
    git init | Out-Null
    Write-Host "   ✅ Repository Git initialisé" -ForegroundColor Green
    Pop-Location
}
catch {
    Write-Host "   ⚠️  Attention : Erreur lors de l'initialisation Git : $_" -ForegroundColor Yellow
}

# Étape 4 : Instructions finales
Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   ✅  SITE CRÉÉ AVEC SUCCÈS !                          ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Emplacement : $NewSitePath" -ForegroundColor White
Write-Host ""
Write-Host "📋 Prochaines étapes :" -ForegroundColor Yellow
Write-Host ""
Write-Host "   1️⃣  Se déplacer dans le dossier :" -ForegroundColor Cyan
Write-Host "      cd $NewSitePath" -ForegroundColor White
Write-Host ""
Write-Host "   2️⃣  Installer les dépendances :" -ForegroundColor Cyan
Write-Host "      npm install" -ForegroundColor White
Write-Host ""
Write-Host "   3️⃣  Modifier la configuration :" -ForegroundColor Cyan
Write-Host "      Éditez le fichier : config/streamer.config.ts" -ForegroundColor White
Write-Host ""
Write-Host "   4️⃣  Ajouter les images :" -ForegroundColor Cyan
Write-Host "      Placez vos images dans : public/image/" -ForegroundColor White
Write-Host ""
Write-Host "   5️⃣  Lancer le serveur de développement :" -ForegroundColor Cyan
Write-Host "      npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "   6️⃣  Accéder au site :" -ForegroundColor Cyan
Write-Host "      http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "📚 Documentation complète : TEMPLATE-README.md" -ForegroundColor Magenta
Write-Host ""
Write-Host "🎉 Bon développement !" -ForegroundColor Green
Write-Host ""
