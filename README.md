# BradleyVS Vaults App

This is a Firebase-powered budgeting dashboard using "Vaults" instead of "Qubes". Users can:

- Create, edit, and delete vaults
- Sync vaults per user using Firebase Firestore
- Lock/unlock a Stripe-issued virtual card
- View recent test transactions
- Transfer funds between vaults

## Setup Instructions

1. Create a Firebase project
2. Enable Authentication (Email/Password)
3. Enable Firestore (Start in test mode)
4. Add your Firebase config to `public/js/firebase-config.js`
5. Serve locally with any static server (like `npx serve public`) or deploy via Firebase Hosting or Vercel.

## Folder Structure

```
/public
  ├── index.html
  └── js/
      ├── auth.js
      ├── vaults.js
      └── firebase-config.js (you add your keys)
```

## Deployment

```
firebase init hosting
firebase deploy
```