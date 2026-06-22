# -*- coding: utf-8 -*-
import re, json, os

SRC = r"C:\Users\herrs\OneDrive\Documents\中文課\四年級\暑假複習"
GROUPS = ["G1_四上L01-05","G2_四上L06-10","G3_四上L11-14","G4_四下L01-05","G5_四下L06-10","G6_四下L11-14"]
LABELS = ["第一週（四上 第1-5課）","第二週（四上 第6-10課）","第三週（四上 第11-14課）",
          "第四週（四下 第1-5課）","第五週（四下 第6-10課）","第六週（四下 第11-14課）"]

def parse_quiz(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    blocks = re.split(r"^## Question \d+\s*$", text, flags=re.MULTILINE)[1:]
    questions = []
    for block in blocks:
        lines = [l for l in block.split("\n")]
        # question text = lines until first option line
        opt_re = re.compile(r"^- \[( |x)\]\s*(.+)$")
        q_lines = []
        options = []
        hint = ""
        i = 0
        while i < len(lines):
            m = opt_re.match(lines[i].strip())
            if m:
                break
            if lines[i].strip():
                q_lines.append(lines[i].strip())
            i += 1
        question = " ".join(q_lines).strip()
        correct_index = -1
        while i < len(lines):
            m = opt_re.match(lines[i].strip())
            if m:
                if m.group(1) == "x":
                    correct_index = len(options)
                options.append(m.group(2).strip())
                i += 1
                continue
            hm = re.match(r"^\*\*Hint:\*\*\s*(.+)$", lines[i].strip())
            if hm:
                hint = hm.group(1).strip()
            i += 1
        if question and options and correct_index >= 0:
            questions.append({"q": question, "options": options, "correct": correct_index, "hint": hint})
    return questions

weeks = []
missing_videos = []
for idx, (g, label) in enumerate(zip(GROUPS, LABELS), start=1):
    folder = os.path.join(SRC, g)
    vocab_quiz = parse_quiz(os.path.join(folder, "生字語詞_測驗.md"))
    idiom_quiz = parse_quiz(os.path.join(folder, "成語_測驗.md"))
    has_vocab_video = os.path.exists(os.path.join(folder, "生字語詞_Video.mp4"))
    has_idiom_video = os.path.exists(os.path.join(folder, "成語_Video.mp4"))
    if not has_vocab_video: missing_videos.append(f"week{idx} vocab")
    if not has_idiom_video: missing_videos.append(f"week{idx} idiom")
    weeks.append({
        "id": idx,
        "label": label,
        "vocab": {"quiz": vocab_quiz, "hasVideo": has_vocab_video},
        "idiom": {"quiz": idiom_quiz, "hasVideo": has_idiom_video},
    })

out_path = r"C:\Users\herrs\Claude\valerie-summer-review\chinese\data.js"
with open(out_path, "w", encoding="utf-8") as f:
    f.write("const CHINESE_WEEKS = ")
    f.write(json.dumps(weeks, ensure_ascii=False, indent=2))
    f.write(";\n")

with open(r"C:\Users\herrs\Claude\valerie-summer-review\_parse_log.txt", "w", encoding="utf-8") as f:
    for w in weeks:
        f.write(f"week{w['id']}: vocab Q={len(w['vocab']['quiz'])} hasVideo={w['vocab']['hasVideo']}  idiom Q={len(w['idiom']['quiz'])} hasVideo={w['idiom']['hasVideo']}\n")
    f.write("missing videos: " + ", ".join(missing_videos) + "\n")
