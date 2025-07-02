# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.




MyApp/
│
├── .expo/                           # Expo CLI-managed directory (auto-generated)
│                                   # Contains compiled caches, metadata, etc.
│                                   # Usually ignored in Git
│
├── app/                             # 🔁 Core of navigation (File-Based Routing)
│   ├── _layout.tsx                  # Root layout for all screens inside app/
│                                   # Similar to a navigation wrapper
│
│   ├── +not-found.tsx              # Custom 404 page when no route matches
│
│   ├── index.tsx   
│
├── assets/                         # 🎨 Static files (fonts, images, sounds, etc.)
│   ├── fonts/
│   ├── images/
│   └── sounds/
│
├── components/                     # 🧩 Reusable React components
│   ├── Header.tsx
│   └── MicWave.tsx
│
├── constants/                      # 🔐 Global constants (colors, sizes, strings)
│   ├── colors.ts
│   └── layout.ts
│
├── hooks/                          # 🪝 Custom hooks for logic reuse
│   ├── useSpeech.ts
│   └── useMicrophone.ts
│
├── node_modules/                   # 📦 Node dependencies (auto-managed)
│
├── scripts/                        # 🔧 Custom Node scripts or CLI helpers
│   └── sync-assets.js
│
├── .gitignore                      # 🚫 Tells Git which files/folders to ignore
│
├── app.json                        # 📱 Expo config file (name, icon, splash, etc.)
│
├── expo-env.d.ts                   # 📘 TypeScript declarations for Expo Router
│                                   # Extends TypeScript to support file-based routing
│
├── package.json                    # 📦 Project metadata & dependencies
│
├── package-lock.json               # 🔒 Locked versions of installed packages
│
├── tsconfig.json                   # 🧠 TypeScript configuration file
│
├── README.md                       # 📝 Project overview and # iPractestApp
