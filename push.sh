#!/bin/bash

vuepress build decs
cd docs/.vuepress/dist
git add .
git commit -m "."
git push origin master
