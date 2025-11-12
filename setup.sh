# # Clean start
# if [ "$(docker ps -aq)" ]; then
#   docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
# fi

docker compose \
  -f .services/compose/compose.kratos.yml \
  -f .services/compose/compose.hydra.yml \
  -f .services/compose/compose.oathkeeper.yml \
  -f .services/compose/compose.ui.yml \
  --project-directory . \
  up -d --force-recreate --build
