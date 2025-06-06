#!/bin/bash

for file in src/assets/committee/original/*; do
  magick $file -resize 256x352^ -gravity center -extent 256x352 "src/assets/committee/$(basename $file | cut -d. -f1).avif"
done
