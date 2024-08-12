import csv
import json

CSV_FILE_PATH = './data/dataset.csv'
JSON_FILE_PATH = './data/dataset.json'
JS_FILE_PATH = './data/dataset.js'

def csv_to_json_js():
    try:
        with open(CSV_FILE_PATH, 'r') as file:
            reader = csv.DictReader(file)
            data = list(reader)
        
        for row in data:
            for key, value in row.items():
                try:
                    row[key] = int(value)
                except ValueError:
                    try:
                        row[key] = float(value)
                    except ValueError:
                        pass
        
        with open(JSON_FILE_PATH, 'w') as file:
            json.dump(data, file, indent=2)
        
        with open(JS_FILE_PATH, 'w') as file:
            file.write(f"export const dataset = ")
            json.dump(data, file, indent=2)
            file.write(";\n")

    except FileNotFoundError:
        print(f"エラー: {CSV_FILE_PATH} が見つかりません。")
    except csv.Error as e:
        print(f"CSVファイルの読み込み中にエラーが発生しました: {e}")
    except json.JSONDecodeError as e:
        print(f"JSONの生成中にエラーが発生しました: {e}")
    except IOError as e:
        print(f"ファイルの書き込み中にエラーが発生しました: {e}")
    except Exception as e:
        print(f"予期せぬエラーが発生しました: {e}")

if __name__ == "__main__":
    csv_to_json_js()