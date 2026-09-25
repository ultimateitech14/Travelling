from PIL import Image
import numpy as np

src_path = r"C:\Users\NXTGN\.gemini\antigravity\brain\6374b9c3-4f22-4ae1-8225-73188be8641b\.user_uploaded\media_1789989898037.png"
img = Image.open(src_path)
print("Size:", img.size, "Mode:", img.mode)

# Check corners / edges to see background color
pixels = list(img.getdata())
corners = [pixels[0], pixels[img.size[0]-1], pixels[-img.size[0]], pixels[-1]]
print("Corner pixels:", corners[:4])
