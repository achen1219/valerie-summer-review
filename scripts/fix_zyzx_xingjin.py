# -*- coding: utf-8 -*-
"""Fix 8 形近字 items in 字音字形總複習.docx where a second reading was
squished into one line with "另音" or ";" instead of being its own line."""
from docx import Document

PATH = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習\字音字形總複習.docx"
doc = Document(PATH)
t2 = doc.tables[1]  # 課別 | 字組 | 字／注音／例句

TARGET_LABELS = {"磨／蘑", "其他單字（趙／擔）", "艱／難", "其他補充字（艾／龜）",
                  "傅／傳", "澎／膨", "其他補充字（匙）"}

def split_line(line):
    if "：" not in line:
        return [line]
    char, rest = line.split("：", 1)
    if "另音" in rest:
        first, second = rest.split("　另音", 1)
        return [f"{char}：{first}", f"{char}：{second}"]
    if ";" in rest:
        first, second = rest.split(";", 1)
        return [f"{char}：{first.strip()}", f"{char}：{second.strip()}"]
    return [line]

for row in t2.rows[1:]:
    label = row.cells[1].text.strip()
    if label in TARGET_LABELS:
        lines = row.cells[2].text.split("\n")
        fixed = []
        for line in lines:
            fixed.extend(split_line(line))
        row.cells[2].text = "\n".join(fixed)

doc.save(PATH)
print("done")
