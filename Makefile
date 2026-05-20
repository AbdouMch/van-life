.DEFAULT_GOAL := help
ENV_FILE     = docker.env
COMPOSE      = docker compose --env-file $(ENV_FILE)
PROD_COMPOSE = docker compose -f docker-compose.prod.yml --env-file $(ENV_FILE)
SERVICE      = react-app

.PHONY: help up down restart logs shell install add remove build preview clean run prod-build prod-up prod-down prod-logs

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

up: ## Start the dev container and follow logs (Ctrl+C only stops tailing, not the container)
	$(COMPOSE) up -d
	@echo ""
	@echo "  Container started — following logs. Ctrl+C stops tailing, not the container."
	@echo "  Run 'make logs' at any time to re-attach.\n"
	$(COMPOSE) logs -f $(SERVICE)

down: ## Stop and remove containers
	$(COMPOSE) down

restart: ## Restart the dev container
	$(COMPOSE) restart $(SERVICE)

logs: ## Tail live logs
	$(COMPOSE) logs -f $(SERVICE)

shell: ## Open a shell inside the container
	$(COMPOSE) exec $(SERVICE) sh

install: ## Run npm install inside the container
	$(COMPOSE) exec $(SERVICE) npm install

add: ## Install a package  →  make add PKG=react-router-dom
	$(COMPOSE) exec $(SERVICE) npm install $(PKG)

remove: ## Remove a package  →  make remove PKG=react-router-dom
	$(COMPOSE) exec $(SERVICE) npm uninstall $(PKG)

build: ## Build for production inside the container
	$(COMPOSE) exec $(SERVICE) npm run build

preview: ## Preview production build inside the container
	$(COMPOSE) exec $(SERVICE) npm run preview -- --port $${PREVIEW_PORT:-4173}

clean: ## Stop containers and wipe node_modules volume
	$(COMPOSE) down -v

run: ## Run an arbitrary command  →  make run c="npm test"
	@$(eval c ?=)
	@$(COMPOSE) exec $(SERVICE) $(c)

prod-build: ## Build the production image
	$(PROD_COMPOSE) build

prod-up: ## Start the production container
	$(PROD_COMPOSE) up -d

prod-down: ## Stop the production container
	$(PROD_COMPOSE) down

prod-logs: ## Tail production logs
	$(PROD_COMPOSE) logs -f