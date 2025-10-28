Backend for CipherStudio

Environmental variables:
- MONGODB_URI : MongoDB connection string
- AWS credentials for S3 if you opt to store file blobs in S3

Endpoints:
- POST /api/projects -> { project } returns { projectId }
- GET /api/projects/:id -> returns { project }

Deploy to Render/Railway: set environment variables and deploy as Node.js service.
