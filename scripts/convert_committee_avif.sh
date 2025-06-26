#!/bin/bash

for file in original/*; do
  magick $file -resize '256x352^' -gravity center -extent 256x352 "./$(basename $file | cut -d. -f1).avif"
done
