# Deployment Guide - Docleas Documentatie

Deze guide beschrijft hoe je de Docleas documentatie kunt hosten op verschillende platformen.

## Lokale ontwikkeling

### Docsify (Aanbevolen voor eenvoud)

```bash
# Installeer dependencies
npm install

# Start development server
npm run docs:dev

# Open http://localhost:3000
```

### MkDocs Material (Aanbevolen voor professionaliteit)

```bash
# Installeer Python dependencies
pip install -r requirements.txt

# Start development server
npm run docs:mkdocs

# Of direct met mkdocs
mkdocs serve

# Open http://localhost:8000
```

## Hosting opties

### 1. GitHub Pages (Gratis, Aanbevolen)

#### Voor Docsify:

1. **Push naar GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/docleas-documentation.git
   git push -u origin main
   ```

2. **Activeer GitHub Pages**
   - Ga naar je repository op GitHub
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / folder: `/docs`
   - Save

3. **Toegang**
   - Je site is beschikbaar op: `https://USERNAME.github.io/docleas-documentation/`

#### Voor MkDocs:

1. **Build de site**
   ```bash
   mkdocs build
   ```

2. **Deploy naar GitHub Pages**
   ```bash
   mkdocs gh-deploy
   ```

3. **Toegang**
   - Je site is beschikbaar op: `https://USERNAME.github.io/docleas-documentation/`

### 2. Netlify (Gratis)

#### Voor Docsify:

1. **Maak account op [Netlify](https://www.netlify.com)**

2. **Connect GitHub repository**
   - New site from Git
   - Kies je repository

3. **Build settings**
   - Build command: (leeg laten)
   - Publish directory: `docs`

4. **Deploy**
   - Klik op "Deploy site"

5. **Custom domain (optioneel)**
   - Site settings > Domain management
   - Voeg je eigen domein toe

#### Voor MkDocs:

1. **Netlify configuratie**

   Maak [netlify.toml](netlify.toml):
   ```toml
   [build]
     command = "mkdocs build"
     publish = "site"

   [build.environment]
     PYTHON_VERSION = "3.11"
   ```

2. **Connect en deploy**
   - Same as Docsify, maar met build command

### 3. Vercel (Gratis)

1. **Maak account op [Vercel](https://vercel.com)**

2. **Import project**
   - New Project
   - Import Git Repository

3. **Configure project** (voor MkDocs)
   ```
   Build Command: mkdocs build
   Output Directory: site
   Install Command: pip install -r requirements.txt
   ```

4. **Deploy**

### 4. Azure Static Web Apps

1. **Maak Static Web App resource in Azure Portal**

2. **Connect GitHub repository**

3. **Configure build** (workflow file wordt automatisch aangemaakt)

   Voor Docsify:
   ```yaml
   app_location: "/docs"
   api_location: ""
   output_location: ""
   ```

   Voor MkDocs:
   ```yaml
   app_location: "/"
   api_location: ""
   output_location: "site"
   app_build_command: "mkdocs build"
   ```

### 5. Eigen webserver (Apache/Nginx)

#### Voor Docsify:

1. **Upload `docs` folder naar server**
   ```bash
   scp -r docs/ user@server:/var/www/docleas-docs/
   ```

2. **Nginx configuratie**
   ```nginx
   server {
       listen 80;
       server_name docs.docleas.be;
       root /var/www/docleas-docs;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

3. **Apache configuratie**
   ```apache
   <VirtualHost *:80>
       ServerName docs.docleas.be
       DocumentRoot /var/www/docleas-docs

       <Directory /var/www/docleas-docs>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

#### Voor MkDocs:

1. **Build locally**
   ```bash
   mkdocs build
   ```

2. **Upload `site` folder**
   ```bash
   scp -r site/ user@server:/var/www/docleas-docs/
   ```

3. **Configuratie: same as Docsify, maar root wijst naar `site` folder**

## Automatische deployment

### GitHub Actions (voor MkDocs)

Maak `.github/workflows/deploy-docs.yml`:

```yaml
name: Deploy Documentation

on:
  push:
    branches:
      - main
    paths:
      - 'Documentation/**'
      - 'mkdocs.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install -r requirements.txt

      - name: Build and deploy
        run: |
          mkdocs gh-deploy --force
```

### GitLab CI/CD

Maak `.gitlab-ci.yml`:

```yaml
pages:
  stage: deploy
  image: python:3.11
  script:
    - pip install -r requirements.txt
    - mkdocs build
    - mv site public
  artifacts:
    paths:
      - public
  only:
    - main
```

## Custom Domain

### GitHub Pages

1. **Voeg CNAME file toe**

   Voor Docsify: [docs/CNAME](docs/CNAME)
   ```
   docs.docleas.be
   ```

2. **DNS configuratie**
   ```
   Type: CNAME
   Name: docs
   Value: USERNAME.github.io
   ```

3. **Activeer in GitHub**
   - Settings > Pages > Custom domain
   - Vul je domein in
   - Enforce HTTPS

### Netlify/Vercel

1. **Voeg domein toe in dashboard**
2. **Update DNS records** (instructies worden gegeven)
3. **SSL wordt automatisch geconfigureerd**

## SSL/HTTPS

- **GitHub Pages**: Gratis SSL via Let's Encrypt (automatisch)
- **Netlify**: Gratis SSL (automatisch)
- **Vercel**: Gratis SSL (automatisch)
- **Eigen server**: Gebruik Let's Encrypt met Certbot
  ```bash
  sudo certbot --nginx -d docs.docleas.be
  ```

## Welke optie kiezen?

| Optie | Voordelen | Nadelen | Best voor |
|-------|-----------|---------|-----------|
| **Docsify + GitHub Pages** | Zeer eenvoudig, geen build | Minder features | Snelle setup |
| **MkDocs + GitHub Pages** | Professioneel, veel features | Iets complexer | Productie-ready docs |
| **Netlify** | Auto-deploy, preview deploys | Account nodig | Teams |
| **Vercel** | Zeer snel, goede DX | Account nodig | Modern stack |
| **Eigen server** | Volledige controle | Onderhoud nodig | Enterprise |

## Aanbeveling

Voor Docleas documentatie adviseren we:

1. **Development**: Docsify lokaal (`npm run docs:dev`)
2. **Production**: MkDocs Material + GitHub Pages
   - Professioneel uiterlijk
   - Gratis hosting
   - Automatische SSL
   - Eenvoudig te onderhouden

### Quick start voor productie:

```bash
# 1. Installeer dependencies
pip install -r requirements.txt

# 2. Test lokaal
mkdocs serve

# 3. Deploy naar GitHub Pages
mkdocs gh-deploy

# Klaar! Je docs zijn live op https://USERNAME.github.io/docleas-documentation/
```

## Troubleshooting

### Docsify: 404 op GitHub Pages

- Controleer of `docs/index.html` bestaat
- Controleer GitHub Pages settings (juiste folder geselecteerd?)

### MkDocs: Build errors

- Controleer of alle MD bestanden correct zijn
- Controleer `mkdocs.yml` syntax
- Run `mkdocs build` lokaal om errors te zien

### Eigen server: Permissies

```bash
# Fix permissies
sudo chown -R www-data:www-data /var/www/docleas-docs
sudo chmod -R 755 /var/www/docleas-docs
```

## Support

Voor vragen over deployment, raadpleeg:
- [Docsify documentatie](https://docsify.js.org/)
- [MkDocs Material documentatie](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages documentatie](https://docs.github.com/en/pages)
