# Multi-stage Dockerfile for Eagle Eye Backend
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies for OpenCV and networking
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1 \
    libglib2.0-0 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend application source
COPY . .

# Expose port (Render/Railway/Koyeb injects PORT)
ENV PORT=8000
EXPOSE 8000

# Start FastAPI application
CMD uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}
