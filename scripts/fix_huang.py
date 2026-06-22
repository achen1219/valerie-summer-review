# -*- coding: utf-8 -*-
from docx import Document

PATH = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習\字音字形總複習.docx"
doc = Document(PATH)
t1 = doc.tables[0]

for row in t1.rows[1:]:
    char = row.cells[0].text.strip()
    if char == "晃":
        row.cells[2].text = "ㄏㄨㄤˋ／搖擺、搖動，例：晃動、搖晃\nㄏㄨㄤˇ／⑴明亮，例：亮晃晃　⑵很快閃過，例：一晃眼"

doc.save(PATH)
print("done")
