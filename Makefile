VERSION = $(shell git describe --always --tags --dirty)

.PHONY: deploy
deploy:
	cdk deploy -c version=$(VERSION)

