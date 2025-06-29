#!/bin/bash

for file in original/*; do
  magick $file -resize 104x104^ -gravity center -extent 104x104 "$(basename $file | cut -d. -f1).avif";
done
