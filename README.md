# 🏦 Bank App Frontend

This is the frontend application for the **Bank Management System** built with **Angular**. It allows users to manage customers and their bank accounts (current and savings) and perform financial operations such as debit, credit, and transfer.

---

## 🚀 Features

- ✅ Customer Management (Create, Read, Update, Delete)
- ✅ Account Management (Current / Savings)
- ✅ Operation Management (Debit / Credit / Transfer)
- ✅ Clean and responsive UI

---

## 📦 Tech Stack

- **Angular 17+**
- **RxJS** for reactive programming
- **Angular HTTPClient** for REST API communication
- **Bootstrap** or Angular Material (optional)

---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/bank-app-frontend.git
cd bank-app-frontend
npm install
ng serve
```
> ✅ Make sure the backend is running on `http://localhost:8085`

---

## 📁 API Endpoints Used

- `GET    /customers`
- `GET    /customers/search?keyword=...`
- `POST   /customers`
- `DELETE /customers/{id}`

- `GET    /accounts/{id}`
- `GET    /accounts/{id}/operations`
- `POST   /accounts`
- `POST   /accounts/debit`
- `POST   /accounts/credit`
- `POST   /accounts/transfer`

---

## 🧪 Development Scripts

```bash
ng serve       # run development server
ng build       # build for production
ng test        # run unit tests
ng lint        # check code quality
```
## 👤 Author

**Abdelkarim El Hajbi** – *Full Stack Developer*
