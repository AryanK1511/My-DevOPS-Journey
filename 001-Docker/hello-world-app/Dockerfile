# Start from a base image that has basic files and then you can add to it
FROM python:3

# Copy application files to the container
COPY . /app

# Setting the working directory
WORKDIR /app

# Execute command
CMD ["python", "app.py"]