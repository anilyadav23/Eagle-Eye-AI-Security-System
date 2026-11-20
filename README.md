# Eagle Eye - Smart Class Attendance & Activity Intelligence
### AI-Powered Smart Classroom Attendance, Student Activity Intelligence & Multi-Camera Spatial Monitoring Platform

[![AI Engine](https://img.shields.io/badge/AI%20Vision-YOLOv8%20%7C%20DeepFace%20%7C%20ArcFace%20%7C%20ByteTrack-blue.svg)](#)
[![Frontend](https://img.shields.io/badge/Frontend-React%2018%2F19%20%7C%20Vite%20%7C%20TypeScript%20%7C%20TailwindCSS-sky.svg)](#)
[![Backend](https://img.shields.io/badge/Backend-FastAPI%20%7C%20WebSockets%20%7C%20Python%203.14-emerald.svg)](#)
[![Attendance Intelligence](https://img.shields.io/badge/Attendance-Real--Time%20Biometric%20Verification-purple.svg)](#)
[![Database](https://img.shields.io/badge/Database-SQLite%20%2F%20PostgreSQL%20Dual--Engine-orange.svg)](#)

**Eagle Eye** is a production-ready, AI-powered smart classroom attendance verification, student activity intelligence, and multi-camera spatial monitoring system. Engineered for academic institutions, university campuses, lecture halls, and research laboratories, it bridges computer vision surveillance with automated academic operations: verifying attendance via facial biometric embeddings, tracking student movement trajectories across multiple cameras, flagging proxy attendance anomalies, visualizing real-time campus floor plans, and exporting 1-click audit-ready compliance reports.

---

## 🏛️ System Architecture

```
                 [ IP / CCTV Cameras / Webcams / Smart Pods ]
                                      │
                                      ▼
               [ Universal RTSP / ONVIF Video Ingestion Layer ]
                                      │
                                      ▼
              [ Real-Time AI Computer Vision & Tracking Engine ]
               ├── YOLOv8 Silhouette & Human Person Detection
               ├── ArcFace / DeepFace 512-D Biometric Facial Embeddings
               ├── ByteTrack / Centroid Multi-Camera Re-Identification
               └── Spatial Behavior Analytics (Loitering & Proxy Detection)
                                      │
                                      ▼
             [ Academic Policy, Attendance & Geofencing Rules Engine ]
               ├── Biometric Verification Threshold Engine (>85% Match)
               ├── Anti-Tailgating & Proxy Attendance Detection
               └── Automated Incident & Attendance Logging
                                      │
                                      ▼
               [ FastAPI Real-Time WebSocket Hub & Dual Database ]
               ├── SQLite / PostgreSQL Synced State
               └── Encrypted Media Storage (Headshot Crops & Appearance Logs)
                                      │
                                      ▼
             [ React / TypeScript Tactical Command Center & Portal ]
               ├── 🎓 Smart Classroom Attendance Intelligence & Roster View
               ├── 📹 Live AI Video Matrix HUD & Canvas Simulation Pod
               ├── 🗺️ Interactive 2D Campus CAD Map & Floor Navigator
               ├── 👤 Student & Faculty Biometric Enrollment & Pass Clearance
               ├── 📍 Real-Time Movement Dossier & Breadcrumb Trajectory
               ├── 📸 Daily Appearance Vault & Historical Outfit Gallery
               └── 📊 Institutional ROI, Space Utilization & CSV Export
```

---

## 🚀 Key Modules & Capabilities

### 1. 🎓 Smart Classroom Attendance Roster & Biometric Verification
- **Automated Verification**: Automatically checks in students as they enter lecture halls and labs via facial recognition with ArcFace 512-D biometric embeddings.
- **Biometric Confidence Gauges**: Every attendance event is stamped with biometric confidence (e.g. 98.4%), physical location, camera node, and timestamp.
- **Anti-Proxy & Tailgating Detection**: Anomaly alerts flag proxy attendance attempts (low match confidence or rapid badge reuse under 1.5 seconds) and mark student records as `Proxy Suspected`.
- **1-Click Attendance Scan**: Trigger autonomous multi-camera room scans that evaluate every subject in the lecture hall simultaneously.
- **Manual Verification & Override**: Instructors and invigilators can manually verify, mark absent, or flag suspicious records directly from the UI.
- **1-Click Audit CSV Export**: Instant generation and download of institution-compliant attendance records (`/api/attendance/export`).

### 2. 📹 Live AI Video Matrix & Simulated Classroom Pod
- **Real-Time MJPEG Streaming**: Ultra low-latency video streaming from connected IP cameras (Hikvision, Dahua, Axis, CP Plus, Reolink, ONVIF) and USB webcams.
- **Interactive Canvas Smart Pod Simulation**: When physical cameras are disconnected or in demo mode, an integrated HTML5 Canvas simulation stream visualizes live classroom desks, bounding boxes, facial landmarks, and telemetry.
- **On-Demand Face Capture & Enrollment**: One-click optical snapshot capture that extracts facial headshots and automatically opens the enrollment clearance engine.

### 3. 🗺️ Interactive 2D Campus CAD Map & Floor Navigator
- **Multi-Level Campus Navigation**: Explore Academic Block A across 4 distinct levels (Lecture Halls, AI Vision & Robotics Lab, Computer Science Lab, Faculty & Dean Suites).
- **Spatial Occupancy Visualizer**: Color-coded room zones (🟢 Normal, 🟡 High Occupancy, 🔴 Restricted / Alert).
- **Live Moving Avatars**: Real-time person pins tracking authorized students, faculty, and visitors.
- **Blueprint CAD Studio**: In-browser architectural vector drawing tools (rectangles, polygons, doors, cameras, zones) with import/export capabilities.

### 4. 👤 Student, Faculty & Personnel Enrollment Engine
- **Academic Classification**: Enroll Students, Professors, Faculty, Staff, and Visitors.
- **Curricular Data Fields**: Store Student Roll ID, Department, Course Code (e.g. `CS301`), and Semester.
- **Digital Access Clearance Badge**: Instant generation of authorized digital access passes with allowed zone clearances.

### 5. 📍 Student Trajectory & Movement Timeline
- **Comprehensive Student Dossier**: View reference photos, roll ID, enrolled course, and attendance status.
- **Multi-Camera Timeline**: Historical chronological room transitions showing entry time, exit time, dwell duration, and camera IDs.
- **Spatial Breadcrumb Trail**: Visual path rendering across the campus blueprint.

### 6. 📸 Daily Appearance Snapshot & Outfit Vault
- **Master ID vs Today's Capture**: Compares enrolled reference headshot against today's optical capture.
- **Multi-Day Outfit Gallery**: Maintains visual proof of physical appearance across calendar dates.
- **Wardrobe Re-ID Engine**: Robust cross-camera person tracking regardless of clothing changes.

### 7. 🛡️ Security Rules & Automated Threat Engine
- **Restricted Lab Access**: Immediate alarm trigger when non-authorized personnel enter restricted facilities.
- **Loitering Detection**: Flags stationary subjects in corridors exceeding preset dwell time (e.g. >5 minutes).
- **Simulation Triggers**: Quick-test 1-click incident buttons for instant demonstration of threat mitigation workflows.

### 8. 📊 Institutional Analytics & Compliance ROI
- **Hourly Campus Attendance Curves**: Track arrival peaks and spatial density throughout the academic day.
- **Classroom Utilization Rates**: Identify high-demand labs and optimize room scheduling.
- **Paperless Efficiency ROI**: Eliminates roll-call delays, reduces proxy attendance to 0%, and provides tamper-proof audit trails.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18 / 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, HTML5 Canvas / SVG |
| **Backend** | Python 3.10+, FastAPI, WebSockets, Uvicorn, Pydantic v2, Asyncio |
| **Computer Vision** | YOLOv8 (Human Silhouette Detection), OpenCV, ByteTrack, DeepFace / ArcFace (512-D Embeddings) |
| **Database & Storage** | SQLite (Production embedded) / PostgreSQL dual-engine synced, Local/S3 media storage |
| **Streaming** | RTSP, ONVIF, MJPEG HTTP streaming, WebSockets |

---

## ⚡ Quickstart Guide

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **Python**: v3.10 or higher
- **Git** (optional for cloning)

### 2. Automatic One-Click Startup (Windows)
Double-click `start.bat` in the project root:
```bat
start.bat
```
This automatically launches both the FastAPI backend server on `http://localhost:8000` and the React frontend on `http://localhost:5173`.

### 3. Manual Startup

#### Step A: Backend Setup
```bash
cd server
pip install -r requirements.txt
python main.py
```
*The FastAPI backend will start at `http://localhost:8000` with WebSocket endpoint `ws://localhost:8000/ws`.*

#### Step B: Frontend Setup
```bash
cd client
npm install
npm run dev
```
*The React Command Center will open at `http://localhost:5173`.*

---

## 📜 API Reference

### 🎓 Attendance & Biometric Verification
- `GET /api/attendance` — Retrieve all attendance records (with optional query filters by `course`, `date`, `status`).
- `POST /api/attendance/mark` — Mark or override attendance (`person_id`, `status`, `notes`, `verified_by`).
- `POST /api/attendance/scan` — Trigger an autonomous multi-camera biometric classroom scan.
- `GET /api/attendance/summary` — Aggregate attendance metrics (total students, verified count, proxy anomalies, attendance percentage).
- `GET /api/attendance/export` — Download attendance roster as an audit-ready CSV spreadsheet.

### 👤 Personnel & Enrollment
- `GET /api/persons` — Retrieve all enrolled students, faculty, and personnel.
- `GET /api/persons/{person_id}` — Retrieve detailed profile for an individual.
- `POST /api/persons/enroll` — Enroll a new student/faculty with biometric reference face and credentials.
- `GET /api/persons/{person_id}/appearances` — Retrieve daily appearance snapshots and outfit gallery.
- `GET /api/persons/{person_id}/timeline` — Retrieve movement event timeline and room transitions.

### 📹 Cameras & Stream Ingestion
- `GET /api/cameras` — List all connected camera nodes and technical specifications.
- `GET /api/cameras/{camera_id}/live-feed` — Live MJPEG HTTP stream with bounding boxes.
- `GET /api/cameras/{camera_id}/snapshot` — High-definition snapshot frame.
- `GET /api/cameras/{camera_id}/capture-person` — Extract face crop and biometric track ID.
- `POST /api/cameras/connect` — Connect a new RTSP, ONVIF, or USB webcam node.
- `POST /api/cameras/test` — Test camera connection latency and resolution before adding.

### 🏢 Facility, Floors & CAD Blueprints
- `GET /api/buildings` — List buildings, floors, and associated rooms.
- `POST /api/buildings` — Create a new campus building.
- `POST /api/blueprints/save` — Save CAD blueprint vector shapes and layout.

### 🔔 Security Rules & Alerts
- `GET /api/alerts` — Retrieve real-time active and resolved alerts.
- `POST /api/alerts/{alert_id}/resolve` — Resolve an alert with operational audit notes.
- `GET /api/rules` — List active security policies and geofencing rules.

---

## 🌐 WebSocket Events Reference

Connect your client to `ws://localhost:8000/ws` to receive live real-time broadcasts:

| Event Type | Description |
|---|---|
| `PERSON_UPDATE` | Emitted when a student transitions between rooms or floors |
| `ATTENDANCE_UPDATED` | Emitted when attendance is marked, verified, or flagged |
| `ATTENDANCE_SCAN_COMPLETED` | Emitted upon completion of a batch classroom biometric scan |
| `NEW_PERSON_ENROLLED` | Emitted when a new student or faculty member is registered |
| `NEW_ALERT` | Emitted when a security rule breach or proxy attendance is detected |
| `ALERT_RESOLVED` | Emitted when an incident is acknowledged and resolved |

---

## 🛡️ License & Enterprise Security
Built with Role-Based Access Control (RBAC), end-to-end event encryption, and auditable digital logs for high-compliance academic environments.
