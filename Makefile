.PHONY: test watch serve build deploy

test:
	npm run test

watch:
	npm run watch

serve:
	npm run serve

build: test
	npm run build

deploy: build
	npm run deploy
