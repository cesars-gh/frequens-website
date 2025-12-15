#!/bin/bash

# Image Optimization Script for macOS
# Converts and optimizes images for web use
# Usage: ./optimize-images.sh <folder_path>

set -e

# Configuration
MAX_WIDTH=1920
JPEG_QUALITY=80

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if folder path is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide a folder path${NC}"
    echo "Usage: $0 <folder_path>"
    exit 1
fi

SOURCE_DIR="$1"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Directory '$SOURCE_DIR' does not exist${NC}"
    exit 1
fi

OUTPUT_DIR="$SOURCE_DIR/output"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo -e "${YELLOW}🖼️  Image Optimization Script${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Source: $SOURCE_DIR"
echo "Output: $OUTPUT_DIR"
echo "Max width: ${MAX_WIDTH}px"
echo "JPEG quality: ${JPEG_QUALITY}%"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Counter for processed images
count=0

# Enable nullglob so patterns that match nothing expand to nothing
shopt -s nullglob

# Process HEIC files
for file in "$SOURCE_DIR"/*.HEIC "$SOURCE_DIR"/*.heic; do
    name=$(basename "${file%.*}")
    echo -n "Converting: $(basename "$file") -> ${name}.jpg ... "
    sips -s format jpeg -s formatOptions "$JPEG_QUALITY" --resampleWidth "$MAX_WIDTH" "$file" --out "$OUTPUT_DIR/${name}.jpg" >/dev/null 2>&1
    echo -e "${GREEN}✓${NC}"
    count=$((count + 1))
done

# Process JPG/JPEG files (just optimize, already in correct format)
for file in "$SOURCE_DIR"/*.jpg "$SOURCE_DIR"/*.JPG "$SOURCE_DIR"/*.jpeg "$SOURCE_DIR"/*.JPEG; do
    name=$(basename "${file%.*}")
    echo -n "Optimizing: $(basename "$file") -> ${name}.jpg ... "
    sips -s formatOptions "$JPEG_QUALITY" --resampleWidth "$MAX_WIDTH" "$file" --out "$OUTPUT_DIR/${name}.jpg" >/dev/null 2>&1
    echo -e "${GREEN}✓${NC}"
    count=$((count + 1))
done

# Process PNG files (convert to JPEG for smaller size)
for file in "$SOURCE_DIR"/*.png "$SOURCE_DIR"/*.PNG; do
    name=$(basename "${file%.*}")
    echo -n "Converting: $(basename "$file") -> ${name}.jpg ... "
    sips -s format jpeg -s formatOptions "$JPEG_QUALITY" --resampleWidth "$MAX_WIDTH" "$file" --out "$OUTPUT_DIR/${name}.jpg" >/dev/null 2>&1
    echo -e "${GREEN}✓${NC}"
    count=$((count + 1))
done

# Disable nullglob
shopt -u nullglob

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $count -eq 0 ]; then
    echo -e "${YELLOW}No images found to optimize${NC}"
    echo "Supported formats: HEIC, JPG, JPEG, PNG"
else
    echo -e "${GREEN}✅ Optimized $count image(s)${NC}"
    echo ""
    echo "Size comparison:"
    original_size=$(du -sh "$SOURCE_DIR" 2>/dev/null | awk '{print $1}')
    output_size=$(du -sh "$OUTPUT_DIR" 2>/dev/null | awk '{print $1}')
    echo "  Original folder: $original_size"
    echo "  Output folder:   $output_size"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
