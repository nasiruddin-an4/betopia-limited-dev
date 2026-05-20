import glob
import re

files = glob.glob("app/solutions/**/page.jsx", recursive=True)

for f in files:
    with open(f, "r") as file:
        content = file.read()
    
    # Replace the iconMap logic with just `const Icon = sol.icon || Shield;`
    old_icon_logic = """              const iconMap = {
                Shield, Activity, Globe, Lock, Network, Server, Monitor,
                Code, Cloud, Box, Database, Layers, ActivitySquare
              };
              const Icon = iconMap[sol.icon] || Shield;"""
              
    new_icon_logic = "              const Icon = sol.icon || Shield;"
    
    if old_icon_logic in content:
        content = content.replace(old_icon_logic, new_icon_logic)
        with open(f, "w") as file:
            file.write(content)
        print(f"Fixed icon logic in {f}")

