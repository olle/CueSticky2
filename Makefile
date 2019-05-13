.PHONY: test serve build deploy

test:
	npm run test

serve:
	npm run serve

build: test
	npm run build

deploy: build
	npm run deploy
