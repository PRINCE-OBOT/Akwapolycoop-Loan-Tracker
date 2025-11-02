# Akwapolycoop Tracker

Akwapolycoop Tracker is a cooperative contribution and loan application system designed to streamline the process of tracking transactions and managing loans for members. This application aims to eliminate the need for members to contact the office/admin for transaction information, providing a user-friendly interface for easy access to their financial data.

## Features

- **Dashboard**: A comprehensive overview of user contributions and loans.
- **Transactions**: Detailed view of all transactions made by the user.
- **Members**: Manage and view member information.
- **Loans**: Access loan information and status.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides a fast development environment.
- **CSS**: For styling the application, including animations and responsive design.

## Project Structure

```
akwapolycoop-tracker
├── src
│   ├── index.html
│   ├── main.tsx
│   ├── styles
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── animations.css
│   ├── assets
│   │   ├── svg
│   │   │   ├── logo.svg
│   │   │   ├── brand-mark.svg
│   │   │   └── illustrations
│   │   │       └── onboarding.svg
│   │   └── icons
│   │       ├── dashboard.svg
│   │       ├── transactions.svg
│   │       ├── users.svg
│   │       └── loan.svg
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Icon.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layouts
│   │   └── MainLayout.tsx
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── Transactions.tsx
│   │   ├── Members.tsx
│   │   └── Loans.tsx
│   ├── ui
│   │   ├── theme.ts
│   │   └── tokens.css
│   ├── hooks
│   │   └── useDarkMode.ts
│   └── types
│       └── index.d.ts
├── public
│   └── manifest.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd akwapolycoop-tracker
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.