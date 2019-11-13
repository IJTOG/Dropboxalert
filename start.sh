docker run --restart always --name dropboxalert -p80:3001 dropboxalert

docker run --rm -p 27017:27017 -v /db/prod:/data/db -d --name dbadb dbadb