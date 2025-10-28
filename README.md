# CipherStudio - Browser-Based React IDE (Skeleton)

This repository is a complete skeleton for **CipherStudio**, a browser-based React IDE.
It contains a Next.js frontend using Sandpack and Monaco Editor, and an Express backend
with Mongoose models for project persistence. The archive is ready to be installed, configured,
and deployed (see setup notes below).

## What you get in this zip
- `frontend/` - Next.js app (UI, editor integration, Sandpack preview)
- `backend/` - Express.js API with MongoDB persistence examples
- `READMEs` with setup & deployment steps
- `demo_instructions.txt` describing a suggested 2–3 minute demo script

## Quick start (local)
1. Unzip and open two terminals.
2. Backend:
   - `cd backend`
   - Create a `.env` with `MONGODB_URI` and `AWS_S3_BUCKET` and `AWS_*` creds placeholders.
   - `npm install`
   - `npm run start`
3. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
4. Open `http://localhost:3000`

## Notes
- This project is a feature-complete skeleton focusing on integration, not on bundling Monaco/Sandpack in the zip.
- You must run `npm install` to fetch dependencies.
