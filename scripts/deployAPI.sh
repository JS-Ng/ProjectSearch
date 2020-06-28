# Please run this script in root directory for deployment
# This script deploys api locally within docker
#cd searchAPI

bash scripts/deployReact.sh
docker build -t "apiserver:latest" -f searchAPI/Dockerfile .
docker rmi -f $(docker images -f "dangling=true" -q) # force remove all dangling images
docker run "apiserver:latest" -p 8080:8080