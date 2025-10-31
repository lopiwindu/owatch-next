# OWATCH 👁️

A decentralized watch-to-earn platform built on Solana blockchain. Watch videos, earn rewards, and manage your crypto earnings seamlessly.

![OWATCH](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript)
![Solana](https://img.shields.io/badge/Solana-Web3-14F195?style=flat-square&logo=solana)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **🎥 Watch-to-Earn**: Earn OWATCH tokens by watching videos
- **👛 Solana Wallet Integration**: Connect with Phantom and other Solana wallets
- **📊 Real-time Dashboard**: Track your earnings, watch time, and streaks
- **🌓 Dark/Light Mode**: Modern UI with theme switching
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🎨 Glass Morphism UI**: Beautiful modern interface with frosted glass effects
- **⚡ Lightning Fast**: Built with Next.js 14 for optimal performance
- **🔒 Secure**: Blockchain-based authentication and transactions

## 📸 Screenshots

### Landing Page

Modern landing page with wallet connection and feature highlights.

### Dashboard

Track your earnings, watch time, videos watched, and daily streaks.

### Video Content

Browse and watch videos while earning rewards.

### User Profile

Manage your profile, achievements, and wallet information.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Blockchain**: [Solana Web3.js](https://solana.com/)
- **Wallet Adapter**: [@solana/wallet-adapter-react](https://github.com/solana-labs/wallet-adapter)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**:
  - `clsx` - Conditional class names
  - `tailwind-merge` - Merge Tailwind classes
  - `class-variance-authority` - Component variants

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **pnpm**
- **Phantom Wallet** or any Solana-compatible wallet

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/lopiwindu/owatch-next.git
cd owatch-next
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
owatch-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/         # Dashboard routes
│   │   │   ├── profile/       # User profile page
│   │   │   ├── settings/      # Settings page
│   │   │   └── videos/        # Video content page
│   │   ├── landing/           # Landing page route
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── dashboard/         # Dashboard components
│   │   ├── landing/           # Landing page components
│   │   ├── layout/            # Layout components
│   │   ├── ui/                # Reusable UI components
│   │   └── types/             # TypeScript type definitions
│   ├── context/               # React Context providers
│   │   ├── SidebarContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── WalletContext.tsx
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   └── utils/                 # Helper functions
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies
```

## 🎨 Key Components

### UI Components

- **Card**: Various card components with glass morphism effects
- **Button**: Customizable button with variants
- **Badge**: Status and information badges
- **Theme Toggle**: Dark/light mode switcher
- **Wallet Status**: Display connected wallet information

### Layout Components

- **BaseLayout**: Base layout wrapper
- **DashboardLayout**: Dashboard-specific layout
- **ResponsiveSidebar**: Responsive navigation sidebar
- **MobileNav**: Mobile navigation menu

### Feature Components

- **Dashboard**: Main dashboard with stats and metrics
- **VideoContent**: Video browsing and watching interface
- **UserProfile**: User profile and achievements
- **Settings**: Application settings

## 🔌 Wallet Integration

OWATCH uses Solana Wallet Adapter for seamless wallet integration:

```typescript
import { useWallet } from "@solana/wallet-adapter-react";

const { connect, disconnect, publicKey, connected } = useWallet();
```

Supported wallets:

- Phantom
- Solflare
- Slope
- And more...

## 🎨 Theming

The application supports dark and light modes using CSS variables:

```typescript
import { useTheme } from "@/context/ThemeContext";

const { theme, toggleTheme } = useTheme();
```

## 🔧 Configuration

### Tailwind Configuration

Custom theme colors and variants are defined in `tailwind.config.js`.

### TypeScript Configuration

TypeScript settings are in `tsconfig.json` with path aliases configured for easier imports.

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👥 Authors

- **lopiwindu** - _Initial work_ - [GitHub](https://github.com/lopiwindu)

## 🙏 Acknowledgments

- Solana Foundation for the blockchain infrastructure
- Next.js team for the amazing framework
- Radix UI for accessible component primitives
- Tailwind CSS for the utility-first CSS framework

## 📧 Contact

For questions and support, please open an issue on GitHub.

---

**Made with ❤️ using Next.js and Solana**
