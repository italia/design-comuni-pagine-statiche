#!/bin/sh

mkdir dist

curl -LkSs https://github.com/italia/design-comuni-pagine-statiche/archive/refs/tags/v1.0.0.zip -o dist/1.zip

cd dist

unzip 1.zip
mv design-comuni-pagine-statiche-1.0.0 1.x

cd ..

rm -rf dist/1.zip

cp *.html dist
cp -R assets dist/assets
