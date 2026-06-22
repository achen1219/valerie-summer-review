# -*- coding: utf-8 -*-
"""Fix:
1. 積／績／蹟 should all read ㄐㄧ (no tone mark), per source PDF.
2. Regroup 障／礙／彰／擬: source PDF item 5 = 障＋彰, item 6 = 礙＋擬
   (was wrongly grouped as 障／礙 and 彰／擬)."""
from docx import Document

PATH = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習\字音字形總複習.docx"
doc = Document(PATH)
t2 = doc.tables[1]  # 課別 | 字組 | 字／注音／例詞

for row in t2.rows[1:]:
    label = row.cells[1].text.strip()
    if label == "積／績／蹟":
        row.cells[2].text = "積：ㄐㄧ／堆積、日積月累\n績：ㄐㄧ／成績、豐功偉績\n蹟：ㄐㄧ／奇蹟、名勝古蹟"

# remove the two wrongly-grouped rows
for row in list(t2.rows[1:]):
    label = row.cells[1].text.strip()
    if label in ("障／礙", "其他單字（彰／擬）"):
        row._element.getparent().remove(row._element)

# add the two correctly-grouped rows
r1 = t2.add_row()
r1.cells[0].text = "四上L5"
r1.cells[1].text = "障／彰"
r1.cells[2].text = "障：ㄓㄤˋ／障礙、屏障\n彰：ㄓㄤ／彰顯、相得益彰"

r2 = t2.add_row()
r2.cells[0].text = "四上L5"
r2.cells[1].text = "礙／擬"
r2.cells[2].text = "礙：ㄞˋ／障礙、阻礙\n擬：ㄋㄧˇ／擬定、模擬"

doc.save(PATH)
print("done")
