import qrcode as qr
html_content= "thanks for visiting our site..."
img = qr.make(html_content)
img.save('src//hello.png')