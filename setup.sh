# # Clean start
if [ "$(docker ps -aq)" ]; then
  docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
fi


docker compose \
  -f compose/compose.kratos.yml \
  -f compose/compose.hydra.yml \
  -f compose/compose.oathkeeper.yml \
  --project-directory . \
  up -d --force-recreate --build

  # -f compose/compose.ui.yml \