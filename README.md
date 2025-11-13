# Aegis
A self service UI implementation for Ory kratos and Ory hydra.  

The UI supports both passowrd flows and OIDC flows.  
It also works with any kratos configuration for the two flows specified irrespective of the 
provider or the number of fields

The UI can be fully styled and customized to fit any designs or usecases (browser flow or AJAX flow)

## Features
- User registration and login via browser flows
- Social login (Google) | others can be added via kratos configs
- Whoami / current session
- User logout

## Roadmap 
-[ ] Handle Consent flows and JWT customization for hydra


## Getting Started:
NB: the entire app and all other services (ory) run in docker.  
You will therefore need docker installed before proceeding
1. setup the env file in the root of the project according to the `.env.example` file
2. run `chmod +x ./setup.sh` to make the setup command executable
3. run `./setup.sh` to start the whole app and all the ory services