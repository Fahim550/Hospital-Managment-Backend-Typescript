# 🩺 Hospital Management System API Documentation

**Base URL:** `http://localhost:5000/api/v1`

This backend API is designed for a healthcare management system supporting multiple user roles: `admin`, `doctor`, `patient`,`appointment`. It includes modules for user registration, doctor management, patient records, and appointment scheduling.

---

## 🧑‍⚕️ Doctor Module

### Endpoints

| Method | Endpoint                | Description                          | Access
|--------|---------------------------|--------------------------------------|-------
| GET    | `/doctors`                | Get all confirmed doctors           | All
| GET    | `/doctors/:id`            | Get doctor by ID                    | All
| GET    | `/doctors/request`        | Get registered doctors             |  Admin
| POST   | `/doctors/`   | Register new doctor                 | All
| PUT    | `/doctors/:id` | Update doctor info                 | Doctor
| DELETE | `/doctors/:id` | Soft delete doctor              | Admin

### ✅ GET `/doctors`
**Description:** Get all confirmed doctors  
**Controller Response Example:**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Doctors fetched successfully",
  "data": [
    {
      "_id": "doc123",
      "specialty": "Skin",
      "experience": "10+",
      "isConfirmed": true,
      "user": {
        "_id": "user123",
        "name": "Dr. Rezaul",
        "email": "rezaul@gmail.com"
      }
    }
  ]
}
```

---

### 🔹 GET `/doctors/:id`
**Description:** Get doctor by ID.
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Doctor retrieved successfully",
  "data": {
    "_id": "doc123",
    "specialty": "Skin",
    "user": {
      "_id": "user123",
      "name": "Dr. Rezaul"
    }
  }
}
```

---

### 🔹 GET `/doctors/request`
**Description:** Get all unconfirmed doctors awaiting admin approval.

---

### 🔹 POST `/doctors`
**Description:** Register a new doctor (pending confirmation).

**Request Body :**
```json
{
  "user": "userId",
  "specialty": "Psychology",
  "graduation": "MBBS",
  "specilities": "Psychology",
  "workDetails": "City Hospital",
  "experience": "8+",
  "consultationFee": "700",
  "phone": "01710000000"
}
```
**Response**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Doctor created successfully",
  "data": {
    "_id": "docId",
    "specialty": "Psychology",
    "isConfirmed": false
  }
}
```
---

### 🔹 PUT `/doctors/:id`
**Description:** Update doctor information.
```json
{
  "specialty": "Skin",
  "experience": "6+"
}
```

### 🔹 DELETE `/doctors/:id`
**Description:** Soft delete a doctor record.
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Doctor deleted successfully",
  "data": {
    "_id": "docId",
    "isDeleted": true
  }
}
```

---

## 🧑‍⚕️ PATIENT MODULE


### Endpoints

| Method | Endpoint                  | Description                          | Access
|--------|---------------------------|--------------------------------------|--------
| GET    | `/patients`                | Get all patients         |            Admin
| GET    | `/patients/:id`            | Get patient by ID                    | Patient 
| POST   | `/patients`   | Create new patient profile                        | All
| PUT    | `/patients/:id` | Update patients info                 |   Patient 
| DELETE | `/doctors//:id` | Soft delete patients              | Admin

### 🔹 GET `/patients`
**Description:** Retrieve all patients.
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Patients retrieved successfully",
  "data": [
    {
      "_id": "patId",
      "user": {
        "name": "Fahim",
        "email": "fahim@gmail.com"
      },
      "phone": "01888888888",
      "gender": "male"
    }
  ]
}
```

---

### 🔹 GET `/patients/:id`
**Description:** Get patient details by ID.
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Patients retrieved successfully",
  "data": [
    {
      "_id": "patId",
      "user": {
        "name": "Fahim",
        "email": "fahim@gmail.com"
      },
      "phone": "01888888888",
      "gender": "male"
    }
  ]
}
```

---

### 🔹 POST `/patients`
**Description:** Create a new patient profile.
```json
{
  "user": "userId",
  "age": 25,
  "gender": "male",
  "phone": "01888888888",
  "address": "Sylhet"
}
```

**Request **
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Patient created successfully",
  "data": {
    "_id": "patId",
    "age": 25
  }
}
```

---

### 🔹 PUT `/patients/:id`
**Description:** Update a patient record.
```json {
  "statusCode": 200,
  "success": true,
  "message": "Patient updated successfully",
  "data": {
    "phone": "01911111111"
  }
}
```

---

## 📅 APPOINTMENT MODULE

### Endpoints

| Method | Endpoint                  | Description                          | Access        |
|--------|---------------------------|--------------------------------------|---------------|
| GET    | `/appointments`                | Get all appointments           |    Admin
| GET    | `/appointments/:id`            | Get appointments by ID         |    Owner  (Doctor/Patient)
| POST   | `/appointments`   | Create new appointments                     |    Patient
| PUT    | `/appointments/:id` | Update appointments info                  |    Admin
| DELETE | `/appointments/:id` | Cancel appointments                     |   Owner (Doctor/Patient)


### 🔹 GET `/appointments`
**Description:** Get all appointments (doctor and patient populated).
**Sample Response:**

```json {
  "statusCode": 200,
  "success": true,
  "message": "Appointments retrieved successfully",
  "data": [
    {
      "appointmentDate": "2025-05-01",
      "appointmentTime": "10:00 AM",
      "status": "pending",
      "doctor": {
        "name": "Dr. Ahsan"
      },
      "patient": {
        "name": "Fahim"
      }
    }
  ]
}
```



---

### 🔹 GET `/appointments/:id`
**Description:** Get a specific appointment by ID.
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Appointment retrieved successfully",
  "data": {
    "appointmentDate": "2025-05-01",
    "appointmentTime": "10:00 AM",
    "status": "pending",
    "doctor": {
      "name": "Dr. Ahsan"
    },
    "patient": {
      "name": "Fahim"
    }
  }
}
```

---

### 🔹 POST `/appointments`
**Description:** Create a new appointment.
```json
{
  "appointmentDate": "2025-05-01",
  "appointmentTime": "10:00 AM",
  "status": "pending",
  "doctor": "doctorId",
  "patient": "patientId"
}
```
** Response **
```json
{
  "statusCode": 201,
  "success": true,
  "message": "Appointment created successfully",
  "data": {
    "appointmentDate": "2025-05-01"
  }
}
```


---

## 🛡️ ADMIN MODULE

### Endpoints

| Method | Endpoint                  | Description                          | Access        |
|--------|---------------------------|--------------------------------------|---------------|
| GET    | `/admins`                | Get admins          |    Admin
| POST   | `/admins`   | Create new admins                     |    Admin


### 🔹 GET `/admins`
**Description:** Retrieve all admin users.
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Admins fetched successfully",
  "data": [
    {
      "_id": "admin123",
      "user": {
        "_id": "user123",
        "name": "Super Admin",
        "email": "admin@example.com"
      }
    }
  ]
}
```

---

### 🔹 POST `/admins/`
**Description:** Create a new admin.

**Request Body Example:**
```json
{
  "user": "userObjectId"
}
```

***Response ***
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Admin created successfully",
  "data": {
    "_id": "admin456",
    "user": "userObjectId"
  }
}
```

---



## 🧾 STANDARD RESPONSE FORMAT

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Operation completed successfully",
  "data": { /* response data */ }
}
```

---

## 📌 NOTES
- All IDs should be valid MongoDB ObjectIds.
- Only confirmed doctors (`isConfirmed: true`) are visible to general users.
- Use authentication & authorization (recommended JWT) to protect admin/doctor-only routes.
plz make a correct readme.md
