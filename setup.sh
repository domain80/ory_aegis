# # Clean start
# if [ "$(docker ps -aq)" ]; then
#   docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
# fi

docker compose \
  -f cfg/compose/compose.kratos.yml \
  -f cfg/compose/compose.hydra.yml \
  -f cfg/compose/compose.oathkeeper.yml \
  -f cfg/compose/compose.ui.yml \
  --project-directory . up -d --force-recreate --build
