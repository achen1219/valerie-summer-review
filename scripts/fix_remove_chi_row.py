# -*- coding: utf-8 -*-
from docx import Document

PATH = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習\字音字形總複習.docx"
doc = Document(PATH)
t2 = doc.tables[1]

removed = 0
for row in list(t2.rows[1:]):
    cells = [c.text for c in row.cells]
    if cells[1].strip() == "匙" and "湯匙" in cells[2]:
        row._element.getparent().remove(row._element)
        removed += 1

doc.save(PATH)
print("removed", removed)
