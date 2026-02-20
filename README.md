# Mak-Lift

**A web platform for hiring lifting machines and vehicles.**

Live site: [mak-lift.netlify.app](https://mak-lift.netlify.app)

---

## Overview

Mak-Lift is a B2B hire platform for aerial work platforms and lifting vehicles. It provides fleet specifications, availability calendars, and an inquiry form — giving businesses everything they need to identify and request the right equipment.

---

## Features

- Browse detailed specifications for each fleet option
- View availability calendars per equipment type
- Filter fleet options by category
- Submit hire inquiries via a validated contact form

---

## Fleet Options

- Boom Lift
- Scissors Lift
- Tracked Spider Lift
- Truck Mount Lift

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| Forms | Formik + Yup |
| UI | React Bootstrap + Bootstrap Icons |
| Calendar | react-calendar |
| HTTP Client | Axios |
| API | Google Translate (via RapidAPI) |
| Build Tool | Vite |
| Deployment | Netlify |

---

## Getting Started

### Prerequisites

- Node.js
- A [RapidAPI](https://rapidapi.com) account with access to the [Google Translate API](https://rapidapi.com/undergroundapi-undergroundapi-default/api/google-translate113)

### Installation

```bash
git clone https://github.com/nikomakr/mak-lift.git
cd mak-lift
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Potential Future Features

- Side-by-side fleet comparison (working height, outreach, capacity, weight)
- Delivery and transportation booking with cost breakdown
- Video demonstrations of fleet usage
- Insurance add-on options from third-party providers
- Basic safety and usage training materials

---

## Contributors

- **Nikolaos Makridis**
- **Chiamaka Lilian Amadi**
- **Shola Akanbi**

---

### Badges

![GitHub language count](https://img.shields.io/github/languages/count/nikomakr/mak-lift)
![GitHub top language](https://img.shields.io/github/languages/top/nikomakr/mak-lift?color=yellow)
![GitHub Repo stars](https://img.shields.io/github/stars/nikomakr/mak-lift?style=social)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/nikomakr/mak-lift)
