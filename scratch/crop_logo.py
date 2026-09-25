from PIL import Image

src_path = r"C:\Users\NXTGN\.gemini\antigravity\brain\6374b9c3-4f22-4ae1-8225-73188be8641b\.user_uploaded\media_1789989898037.png"
img = Image.open(src_path)
bbox = img.getbbox()
print("Bounding box:", bbox)

# Crop to bounding box with a small breathing margin (e.g. 4px)
margin = 4
left = max(0, bbox[0] - margin)
top = max(0, bbox[1] - margin)
right = min(img.width, bbox[2] + margin)
bottom = min(img.height, bbox[3] + margin)
cropped = img.crop((left, top, right, bottom))
print("Cropped size:", cropped.size)

# Save both cropped and original in public/images/
import os
os.makedirs("public/images", exist_ok=True)
cropped.save("public/images/logo.png", format="PNG")
img.save("public/images/logo-raw.png", format="PNG")
print("Saved public/images/logo.png and public/images/logo-raw.png")
