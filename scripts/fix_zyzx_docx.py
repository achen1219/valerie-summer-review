# -*- coding: utf-8 -*-
"""One-off fix for two malformed 多音字 entries (晃, 宿) in 字音字形總複習.docx,
then re-run parse_zyzx.py to regenerate chinese/zyzx-data.js."""
from docx import Document

PATH = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習\字音字形總複習.docx"
doc = Document(PATH)
t1 = doc.tables[0]  # 字 | 課別 | 讀音與例詞

for row in t1.rows[1:]:
    char = row.cells[0].text.strip()
    if char == "晃":
        lines = row.cells[2].text.split("\n")
        lines[0] = "ㄏㄨㄤˇ／搖擺、搖動，例：晃動、搖晃"
        row.cells[2].text = "\n".join(lines)
    elif char == "宿":
        lines = row.cells[2].text.split("\n")
        fixed = []
        for line in lines:
            if "另音" in line:
                # split "ㄒㄧㄡˇ／星座，例：星宿　另音ㄒㄧㄡˋ／夜晚，例：一宿"
                first, second = line.split("　另音")
                fixed.append(first)
                fixed.append(second)
            else:
                fixed.append(line)
        row.cells[2].text = "\n".join(fixed)

doc.save(PATH)
print("done")
