from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad
import base64

#-------------------------
key = "01234567890123456789012345678901" # String de 16, 24 ó 32 bytes 
messageToEncrypt = 'este es un mensaje en texto plano' # String con el mensaje en texto plano
BLOCK_SIZE = 32 #16, 24 ó 32 bytes, coincidiendo con el tamaño de la key
#-------------------------

# Convirtiendo a bytes ambos parámetros
encodedKey = key.encode()
encodedMessage = messageToEncrypt.encode()

# Pad pkcs7 con tamaño de bloque como parámetro
paddedMessage = pad(encodedMessage, BLOCK_SIZE)

# Creando instancia que nos permitirá encriptar con AES-ECB 
cipher = AES.new(encodedKey, AES.MODE_ECB)

# Cifrando el texto plano
ciphertext= cipher.encrypt(paddedMessage)

# Se convierte a base64 para prepararlo para desencriptar en JS
b64 = base64.b64encode(ciphertext)

# Preparación del resultado de la encriptación
# Conversión a string y eliminado de " b' " y " ' "
strCipher = str(b64)
strCipher = strCipher[2:]
strCipher = strCipher[:-1]

# Creación .html con la llave y el mensaje cifrado y formateado a base64
f = open("index.html", "w+")
f.write('<p>Este sitio contiene un mensaje secreto</p>\n')
f.write('<div class="AES" id="'+ strCipher +'"></div>\n')
f.write('<div class="key" id="'+ str(key) +'"></div>')
f.close()