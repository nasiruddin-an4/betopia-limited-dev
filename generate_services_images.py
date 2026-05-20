import os
import math
from PIL import Image, ImageDraw, ImageFilter

def create_radial_gradient(width, height, center_color, edge_color, radius=None):
    # Create background image with radial gradient
    base = Image.new("RGBA", (width, height), edge_color)
    if radius is None:
        radius = int(math.sqrt(width**2 + height**2) / 2)
    
    gradient = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(gradient)
    
    cx, cy = width // 2, height // 2
    for r in range(radius, 0, -2):
        alpha = int(255 * (1.0 - (r / radius)))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=alpha)
        
    gradient = gradient.filter(ImageFilter.GaussianBlur(15))
    
    overlay = Image.new("RGBA", (width, height), center_color)
    base = Image.composite(overlay, base, gradient)
    return base.convert("RGB")

def draw_tech_grid(image, spacing=40, line_color=(255, 255, 255, 12)):
    width, height = image.size
    draw = ImageDraw.Draw(image, "RGBA")
    
    # Draw horizontal and vertical grid lines
    for x in range(0, width, spacing):
        draw.line([(x, 0), (x, height)], fill=line_color, width=1)
    for y in range(0, height, spacing):
        draw.line([(0, y), (width, y)], fill=line_color, width=1)

def draw_glassmorphic_card(draw, x, y, w, h, fill_color=(255, 255, 255, 10), border_color=(249, 115, 22, 100), radius=20):
    # Draw a rounded rectangle card
    draw.rounded_rectangle([x, y, x + w, y + h], radius=radius, fill=fill_color, outline=border_color, width=2)

def generate_image(filename, title, category_icon):
    width, height = 800, 600
    
    # 1. Dark tech background gradient
    # Deep slate edge, glowing warm orange center
    image = create_radial_gradient(
        width, height, 
        center_color=(249, 115, 22, 28), # Bright orange radial glow
        edge_color=(11, 15, 25, 255)     # Deep dark slate
    )
    
    # 2. Draw active tech grid
    draw_tech_grid(image, spacing=45, line_color=(249, 115, 22, 12))
    
    draw = ImageDraw.Draw(image, "RGBA")
    
    # 3. Main Glassmorphic Container
    cx, cy = width // 2, height // 2
    draw_glassmorphic_card(draw, cx - 220, cy - 180, 440, 360, fill_color=(255, 255, 255, 6), border_color=(249, 115, 22, 45), radius=30)
    
    # 4. Interactive Outer Pulsing Rings
    draw.ellipse([cx - 240, cy - 200, cx + 240, cy + 200], outline=(249, 115, 22, 15), width=1)
    draw.ellipse([cx - 260, cy - 220, cx + 260, cy + 220], outline=(255, 255, 255, 8), width=1)
    
    # 5. Draw high-fidelity category custom vector graphics
    if category_icon == "governance":
        # Draw a secure geometric shield
        points = [
            (cx, cy - 80),
            (cx + 60, cy - 50),
            (cx + 60, cy + 10),
            (cx, cy + 80),
            (cx - 60, cy + 10),
            (cx - 60, cy - 50)
        ]
        draw.polygon(points, fill=(249, 115, 22, 35), outline=(249, 115, 22, 200), width=3)
        # Inner shield
        inner_points = [
            (cx, cy - 60),
            (cx + 40, cy - 40),
            (cx + 40, cy + 5),
            (cx, cy + 60),
            (cx - 40, cy + 5),
            (cx - 40, cy - 40)
        ]
        draw.polygon(inner_points, fill=(255, 255, 255, 10), outline=(255, 255, 255, 180), width=2)
        # Key lock inside shield
        draw.rounded_rectangle([cx - 10, cy - 10, cx + 10, cy + 20], fill=(255, 255, 255, 220), outline=(249, 115, 22, 255), width=2, radius=3)
        draw.ellipse([cx - 15, cy - 25, cx + 15, cy - 5], outline=(255, 255, 255, 220), width=4)
        
    elif category_icon == "pipeline":
        # Draw a modern horizontal pipeline with floating data nodes
        draw.line([(cx - 180, cy), (cx + 180, cy)], fill=(249, 115, 22, 120), width=4)
        draw.line([(cx - 180, cy - 40), (cx + 180, cy - 40)], fill=(255, 255, 255, 50), width=2)
        draw.line([(cx - 180, cy + 40), (cx + 180, cy + 40)], fill=(255, 255, 255, 50), width=2)
        
        # Pipelines data chunks
        draw.ellipse([cx - 100 - 20, cy - 20, cx - 100 + 20, cy + 20], fill=(249, 115, 22, 200), outline=(255, 255, 255, 255), width=2)
        draw.ellipse([cx - 20, cy - 40 - 15, cx + 20, cy - 40 + 15], fill=(255, 255, 255, 180), outline=(249, 115, 22, 255), width=2)
        draw.ellipse([cx + 100 - 25, cy + 25 - 25, cx + 100 + 25, cy + 25 + 25], fill=(249, 115, 22, 255), outline=(255, 255, 255, 255), width=3)
        
    elif category_icon == "ai":
        # Draw dynamic brain neural nodes
        nodes = [
            (cx, cy - 60),     # Top central
            (cx - 80, cy - 20),# Mid Left
            (cx + 80, cy - 20),# Mid Right
            (cx - 50, cy + 50),# Bottom Left
            (cx + 50, cy + 50) # Bottom Right
        ]
        # Connections
        for i, n1 in enumerate(nodes):
            for n2 in nodes[i+1:]:
                draw.line([n1, n2], fill=(249, 115, 22, 80), width=2)
                
        # Pulsing active circles on nodes
        for node in nodes:
            draw.ellipse([node[0] - 18, node[1] - 18, node[0] + 18, node[1] + 18], fill=(255, 255, 255, 30), outline=(249, 115, 22, 250), width=3)
            draw.ellipse([node[0] - 8, node[1] - 8, node[0] + 8, node[1] + 8], fill=(255, 255, 255, 240))
            
    elif category_icon == "dashboard":
        # Draw a beautiful analytical growth line graph
        points = [
            (cx - 150, cy + 80),
            (cx - 100, cy + 40),
            (cx - 50, cy + 60),
            (cx, cy - 20),
            (cx + 50, cy + 10),
            (cx + 100, cy - 60),
            (cx + 150, cy - 90)
        ]
        # Draw area under curve
        area_polygon = points + [(cx + 150, cy + 100), (cx - 150, cy + 100)]
        draw.polygon(area_polygon, fill=(249, 115, 22, 30))
        # Draw line
        draw.line(points, fill=(249, 115, 22, 240), width=4)
        # Highlight points
        for pt in points:
            draw.ellipse([pt[0] - 8, pt[1] - 8, pt[0] + 8, pt[1] + 8], fill=(255, 255, 255, 255), outline=(249, 115, 22, 255), width=2)
            
    elif category_icon == "migration":
        # Draw server nodes migrating up to cloud
        draw.rounded_rectangle([cx - 70, cy + 30, cx + 70, cy + 70], radius=8, fill=(255, 255, 255, 20), outline=(255, 255, 255, 120), width=2)
        draw.ellipse([cx - 50, cy + 50 - 5, cx - 40, cy + 50 + 5], fill=(249, 115, 22, 255))
        
        # Upward data stream lines
        draw.line([(cx, cy + 20), (cx, cy - 30)], fill=(249, 115, 22, 200), width=3)
        draw.line([(cx - 30, cy + 10), (cx - 30, cy - 20)], fill=(249, 115, 22, 100), width=1)
        draw.line([(cx + 30, cy + 10), (cx + 30, cy - 20)], fill=(249, 115, 22, 100), width=1)
        
        # Cloud outlines on top
        draw.ellipse([cx - 60, cy - 80, cx, cy - 30], fill=(249, 115, 22, 40), outline=(249, 115, 22, 200), width=2)
        draw.ellipse([cx - 20, cy - 90, cx + 50, cy - 30], fill=(249, 115, 22, 40), outline=(249, 115, 22, 200), width=2)
        draw.ellipse([cx + 20, cy - 70, cx + 70, cy - 30], fill=(249, 115, 22, 40), outline=(249, 115, 22, 200), width=2)
        
    elif category_icon == "architecture":
        # Draw concentric orbiting microservices nodes
        draw.ellipse([cx - 100, cy - 100, cx + 100, cy + 100], outline=(255, 255, 255, 40), width=2)
        draw.ellipse([cx - 60, cy - 60, cx + 60, cy + 60], outline=(249, 115, 22, 60), width=1)
        # Center core
        draw.ellipse([cx - 25, cy - 25, cx + 25, cy + 25], fill=(249, 115, 22, 220), outline=(255, 255, 255, 255), width=2)
        # Orbiting nodes
        orbits = [
            (cx - 100, cy),
            (cx + 70, cy - 70),
            (cx - 40, cy + 40),
            (cx + 60, cy + 60)
        ]
        for opt in orbits:
            draw.ellipse([opt[0] - 12, opt[1] - 12, opt[0] + 12, opt[1] + 12], fill=(255, 255, 255, 240), outline=(249, 115, 22, 255), width=2)
            
    elif category_icon == "loop":
        # Draw beautiful infinity loop / DevOps loop
        for t_val in range(0, 360, 2):
            rad1 = math.radians(t_val)
            rad2 = math.radians(t_val + 2)
            
            # Lemniscate of Bernoulli equation
            scale = 160
            x1 = cx + (scale * math.cos(rad1)) / (1 + math.sin(rad1)**2)
            y1 = cy + (scale * math.cos(rad1) * math.sin(rad1)) / (1 + math.sin(rad1)**2)
            
            x2 = cx + (scale * math.cos(rad2)) / (1 + math.sin(rad2)**2)
            y2 = cy + (scale * math.cos(rad2) * math.sin(rad2)) / (1 + math.sin(rad2)**2)
            
            draw.line([(x1, y1), (x2, y2)], fill=(249, 115, 22, 255), width=4)
            # Draw outer glow glow dots
            if t_val % 45 == 0:
                draw.ellipse([x1 - 8, y1 - 8, x1 + 8, y1 + 8], fill=(255, 255, 255, 255), outline=(249, 115, 22, 255), width=2)
                
    elif category_icon == "threat":
        # Draw a dynamic cybersecurity scanning radar screen
        draw.ellipse([cx - 120, cy - 120, cx + 120, cy + 120], outline=(249, 115, 22, 120), width=3)
        draw.ellipse([cx - 80, cy - 80, cx + 80, cy + 80], outline=(249, 115, 22, 60), width=1)
        draw.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], outline=(249, 115, 22, 40), width=1)
        
        # Radar sweep line
        angle = math.radians(45)
        rx = cx + int(120 * math.cos(angle))
        ry = cy - int(120 * math.sin(angle))
        draw.line([(cx, cy), (rx, ry)], fill=(249, 115, 22, 200), width=3)
        
        # Alert threat items
        draw.ellipse([cx + 50, cy - 40, cx + 65, cy - 25], fill=(255, 50, 50, 220), outline=(255, 255, 255, 255), width=1)
        draw.ellipse([cx - 70, cy + 20, cx - 55, cy + 35], fill=(255, 255, 255, 200), outline=(249, 115, 22, 255), width=2)
        
    elif category_icon == "team":
        # Draw shared interactive developers nodes
        draw.ellipse([cx - 50, cy - 40, cx + 50, cy + 60], fill=(249, 115, 22, 35), outline=(249, 115, 22, 200), width=3)
        # Left bubble
        draw.ellipse([cx - 100, cy + 10, cx - 40, cy + 70], fill=(255, 255, 255, 10), outline=(255, 255, 255, 120), width=2)
        # Right bubble
        draw.ellipse([cx + 40, cy + 10, cx + 100, cy + 70], fill=(255, 255, 255, 10), outline=(255, 255, 255, 120), width=2)
        
        # Dynamic team connections
        draw.line([(cx - 70, cy + 40), (cx, cy + 10)], fill=(249, 115, 22, 255), width=2)
        draw.line([(cx + 70, cy + 40), (cx, cy + 10)], fill=(249, 115, 22, 255), width=2)
        
    else:
        # Standard dynamic abstract tech engine gear
        for i in range(8):
            ang = math.radians(i * 45)
            x_spoke = cx + int(60 * math.cos(ang))
            y_spoke = cy + int(60 * math.sin(ang))
            draw.line([(cx, cy), (x_spoke, y_spoke)], fill=(249, 115, 22, 200), width=6)
            
        draw.ellipse([cx - 45, cy - 45, cx + 45, cy + 45], fill=(11, 15, 25, 255), outline=(249, 115, 22, 255), width=4)
        draw.ellipse([cx - 20, cy - 20, cx + 20, cy + 20], fill=(249, 115, 22, 255))
        
    # 6. Save final file
    image.save(filename, "JPEG", quality=95)
    print(f"Generated successfully: {filename}")

# Target folder
os.makedirs("public/servicesImg", exist_ok=True)

# Generate all 23 dynamic capability images with extreme high-fidelity brand graphics
images_mapping = [
    # AI & Analytics
    ("public/servicesImg/data-strategy-governance.jpg", "Data Strategy & Governance", "governance"),
    ("public/servicesImg/data-engineering-platforms.jpg", "Data Engineering & Platforms", "pipeline"),
    ("public/servicesImg/ai-advanced-analytics.jpg", "AI & Advanced Analytics", "ai"),
    ("public/servicesImg/bi-decision-enablement.jpg", "BI & Decision Enablement", "dashboard"),
    
    # Cloud Modernization
    ("public/servicesImg/cloud-strategy-migration.jpg", "Cloud Strategy & Migration", "migration"),
    ("public/servicesImg/cloud-native-architecture.jpg", "Cloud-Native Architecture", "architecture"),
    ("public/servicesImg/devops-automation.jpg", "DevOps & Automation", "loop"),
    ("public/servicesImg/finops-cost-optimization.jpg", "FinOps & Cost Optimization", "dashboard"),
    
    # Cybersecurity
    ("public/servicesImg/cyber-risk-governance.jpg", "Cyber Risk & Governance Services", "governance"),
    ("public/servicesImg/threat-detection-resilience.jpg", "Threat Detection, Response & Resilience", "threat"),
    ("public/servicesImg/identity-infrastructure-security.jpg", "Identity, Endpoint & Infrastructure Security", "governance"),
    ("public/servicesImg/data-application-security.jpg", "Data & Application Security Services", "pipeline"),
    ("public/servicesImg/managed-security-services.jpg", "Managed Security Services", "threat"),
    
    # Managed Services
    ("public/servicesImg/fully-managed-it-services.jpg", "Fully Managed IT Services", "architecture"),
    ("public/servicesImg/co-managed-it-services.jpg", "Co-Managed IT Services", "team"),
    ("public/servicesImg/project-managed-transition.jpg", "Project-Managed Transition Services", "migration"),
    ("public/servicesImg/build-operate-transfer.jpg", "Build-Operate-Transfer (BOT) Services", "loop"),
    
    # Software Development
    ("public/servicesImg/custom-software-development.jpg", "Custom Software & Mobile Apps Development", "architecture"),
    ("public/servicesImg/application-modernization.jpg", "Application Modernization & Enhancement", "migration"),
    ("public/servicesImg/agile-devops.jpg", "Agile Development, DevOps & Automation", "loop"),
    ("public/servicesImg/product-engineering-innovation.jpg", "Product Engineering & Digital Innovation", "ai"),
    
    # Team Augmentation
    ("public/servicesImg/dedicated-developer-teams.jpg", "Dedicated Developer Teams", "team"),
    ("public/servicesImg/ondemand-niche-experts.jpg", "On-Demand Niche Experts", "ai")
]

for filepath, title, icon_type in images_mapping:
    generate_image(filepath, title, icon_type)

print("All dynamic service capabilities images generated successfully!")
