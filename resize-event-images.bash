#!/bin/bash

# Directory containing the events
event_dir="public/content/events"

# Install imagemin and pngquant plugin
npm install -g sharp-cli

# Loop over all image files in the content
find "$event_dir" -type f \( -iname \*.jpg -o -iname \*.jpeg -o -iname \*.png -o -iname \*.gif -o -iname \*.svg \) | while read file; do
  # Resize the images and overwrite the original images
  sharp resize 1024 -i "$file" -o "$(dirname "$file")" 
done
