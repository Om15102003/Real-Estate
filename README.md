# OmEstate - Real Estate Marketplace

![OmEstate](https://img.shields.io/badge/OmEstate-Real%20Estate-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-8.10.1-47A248)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC)

A full-stack real estate marketplace application where users can browse, create, update, and delete property listings. The platform supports both rental and sale properties with advanced filtering and search capabilities.

## 🌟 Features

- **User Authentication**: Sign up, sign in, and Google authentication
- **Property Listings**: Create, read, update, and delete property listings
- **Advanced Search**: Filter properties by type (rent/sale), amenities, and location
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Image Upload**: Support for multiple property images using Firebase Storage
- **User Profiles**: Manage personal information and view your listings
- **Contact Landlords**: Direct communication with property owners

## 🛠️ Technologies

### Frontend
- **React**: UI library for building the user interface
- **Redux Toolkit**: State management
- **React Router**: Navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **Swiper**: Touch slider with modern UI
- **Firebase**: Image storage and authentication

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication
- **Cookie Parser**: Handle cookies





## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x)
- MongoDB
- Firebase account (for image storage)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Om15102003/Real-Estate.git
cd real-estate
```

2. Install dependencies
```bash
npm install
cd client
npm install
cd ..
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## 📝 API Endpoints

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/signin`: Login user
- `GET /api/auth/signout`: Logout user
- `POST /api/listing/create`: Create a new listing
- `GET /api/listing/get`: Get all listings with filters
- `GET /api/listing/get/:id`: Get a specific listing
- `POST /api/listing/update/:id`: Update a listing
- `DELETE /api/listing/delete/:id`: Delete a listing
- `GET /api/user/listings/:id`: Get user's listings
- `POST /api/user/update/:id`: Update user profile
- `DELETE /api/user/delete/:id`: Delete user account

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/real-estate/issues).

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Om Gupta**
- GitHub: [github](https://github.com/Om15102003)
- LinkedIn: [LinkedIn](https://linkedin.com/in/om-gupta-1510o2003)

---

⭐️ If you find this project helpful, please consider giving it a star! 