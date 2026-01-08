# Google Cloud Run Deployment Guide

This guide explains how to deploy your portfolio to Google Cloud Run for the Google AI Developer Challenge.

## Prerequisites

1.  **Google Cloud Project**: Created and billable.
2.  **Google Cloud SDK**: Installed and initialized (`gcloud init`).
3.  **Docker**: Installed (optional, for local testing).

## Local Testing

Before deploying, you can test the container locally:

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

Visit `http://localhost:8080` to see your portfolio running in a container.

## Deployment Steps

### 1. Enable Required APIs

```bash
gcloud services enable run.googleapis.com \
    containerregistry.googleapis.com \
    cloudbuild.googleapis.com
```

### 2. Deploy Using Cloud Build (Easiest)

Run the following command from the root of your project:

```bash
gcloud builds submit --config cloudbuild.yaml --substitutions=_PROJECT_ID=$(gcloud config get-value project)
```

### 3. Manual Deployment (Alternative)

If you prefer manual steps:

```bash
# Submit build to Google Cloud
gcloud builds submit --tag gcr.io/[PROJECT_ID]/portfolio

# Deploy to Cloud Run
gcloud run deploy portfolio \
    --image gcr.io/[PROJECT_ID]/portfolio \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated
```

## Challenge Requirement: Cloud Run Embed

Once deployed, copy your Cloud Run URL and use it in your **DEV.to** post submission template.

---
**Good luck with the challenge!** 🚀
