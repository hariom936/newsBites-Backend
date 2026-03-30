### 🚀 NewsBite — Personalized News Aggregator & Ad Campaign Platform (Backend)

    This is the backend API for NewsBite, a full-stack personalized news platform with an integrated Ad Campaign System.

    The system automatically fetches news from multiple RSS feeds, allows users to personalize their content, and dynamically injects advertisements while tracking unique views and clicks for analytics.

    Built using Node.js + TypeScript + Express + MongoDB + Mongoose + Routing-Controllers + TypeDI

### 🌐 System Roles
    Role	Description
    Admin	Manages RSS Agents (feeds), Ads, and Analytics
    User	Consumes personalized news feed, saves articles, interacts with ads


### 🎯 Core Features :

### 🔐 Authentication & Access Control
    JWT-based authentication
    Secure login/register system
    Session handling with expiry
    Middleware-based route protection
    Role-based access (Admin / User)

### 📰 News Aggregation System
    RSS Feed integration (BBC, CNN, TechCrunch, etc.)
    Background fetcher using cron jobs
    Automatic article parsing & storage
    Duplicate prevention using unique URLs

### 🤖 Background Fetcher Agents
    Dynamic RSS agent configuration
    Configurable fetch intervals
    Fault-tolerant processing (no crash on failure)
    Auto categorization of articles

### 🧠 Personalized Feed
    User-based category preferences
    "For You" feed based on interests
    Infinite scrolling support (pagination ready)

### 📌 Article Management
    Store news articles from RSS feeds
    Bookmark/save articles
    Fetch saved articles per user

### 📢 Ad Campaign System
    Create & manage ad campaigns
    Category-based targeting
    Enable/disable ads dynamically

### 📊 Ad Analytics (CORE FEATURE)
    Track unique ad views (impressions)
    Track unique ad clicks
    Ensure one view per user per ad
    Calculate CTR (Click Through Rate)

### 🔥 Ad Injection Engine
    Automatically inject ads into feed
    Configurable (e.g., 1 ad per N articles)
    Seamless UI integration-ready

### 🛠 Tech Stack

    Node.js + Express
    TypeScript
    MongoDB + Mongoose
    routing-controllers
    typedi (Dependency Injection)
    JWT Authentication
    bcrypt password hashing
    node-cron (Background Jobs)
    RSS Parser
    Helmet, CORS
    Morgan (logging)

### 📂 Final Folder Structure

    backend/
    ├── src/
    │   ├── config/              # Environment & DB config
    │   ├── controllers/         # API Controllers (Auth, User, Ads, Feed)
    │   ├── model/               # Mongoose Models (User, Article, Ad, etc.)
    │   ├── middleware/          # Auth Middleware
    │   ├── services/            # Business logic layer
    │   ├── utils/               # Helpers (JWT, Errors, etc.)
    │   └── index.ts             # Entry point
    ├── appData/
    │   └── uploads/             # (optional)
    ├── package.json
    ├── tsconfig.json
    └── .env.example

### ⚙️ Environment Variables (.env.example)

    NODE_ENV=local
    PORT=8000

    # Database
    MONGO_URI=mongodb://127.0.0.1:27017/newsbite

    # JWT
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES_IN=1d

    # CORS
    CORS_ORIGIN=http://localhost:5173

### 📦 Installation

    1. Clone project
    git clone https://github.com/your/newsbite-backend.git
    cd newsbite-backend

    2. Install dependencies
    npm install

    3. Setup environment
    Create .env file using .env.example

    4. Start server
    npm run start:local

### Server runs at:
    http://localhost:8000

### API Endpoints

    🔐 Auth
    Method	Endpoint	Description
    POST	/api/auth/register	Register user
    POST	/api/auth/login	Login user

    👤 User
    Method	Endpoint	Description
    PATCH	/api/user/preferences	Update categories
    GET	/api/user/saved	Get saved articles
    POST	/api/user/save	Toggle save article

    📰 Feed
    Method	Endpoint	Description
    GET	/api/feed	Personalized feed
    GET	/api/feed?category=Tech	Category feed

    🤖 Agents (RSS Feeds)
    Method	Endpoint	Description
    POST	/api/agents	Create agent
    GET	/api/agents	Get all agents
    PATCH	/api/agents/:id	Update agent
    DELETE	/api/agents/:id	Delete agent

    📄 Articles
    Method	Endpoint	Description
    GET	/api/articles	Get articles

    📢 Ads (Campaign)
    Method	Endpoint	Description
    POST	/api/ads	Create ad
    GET	/api/ads	Get all ads
    PATCH	/api/ads/:id	Update ad
    DELETE	/api/ads/:id	Delete ad

    📊 Ad Analytics
    Method	Endpoint	Description
    POST	/api/ads/analytics/view	Track ad view
    POST	/api/ads/analytics/click	Track ad click
    GET	/api/ads/analytics/:adId	Get campaign stats

    🧠 Background Fetcher
    Method	Endpoint	Description
    POST	/api/agents/fetch-now	Fetch RSS manually

### 📊 Ad Tracking Logic (IMPORTANT)
    Unique index on (userId + adId)
    One view per user per ad
    Click automatically marks view = true
    CTR = (clicks / views) * 100

### 🛡️ Security
    JWT Authentication required
    Protected routes using middleware
    Secure headers via Helmet
    CORS protection
    Password hashing with bcrypt

### ⚡ Performance Optimizations
    Indexed fields:
        Article → link, category
        AdAnalytics → userId + adId
    Pagination for feed
    Efficient Mongo queries

### 👨‍💻 Developer

    Hariom Verma
    NewsBite — Personalized News Aggregator & Ad Campaign Platform 🚀