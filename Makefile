.PHONY: serve build deploy

serve:
	npm run serve

build:
	npm run build

deploy: build
	npm run deploy



