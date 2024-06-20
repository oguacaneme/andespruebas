from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from config import Config
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
mysql = MySQL(app)

@app.route('/datatasks', methods=['GET'])
def get_datatasks():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT idtarea, titulo, descripcion, fechaVencimiento, completada FROM andes.task;")
    results = cursor.fetchall() 
    cursor.close()
    return jsonify(results)

@app.route('/datatasks', methods=['POST'])
def add_datatask():
    data = request.json
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO andes.task (idtarea, titulo, descripcion, fechaVencimiento, completada) values (0, %s, %s, %s, false)", (data['titulo']
    , data['descripcion'], data['fechaVencimiento']))
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'Data added successfully'}), 201
    
    
@app.route('/datatasks/update', methods=['POST'])
def update_datatask():
    data = request.json
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE andes.task SET completada  =%s WHERE idtarea = %s  ", (data['completada']
    , data['idtarea']))
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'Data update successfully'}), 201
    
    
    
@app.route('/products', methods=['POST'])
def add_product():
    data = request.json
    
    is_valid, error_message = validate_product(data)
    if not is_valid:
        return jsonify({'error': error_message}), 400
        
    cursor = mysql.connection.cursor()
    cursor.execute(
        "INSERT INTO andes.products (nombre, descripcion, precio) VALUES (%s, %s, %s)",
        (data['nombre'], data['descripcion'], data['precio'])
    )
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'Product added successfully'}), 201

@app.route('/products', methods=['GET'])
def get_products():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM andes.products")
    results = cursor.fetchall()
    cursor.close()
    return jsonify(results)


@app.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM andes.products WHERE idproduct = %s", (id,))
    result = cursor.fetchone()
    cursor.close()
    if result:
        return jsonify(result)
    else:
        return jsonify({'message': 'Product not found'}), 404
        

@app.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    data = request.json
    
    is_valid, error_message = validate_product(data)
    if not is_valid:
       return jsonify({'error': error_message}), 400
        
    cursor = mysql.connection.cursor()
    cursor.execute(
        "UPDATE andes.products SET nombre = %s, descripcion = %s, precio = %s WHERE idproduct = %s",
        (data['nombre'], data['descripcion'], data['precio'], id)
    )
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'Product updated successfully'})



@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    cursor = mysql.connection.cursor()
    cursor.execute("DELETE FROM andes.products WHERE idproduct = %s", (id,))
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'Product deleted successfully'})   
    
    


def validate_product(data):
    if 'nombre' not in data or not isinstance(data['nombre'], str) or len(data['nombre']) > 100:
        return False, "Invalid 'nombre'. Must be a string with a maximum length of 100."
    if 'descripcion' not in data or not isinstance(data['descripcion'], str) or len(data['descripcion']) > 2000:
        return False, "Invalid 'descripcion'. Must be a string with a maximum length of 2000."
    if 'precio' not in data or not isinstance(data['precio'], (int, float)) or data['precio'] <= 0:
        return False, "Invalid 'precio'. Must be a positive number."
    return True, ""
    
    
    
if __name__ == '__main__':
    app.run(debug=True, port=5001)

