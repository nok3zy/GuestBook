from flask import Flask, request, jsonify
from flask_cors import CORS
from flaskext.mysql import MySQL

app = Flask(__name__)
CORS(app)
mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '1234'
app.config['MYSQL_DATABASE_DB'] = 'guestbook'

mysql.init_app(app)

# @app.route('/')
# def index():
#    print("backend Server on")
#    return jsonify({"conn":True})

@app.route('/guestbook', methods=['GET'])
def getMain():
    cur = mysql.connect().cursor()
    cur.execute('''SELECT * FROM guest''')
    result = [dict((cur.description[i][0], value)
      for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'visits' : result})

@app.route('/guestbook', methods=['POST'])
def postMain():
  try:
    guest_name,content = request.json.values()
    if guest_name and content and request.method == 'POST':
      sqlQuery = "INSERT guest(guest_name,content) VALUES(%s,%s)"
      bindData = (guest_name,content)
      conn = mysql.connect()
      cursor = conn.cursor()
      cursor.execute(sqlQuery, bindData)
      conn.commit()
      respone = jsonify('Employee added successfully!')
      respone.status_code = 200
      return response
  except Exception as e:
    print(e)
  finally:
    cursor.close() 
    conn.close()

   
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)