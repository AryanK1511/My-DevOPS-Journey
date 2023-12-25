# Introduction to Docker

Sometimes we come across situations where a software runs on one machine but doesn't work on the other. This can happen because:
1. One or more files are missing
2. Software version mismatch
3. Different configuration settings

This is where Docker comes in as it allows you to package your application and run it on any machine that runs Docker. If someone joins your team, they don't need to install dependencies to run your application. They can use Docker to pull up your isolated application package and run it. You can run multiple application having different dependencies on the same machine.

## Virtual Machines v/s Containers

#### Containers

A container is an isolated environment for running an application.

#### Virtual Machines

A virtual machine is an abstraction of a machine (physical hardware).