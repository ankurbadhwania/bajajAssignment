# BFHL API

> 🚀 Live Demo: [https://bfhl-production-f117.up.railway.app/bfhl](https://bfhl-production-f117.up.railway.app/bfhl)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Railway (Deployment)

---

## 🛆 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ankurbadhwania/bajajAssignment
   cd bajajAssignment/bfhl-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000` by default.

---

## 📬 API Endpoint

### POST `/bfhl`

#### 📅 Request Body (JSON)

Send a `POST` request with this format:

```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

#### 📄 Sample Response

```json
{
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "odd_numbers": [
        "5"
    ],
    "even_numbers": [
        "2",
        "4",
        "92"
    ],
    "alphabets": [
        "A",
        "Y",
        "B"
    ],
    "special_characters": [
        "&",
        "-",
        "*"
    ],
    "sum": "103",
    "concat_string": "ByA"
}
```

---

## 🧪 Testing with Postman

1. Open Postman.
2. Set method to `POST`.
3. Set URL to:

   ```
   https://bfhl-production-f117.up.railway.app/bfhl
   ```
4. Go to the **Body** tab.
5. Choose **raw** and **JSON** as format.
6. Paste this:

   ```json
   {
     "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
   }
   ```
7. Hit **Send**.

---
