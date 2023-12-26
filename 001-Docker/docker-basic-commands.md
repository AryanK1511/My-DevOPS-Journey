# Basic Docker Commands 

> Find out the version of Docker
```bash
docker version
```

> Searches for specific images through the Docker hub
```bash
docker search <name_of_image>
```

> Pulls a specific image from the Docker Hub
```bash
docker pull <name_of_image>
```
- The tags are used to identify the images inside the Docker hub. If you do not specify a tag, it will use the `:latest` tag by default. 
- We can use the command `-all-tags` to pull all the images from the repository for multiple images. 

> Lists all the images
```bash
docker images
docker image ls
```

> Lists all the running containers
```bash
docker ps
```
- `docker ps -a` will show you all the containers.

> Creates an image
```bash
docker build -t <name_of_image> <path_to_Dockerfile>
```

> Run an image to create a running container
```bash
docker run --name <name_of_container> <name_of_image>
```
- The ‘–-detach’ option runs the container.
- the ‘–-env’ option is used to set the mandatory variable. 
- If you do not use the ‘–-name’ option, the docker will randomly assign a name to the container.

> Stops a container using the container name or its id
```bash
docker stop <container_id>
```

> Restart a container
```bash
docker restart <container_id>
```

> Stop the container immediately by killing its execution
```bash
docker kill <container_id>
```
- While the `docker stop` command helps shut down the container in its own time, the `docker kill` command stops it at once

> Access the container that is running
```bash
docker exec -it test_db bash
mysql -uroot -pmy-secret-pw
SHOW DATABASES;
```

> Helps you to log into your docker hub
```bash
docker login
```

> Helps you to log out of docker hub
```bash
docker logout
```

> View the logs of a container
```bash 
docker logs <container_id>
```

> Copies a file from docker to the local system
```bash
docker cp <container_id>:path/to/file path/to/destination
```

> Used to create or save an image of the edited container on the local system
```bash
docker commit -m "commit message" <container_id> <new_image_name>
```

> Push or upload a docker image on the repository or the docker hub
```bash
docker push <username>/<repo_name>:<tag_name_of_image>
```

> Assign a new name and optionally a new tag to an existing Docker image. 
```bash
docker tag <name_of_image> <username>/<repo_name>:<tag_name_of_image>
```
- This is particularly useful when you want to provide a more meaningful or versioned name to an image before pushing it to a registry, such as Docker Hub.

> Delete all containers
```bash
docker rm $(docker ps -aq)
```
**Note:** You can also just specify the image ID to delete a single container.

> Delete all images
```bash
docker rmi $(docker images)
```
**Note:** You can also just specify the image ID to delete a single image.

> Performance of containers
```bash
docker stats
```

> Shows details about a container
```bash
docker inspect <container_name>
```

> Display the running processes of a Docker container
```bash
docker top <container_id>
```

> Clean up the Docker system by removing unused data such as stopped containers, dangling images, and other resources that are not in use
```bash
docker system prune
```

> Display information about the disk space usage of the root file system (/)
```bash
df -h /
```