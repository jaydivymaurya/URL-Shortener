# URL Shortener

A simple, beautiful, and fast URL shortener built with Node.js, Express, and Pug. Shorten long URLs into compact, shareable links with a clean web interface.

## ✨ Features

- **Modern UI**: Clean, responsive design with gradient backgrounds and smooth animations
- **One-Click Shortening**: Enter a URL and get a shortened link instantly
- **Copy to Clipboard**: Easily copy shortened URLs with a single click
- **Fast Redirects**: Quick redirection to original URLs
- **URL Validation**: Built-in validation to ensure valid URLs
- **Local Storage**: Uses NeDB for persistent storage of shortened URLs

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jaydivymaurya/URL-Shortener.git
cd url-shortener
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The application will be running at `http://localhost:4000`

## 📖 Usage

### Web Interface
1. Open your browser and navigate to `http://localhost:4000`
2. Enter a long URL in the input field
3. Click "Shorten" to generate a short link
4. Copy the shortened URL using the "Copy" button

### API Usage

#### Shorten a URL
Send a POST request with the URL as the request body:

**Request:**
```bash
curl -X POST -d "https://example.com/very/long/url" http://localhost:4000/
```

**Response:**
```
abc123
```

#### Access Shortened URL
Navigate to `http://localhost:4000/{id}` to redirect to the original URL.

**Example:**
```
http://localhost:4000/abc123 → redirects to https://example.com/very/long/url
```

### Code Examples

#### JavaScript (Fetch API)
```javascript
// Shorten URL
fetch('http://localhost:4000/', {
  method: 'POST',
  body: 'https://example.com/'
})
.then(response => response.text())
.then(shortId => {
  console.log('Shortened URL:', `http://localhost:4000/${shortId}`);
});
```

#### Node.js (with axios)
```javascript
const axios = require('axios');

axios.post('http://localhost:4000/', 'https://example.com/')
  .then(response => {
    const shortId = response.data;
    console.log('Shortened URL:', `http://localhost:4000/${shortId}`);
  });
```

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Pug templating, Vanilla JavaScript, CSS3
- **Database**: NeDB (file-based database)
- **Styling**: Modern CSS with gradients and animations

## 📁 Project Structure

```
url-shortener/
├── index.js          # Main application file
├── index.pug         # Main template
├── package.json      # Dependencies and scripts
├── README.md         # This file
├── db/
│   ├── index.js      # Database operations
│   ├── add.js        # Add URL function
│   ├── find.js       # Find URL function
│   ├── hash.js       # Hash generation
│   └── id.js         # ID generation
├── url/
│   ├── index.js      # URL utilities
│   ├── parse.js      # URL parsing
│   └── validate.js   # URL validation
└── web/
    ├── app.js        # Client-side JavaScript
    ├── main.css      # Stylesheets
    └── fonts/        # Font files
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the Beerware License - see the package.json for details.

## 🙏 Acknowledgments

Originally based on [TheDevs URL Shortener](https://github.com/TheDevs-Network/url-shortener)
