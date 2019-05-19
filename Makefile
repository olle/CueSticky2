.PHONY: test watch docs serve build deploy

test: node_modules
	npm run test

watch: node_modules
	npm run watch

docs: node_modules
	npm run docs

serve: node_modules
	npm run serve

build: test
	npm run build

deploy: build docs
	npm run deploy

clean:
	rm -rf dist
	rm -rf node_modules
	rm -rf .cache

node_modules:
	npm install
