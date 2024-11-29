
up:
	docker compose up -d

down:
	docker compose stop

build: down
	docker compose up -d --build --force-recreate
