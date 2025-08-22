#!/bin/bash

CHARACTER_SLUGS=(
    "akuma" "alex" "chunny" "dudley" "elena" "gill" "hugo" "ibuki" "ken" 
    "makoto" "necro" "oro" "q" "remy" "ryu" "sean" "twelve" "urien" "yang" "yun"
)

# Define the base URL and the download directory
BASE_URL="https://www.fightersgeneration.com/np2/char1/"
DOWNLOAD_DIR="sf3_3rd_strike_images"
mkdir -p "$DOWNLOAD_DIR"

echo "Beginning image download for all 19 base characters from Street Fighter III: Third Strike..."
echo "Images will be saved in the '$DOWNLOAD_DIR' folder."
echo "Note: The script will report a status code for each download attempt."

# Loop through each character slug to form the URL and download the image
for SLUG in "${CHARACTER_SLUGS[@]}"; do
    IMAGE_URL="${BASE_URL}${SLUG}-3rd.jpg"
    
    echo "Attempting to download image for $SLUG..."
    curl -sS -o "$DOWNLOAD_DIR/${SLUG}.jpg" -w " (HTTP Status: %{http_code})\n" "$IMAGE_URL"

done

echo "Download process complete. Please check the '$DOWNLOAD_DIR' directory."