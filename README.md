# Build with Docker(Mern Application - Basic todo-app )

A Web Application using MERN stack for managing your tasks by creating them and deleting them dynamically with data stored in mongodb database.

## What I Built:
  - Build a basic todo app using ( MERN stack  --> React for Frontend and Express for Backend )
  - Added Toast messages for every task we do like login, logout, signUp, task creation, task deletion, task updation.
  - Better ui using Tailwind Css

## Features
  - Task
      - Creation
      - Deletion
      - Updation
  - Login and SignUp using --> JWT token (Session based login)
  - Data stored in MongoDB (Local Store for Development) and Container when deployed.

---
# Containerizing the application ( Using Docker ):

So in this repo we can also see the **docker-compose** file which can be used to run multiple build images.
So basically what we did in the compose file is
  - Built an image for frontend
  - Built an image for backend
  - And Fetched mongo (db) and mongo-express (for ui interaction of mongodb) from Docker hub
  
Then we combined all this services and run as a compose file which can be seen in the **docker-compose.yaml** file in the repo.
  
---

### Build images of frontend and backend by writing their respective **Dockerfile** can be seen in their respective directoryies and push them to **aws** 'ecr' service using the command below:

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.ap-south-1.amazonaws.com

docker tag frontend-todo-app:<version> <aws_account_id>.dkr.ecr.ap-south-1.amazonaws.com/frontend-todo-app:<version>
docker tag backend-todo-app:<version> <aws_account_id>.dkr.ecr.ap-south-1.amazonaws.com/backend-todo-app:<version>

docker push <aws_account_id>.dkr.ecr.ap-south-1.amazonaws.com/frontend-todo-app:<version>
docker push <aws_account_id>.dkr.ecr.ap-south-1.amazonaws.com/backend-todo-app:<version>
```

---

### Commands to run these application using Docker-compose

```bash
docker-compose -f /docker-compose.yaml up  (Starting the container)
docker-compose -f /docker-compose.yaml down  (Stopping the container)
```

