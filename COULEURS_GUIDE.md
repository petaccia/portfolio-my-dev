# 🎨 Guide des Couleurs Harmonieuses

## Palette de couleurs actuelle

### 🔵 Couleurs principales (Bleu royal)
- `bg-primary` (#000f1f) - Arrière-plan principal
- `bg-primary-light` (#1a2332) - Variante plus claire
- `bg-primary-dark` (#000a14) - Variante plus foncée

### 🟠 Couleurs secondaires (Orange)
- `text-secondary` (#E67E22) - Orange principal
- `text-secondary-light` (#F39C12) - Orange vif
- `text-secondary-dark` (#D35400) - Orange foncé

### 🟢 Couleurs d'accent (Teal)
- `text-accent` (#2ECCC6) - Teal principal
- `text-accent-light` (#48E5DE) - Teal clair
- `text-accent-dark` (#1BA199) - Teal foncé

## 📝 Couleurs de texte recommandées

### Pour le texte principal
```css
text-text-primary    /* #F8FAFC - Blanc cassé, parfait pour les titres */
text-text-secondary  /* #CBD5E1 - Gris clair, pour le texte normal */
```

### Pour le texte secondaire
```css
text-text-muted      /* #94A3B8 - Gris moyen, pour les sous-titres */
text-text-subtle     /* #64748B - Gris discret, pour les infos moins importantes */
```

### Pour les accents
```css
text-text-accent     /* #2ECCC6 - Teal, pour les liens et éléments interactifs */
text-text-highlight  /* #E67E22 - Orange, pour les éléments importants */
```

## 🎯 Exemples d'utilisation

### Footer
```tsx
// Titre principal
<h3 className="text-text-primary font-heading">Navigation</h3>

// Liens normaux
<a className="text-text-secondary hover:text-text-accent">Accueil</a>

// Texte discret (copyright)
<p className="text-text-muted">© 2024 Sébastien Petaccia</p>

// Liens légaux
<a className="text-text-subtle hover:text-text-highlight">Mentions légales</a>
```

### Navigation
```tsx
// Liens actifs
<a className="text-text-accent">Page actuelle</a>

// Liens normaux
<a className="text-text-secondary hover:text-text-accent">Autres pages</a>
```

### Contenu
```tsx
// Titre principal
<h1 className="text-text-primary">Mon Portfolio</h1>

// Sous-titre
<h2 className="text-text-secondary">Développeur Web</h2>

// Texte de description
<p className="text-text-muted">Passionné par le développement...</p>

// Éléments d'accent
<span className="text-text-highlight">Important!</span>
```

## 🌈 Harmonie des couleurs

Cette palette respecte les principes de design :
- **Contraste suffisant** pour l'accessibilité
- **Hiérarchie visuelle** claire
- **Cohérence** avec votre identité visuelle
- **Lisibilité** optimale sur fond sombre

## 💡 Conseils d'utilisation

1. **Titres principaux** → `text-text-primary`
2. **Texte normal** → `text-text-secondary`
3. **Sous-titres/descriptions** → `text-text-muted`
4. **Informations secondaires** → `text-text-subtle`
5. **Liens/boutons** → `text-text-accent` avec hover `text-text-highlight`
6. **Éléments importants** → `text-text-highlight`
