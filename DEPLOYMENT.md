# Deployment Guide

This project automatically deploys to a PHP server via GitHub Actions using SSH/rsync.

## Setup Instructions

### 1. Generate SSH Key Pair

On your local machine:

```bash
# Generate a new SSH key (without passphrase for automation)
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_key -N ""

# This creates:
# - ~/.ssh/deploy_key (private key - for GitHub)
# - ~/.ssh/deploy_key.pub (public key - for server)
```

### 2. Add Public Key to Server

Copy the public key to your server:

```bash
# Option 1: Using ssh-copy-id
ssh-copy-id -i ~/.ssh/deploy_key.pub user@your-server.com

# Option 2: Manual
cat ~/.ssh/deploy_key.pub
# Copy the output and add to ~/.ssh/authorized_keys on your server
```

Or manually on the server:

```bash
# SSH into your server
ssh user@your-server.com

# Add the public key
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 3. Add Secrets to GitHub

Go to your GitHub repository:
- Settings → Secrets and variables → Actions → New repository secret

Add these secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `DEPLOY_HOST` | Your server hostname/IP | `example.com` or `123.45.67.89` |
| `DEPLOY_USER` | SSH username | `username` |
| `DEPLOY_PATH` | Path on server | `/var/www/html/` or `/home/user/public_html/` |
| `DEPLOY_KEY` | Private SSH key | Contents of `~/.ssh/deploy_key` |

**To get the private key:**

```bash
cat ~/.ssh/deploy_key
# Copy the ENTIRE output including:
# -----BEGIN OPENSSH PRIVATE KEY-----
# ...
# -----END OPENSSH PRIVATE KEY-----
```

### 4. Test SSH Connection

Test if the key works:

```bash
ssh -i ~/.ssh/deploy_key user@your-server.com
```

If successful, you should be logged in without a password.

### 5. Deploy

Push to the `main` branch:

```bash
git add .
git commit -m "Setup deployment"
git push origin main
```

Or trigger manually:
- Go to GitHub → Actions → Deploy to PHP Server → Run workflow

## How It Works

1. **Push to main** → Triggers GitHub Actions
2. **GitHub Actions:**
   - Checks out code
   - Installs Node.js dependencies
   - Runs `npm run build`
   - Uploads `dist/` to server via rsync
3. **Server** serves static files

## File Structure on Server

```
/var/www/html/
├── index.html
├── posts/
│   └── index.html
├── authors/
│   └── index.html
├── _astro/
│   ├── client.js
│   └── styles.css
├── assets/
│   └── images/
└── .htaccess (preserved during deploy)
```

## Troubleshooting

### Permission Denied

```bash
# On server, ensure correct permissions
chmod 755 /var/www/html
chown -R www-data:www-data /var/www/html
```

### rsync Errors

Check the GitHub Actions logs for detailed error messages.

### .htaccess Not Working

Ensure Apache has `mod_rewrite` enabled:

```bash
# On server
sudo a2enmod rewrite
sudo systemctl restart apache2
```

## Manual Deployment

If you need to deploy manually:

```bash
# Build locally
npm run build

# Upload via rsync
rsync -avzr --delete dist/ user@server:/var/www/html/
```

## Environment-Specific Builds

**Production build:**
```bash
npm run build
```

**Debug build (readable HTML):**
```bash
npm run build:debug
```

