import glob
import os

files = glob.glob("app/solutions/**/page.jsx", recursive=True)

for f in files:
    with open(f, "r") as file:
        content = file.read()
    
    new_content = content.replace('className="bg-white text-gray-900 min-h-screen overflow-x-hidden"', 'className="bg-white text-gray-900 min-h-screen"')
    
    if new_content != content:
        with open(f, "w") as file:
            file.write(new_content)
        print(f"Removed overflow-x-hidden from {f}")

