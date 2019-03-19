up:
	git clone https://github.com/todo-deploy/todo-app.git
	mv todo-app/* .
	rm -rf todo-app/
	docker-compose up

down:
	docker-compose down

status:
	docker-compose ps