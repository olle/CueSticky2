.PHONY: test watch docs serve build deploy

test:
	npm run test

watch:
	npm run watch

docs:
	npm run docs

serve:
	npm run serve

build: test
	npm run build

deploy: build
	npm run deploy
