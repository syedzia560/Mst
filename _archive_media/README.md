# MST Archived Media Repository

This directory contains unreferenced and heavy raw media files safely archived from `/public/` during the Phase 3 performance and technical optimization.

## Archived Assets

1. **`video/34.mp4`** (~9.7 MB)
   - Unreferenced video file. Active site videos are `public/video/background.mp4`, `director-message.mp4`, and `executive director.mp4`.
2. **`images/standards/*.webp`** (8 raw uncompressed webp files, ~29 MB)
   - `IMG_1547.webp`, `IMG_1553.webp`, `IMG_1555.webp`, `IMG_1556.webp`, `IMG_1559.webp`, `IMG_1562.webp`, `IMG_1568.webp`, `IMG_1572.webp`
   - Active website pages exclusively reference the web-optimized versions in `/public/images/standards/optimized/`.
3. **`images/laboratory/IMG_17*.JPG`** (5 high-resolution raw camera files, ~30 MB)
   - `IMG_1748.JPG`, `IMG_1749.JPG`, `IMG_1756.JPG`, `IMG_1758.JPG`, `IMG_1761.JPG`
   - Unreferenced original camera batch files. Active laboratory sections use `IMG_1391.JPG`, `IMG_1392.JPG`, and `IMG-20161129-*.jpg`.

## Reversibility Instructions

To restore any archived file back to `public/`, run:
```bash
cp _archive_media/video/34.mp4 public/video/
cp _archive_media/images/standards/* public/images/standards/
cp _archive_media/images/laboratory/* public/images/laboratory/
```
