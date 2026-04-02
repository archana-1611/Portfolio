import zipfile
import xml.etree.ElementTree as ET

def extract(path, out):
    try:
        docx = zipfile.ZipFile(path)
        xml_content = docx.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        paragraphs = []
        for p in tree.findall('.//w:p', namespaces):
            texts = [node.text for node in p.findall('.//w:t', namespaces) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
        with open(out, 'w', encoding='utf-8') as f:
            f.write('\n'.join(paragraphs))
    except Exception as e:
        with open(out, 'w', encoding='utf-8') as f:
            f.write(str(e))

extract(r'c:\Users\senth\OneDrive\Desktop\portfolio\Archana_J_Resume_1Page.docx', r'c:\Users\senth\OneDrive\Desktop\portfolio\resume.txt')
