# -*- coding: utf-8 -*-
from docx import Document

PATH = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習\字音字形總複習.docx"
doc = Document(PATH)
t2 = doc.tables[1]

for row in t2.rows[1:]:
    label = row.cells[1].text.strip()
    if "挑" in label and "桃" in label:
        lines = row.cells[2].text.split("\n")
        fixed = []
        for line in lines:
            if line.startswith("挑：") and ";" in line:
                fixed.append("挑：ㄊㄧㄠ／挑選、挑水")
                fixed.append("挑：ㄊㄧㄠˇ／挑戰、挑燈夜讀")
            else:
                fixed.append(line)
        row.cells[2].text = "\n".join(fixed)

doc.save(PATH)
print("done")
