#!/bin/bash

for file in original/*; do
  magick "$file" -resize x300 "$(basename "$file" | cut -d. -f1).avif"
done
