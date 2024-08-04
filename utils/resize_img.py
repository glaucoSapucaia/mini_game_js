from pathlib import Path
from PIL import Image

DIR = Path(__file__).resolve()
DIR_ROOT = DIR.parent.parent
DIR_IMAGE = DIR_ROOT / 'cursores' / 'zangief_cursor.png'

# debug
# print(DIR_IMAGE)

# Cursor


def resize_image(new_width=64, optimize=True, quality=60):
    image_path = DIR_IMAGE

    image_pillow = Image.open(image_path)
    original_with, original_height = image_pillow.size

    if original_with <= new_width:
        image_pillow.close()

    new_height = round(new_width * original_height / original_with)

    new_image = image_pillow.resize((new_width, new_height))
    new_image.save(
        DIR_ROOT / 'cursores' / 'zangief_cursor_ok.png',
        optimize=optimize,
        quality=quality
    )


resize_image()
