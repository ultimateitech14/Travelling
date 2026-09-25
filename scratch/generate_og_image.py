import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image(output_path='public/og-image.png', square_output_path='public/og-square.png'):
    W, H = 1200, 630
    
    # 1. Base obsidian luxury background
    img = Image.new('RGBA', (W, H), (8, 8, 7, 255)) # #080807 obsidian
    
    # 2. Luxury fine border frame
    draw = ImageDraw.Draw(img)
    draw.rectangle([(36, 36), (W - 36, H - 36)], outline=(78, 127, 104, 70), width=1)
    draw.rectangle([(42, 42), (W - 42, H - 42)], outline=(78, 127, 104, 35), width=1)
    
    # Corner brackets (luxury explorer aesthetic)
    bracket_len = 28
    for cx, cy in [(36, 36), (W - 36, 36), (36, H - 36), (W - 36, H - 36)]:
        dx = bracket_len if cx == 36 else -bracket_len
        dy = bracket_len if cy == 36 else -bracket_len
        draw.line([(cx, cy), (cx + dx, cy)], fill=(114, 169, 139, 220), width=2)
        draw.line([(cx, cy), (cx, cy + dy)], fill=(114, 169, 139, 220), width=2)
    
    # 3. Soft ambient radial atmospheric glow behind the logo
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    center_x, center_y = 600, 260
    
    for r in range(320, 0, -10):
        factor = (1 - r / 320) ** 1.7
        alpha = int(50 * factor)
        g_draw.ellipse(
            (center_x - r, center_y - int(r * 0.72), center_x + r, center_y + int(r * 0.72)),
            fill=(78, 127, 104, alpha)
        )
    
    glow = glow.filter(ImageFilter.GaussianBlur(30))
    img = Image.alpha_composite(img, glow)
    
    # 4. Load, crop, and upscale logo
    logo = Image.open('public/logo.png').convert('RGBA')
    bbox = logo.getbbox()
    logo_tight = logo.crop(bbox)
    
    # Target size for logo on 1200x630
    target_w = 480
    aspect = logo_tight.height / logo_tight.width
    target_h = int(target_w * aspect)
    
    scaled_logo = logo_tight.resize((target_w, target_h), Image.Resampling.LANCZOS)
    scaled_logo = scaled_logo.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=2))
    
    logo_x = (W - target_w) // 2
    logo_y = 135
    img.paste(scaled_logo, (logo_x, logo_y), scaled_logo)
    
    # 5. Typography
    try:
        font_eyebrow = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 15)
        font_tagline = ImageFont.truetype('C:\\Windows\\Fonts\\georgiai.ttf', 27)
        font_specs = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 13)
        font_brand = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 13)
    except Exception:
        font_eyebrow = ImageFont.load_default()
        font_tagline = font_eyebrow
        font_specs = font_eyebrow
        font_brand = font_eyebrow

    draw = ImageDraw.Draw(img)
    
    # Eyebrow header above logo
    eyebrow = 'C U R A T E D   E X P E D I T I O N S   ·   R E M O T E   I N D I A'
    bb_eye = draw.textbbox((0, 0), eyebrow, font=font_eyebrow)
    ew = bb_eye[2] - bb_eye[0]
    draw.text(((W - ew) // 2, 92), eyebrow, fill=(114, 169, 139, 230), font=font_eyebrow)
    
    # Tagline below logo
    tagline = '"Travel That Never Makes the Brochure"'
    bb_tag = draw.textbbox((0, 0), tagline, font=font_tagline)
    tw = bb_tag[2] - bb_tag[0]
    draw.text(((W - tw) // 2, logo_y + target_h + 38), tagline, fill=(232, 228, 219, 240), font=font_tagline)
    
    # Cohort / itinerary badge
    specs = '16 SEATS ONLY   ·   FORCE URBANIA   ·   ZERO GENERIC ROUTES'
    bb_sp = draw.textbbox((0, 0), specs, font=font_specs)
    sw = bb_sp[2] - bb_sp[0]
    
    pill_pad_x, pill_pad_y = 22, 9
    px0 = (W - sw) // 2 - pill_pad_x
    py0 = logo_y + target_h + 90
    px1 = (W + sw) // 2 + pill_pad_x
    py1 = py0 + (bb_sp[3] - bb_sp[1]) + pill_pad_y * 2
    
    pill = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(pill)
    p_draw.rounded_rectangle([(px0, py0), (px1, py1)], radius=5, fill=(16, 22, 19, 220), outline=(78, 127, 104, 130), width=1)
    img = Image.alpha_composite(img, pill)
    
    draw = ImageDraw.Draw(img)
    draw.text(((W - sw) // 2, py0 + pill_pad_y), specs, fill=(185, 205, 195, 240), font=font_specs)
    
    # Subfooter subtle URL / Brand
    brand_sub = 'BEINGTRAVELLER.IN'
    bb_br = draw.textbbox((0, 0), brand_sub, font=font_brand)
    bw = bb_br[2] - bb_br[0]
    draw.text(((W - bw) // 2, H - 72), brand_sub, fill=(114, 169, 139, 160), font=font_brand)
    
    # Save standard 1200x630
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    rgb_img = img.convert('RGB')
    rgb_img.save(output_path, format='PNG', optimize=True)
    print(f'Saved {output_path} ({os.path.getsize(output_path)} bytes)')
    
    # Also save to app/opengraph-image.png and app/twitter-image.png for Next.js automatic OG metadata
    os.makedirs('app', exist_ok=True)
    rgb_img.save('app/opengraph-image.png', format='PNG', optimize=True)
    rgb_img.save('app/twitter-image.png', format='PNG', optimize=True)
    print('Saved app/opengraph-image.png and app/twitter-image.png')
    
    # 6. Create 800x800 square OG image for 1:1 square preview cards (WhatsApp / Telegram)
    sq_size = 800
    sq_img = Image.new('RGBA', (sq_size, sq_size), (8, 8, 7, 255))
    
    # Glow for square
    sq_glow = Image.new('RGBA', (sq_size, sq_size), (0, 0, 0, 0))
    sq_gdraw = ImageDraw.Draw(sq_glow)
    for r in range(300, 0, -10):
        factor = (1 - r / 300) ** 1.7
        alpha = int(55 * factor)
        sq_gdraw.ellipse(
            (400 - r, 380 - r, 400 + r, 380 + r),
            fill=(78, 127, 104, alpha)
        )
    sq_glow = sq_glow.filter(ImageFilter.GaussianBlur(35))
    sq_img = Image.alpha_composite(sq_img, sq_glow)
    
    # Frame for square
    sq_draw = ImageDraw.Draw(sq_img)
    sq_draw.rectangle([(28, 28), (sq_size - 28, sq_size - 28)], outline=(78, 127, 104, 70), width=1)
    sq_draw.rectangle([(34, 34), (sq_size - 34, sq_size - 34)], outline=(78, 127, 104, 35), width=1)
    
    for cx, cy in [(28, 28), (sq_size - 28, 28), (28, sq_size - 28), (sq_size - 28, sq_size - 28)]:
        dx = 24 if cx == 28 else -24
        dy = 24 if cy == 28 else -24
        sq_draw.line([(cx, cy), (cx + dx, cy)], fill=(114, 169, 139, 220), width=2)
        sq_draw.line([(cx, cy), (cx, cy + dy)], fill=(114, 169, 139, 220), width=2)
        
    # Scale logo for square
    target_sq_w = 480
    target_sq_h = int(target_sq_w * aspect)
    scaled_sq_logo = logo_tight.resize((target_sq_w, target_sq_h), Image.Resampling.LANCZOS)
    scaled_sq_logo = scaled_sq_logo.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=2))
    
    sq_img.paste(scaled_sq_logo, ((sq_size - target_sq_w) // 2, 240), scaled_sq_logo)
    
    # Text on square
    sq_draw = ImageDraw.Draw(sq_img)
    bb_sq_eye = sq_draw.textbbox((0, 0), eyebrow, font=font_eyebrow)
    sq_ew = bb_sq_eye[2] - bb_sq_eye[0]
    sq_draw.text(((sq_size - sq_ew) // 2, 175), eyebrow, fill=(114, 169, 139, 230), font=font_eyebrow)
    
    bb_sq_tag = sq_draw.textbbox((0, 0), tagline, font=font_tagline)
    sq_tw = bb_sq_tag[2] - bb_sq_tag[0]
    sq_draw.text(((sq_size - sq_tw) // 2, 240 + target_sq_h + 40), tagline, fill=(232, 228, 219, 240), font=font_tagline)
    
    bb_sq_sp = sq_draw.textbbox((0, 0), specs, font=font_specs)
    sq_sw = bb_sq_sp[2] - bb_sq_sp[0]
    
    sq_px0 = (sq_size - sq_sw) // 2 - pill_pad_x
    sq_py0 = 240 + target_sq_h + 96
    sq_px1 = (sq_size + sq_sw) // 2 + pill_pad_x
    sq_py1 = sq_py0 + (bb_sq_sp[3] - bb_sp[1]) + pill_pad_y * 2
    
    sq_pill = Image.new('RGBA', (sq_size, sq_size), (0, 0, 0, 0))
    sq_pdraw = ImageDraw.Draw(sq_pill)
    sq_pdraw.rounded_rectangle([(sq_px0, sq_py0), (sq_px1, sq_py1)], radius=5, fill=(16, 22, 19, 220), outline=(78, 127, 104, 130), width=1)
    sq_img = Image.alpha_composite(sq_img, sq_pill)
    
    sq_draw = ImageDraw.Draw(sq_img)
    sq_draw.text(((sq_size - sq_sw) // 2, sq_py0 + pill_pad_y), specs, fill=(185, 205, 195, 240), font=font_specs)
    
    sq_draw.text(((sq_size - bw) // 2, sq_size - 60), brand_sub, fill=(114, 169, 139, 160), font=font_brand)
    
    sq_rgb = sq_img.convert('RGB')
    sq_rgb.save(square_output_path, format='PNG', optimize=True)
    print(f'Saved {square_output_path} ({os.path.getsize(square_output_path)} bytes)')

if __name__ == '__main__':
    create_og_image()
