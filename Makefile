SHELL := /bin/bash

install: install_client install_server

install_client: 
	cd client && yarn install
		
install_server:
	cd server && yarn install

start_client:
	cd client && yarn start

start_server:
	cd server && node index.js

