import shutil
import random

# debug
# print(DIR_ROOT)


def fase_randomica():
    fase = random.randint(1, 12)
    print(fase)

    shutil.copyfile(
        f'../audio/efeitos/e{str(fase)}.mp3', '../random_fase/efeito.mp3')
    shutil.copyfile(
        f'../audio/temas/t{str(fase)}.mp3', '../random_fase/tema.mp3')
    shutil.copyfile(f'../cursores/c{str(fase)}.png',
                    '../random_fase/cursor.png')
    shutil.copyfile(
        f'../img/street_img/f{str(fase)}.jpg', '../random_fase/fundo.jpg')


fase_randomica()
