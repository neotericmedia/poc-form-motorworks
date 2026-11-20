# FORME — Custom Motorcycle Builder

A modern web application for designing and customizing motorcycles interactively.

## Stack

- **React 18** — UI library
- **Vite** — Fast build tool & dev server
- **TypeScript** — Type-safe JavaScript
- **CSS** — Custom properties (design tokens) for theming

## Project Structure

```
src/
├── main.tsx                 # Vite entry point
├── App.tsx                  # Root component
├── index.css                # Global styles
├── tokens.css               # Design tokens (colors, spacing, typography)
├── pages/
│   └── Builder.tsx          # Main builder page (canvas + controls)
├── components/
│   ├── Header.tsx           # App header
│   ├── Canvas.tsx           # Bike preview canvas
│   └── ControlPanel.tsx     # Customization controls
└── styles/
    ├── builder.css
    ├── header.css
    ├── canvas.css
    └── control-panel.css
```

## Epics

1. **Builder** (`src/pages/Builder.tsx`)
   - Main motorcycle builder interface
   - Layout: canvas (left) + control panel (right)
   - Responsive design for tablet/mobile

2. **Canvas** (`src/components/Canvas.tsx`)
   - Live preview of bike configuration
   - Updates dynamically with customization changes

3. **Control Panel** (`src/components/ControlPanel.tsx`)
   - Frame type selector
   - Color picker
   - Wheel style selector
   - Exhaust configuration
   - Save button for configurations

4. **Design System** (`src/tokens.css`)
   - Centralized color palette
   - Spacing scale
   - Typography scale
   - Border radii
   - Shadows & transitions

## Getting Started

```bash
npm install
npm run dev
```

The app will open at `http://localhost:5173`.

## Build

```bash
npm run build
```
