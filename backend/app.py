from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import bcrypt
import os
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

#This for Frontend access
CORS(app, origins = ["http://localhost:5173"])


db = SQLAlchemy(app)

#Database model for PostGreSQL
class User(db.Model):
    __tablename__ = 'users'#explicity calling for 'users' table in the db
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), unique=True, nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.LargeBinary, nullable=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

with app.app_context():
    db.create_all()

@app.route("/signup", methods = ["POST"])
def signup():
    try: 
        data = request.get_json()
        print(f"Recieved signup data: {data}")#for debugging use
        if not data:
            return jsonify({"error": "No data recieved "}), 400
        
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        if not username or not email or not password:
            return jsonify({"error" : "Missing required fields"}), 400
        

        if User.query.filter_by(email=email).first():
            return jsonify({"error" : "Email already exists"}), 400
        
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        new_user = User(username=username, email=email, password=hashed_password)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Signup Successful", "username" : username}), 201
    
    except Exception as e:
        db.session.rollback()
        print(f"Error during signup: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username_or_email = data.get("username")
    password = data.get("password")

    user = User.query.filter((User.username == username_or_email) |
                                (User.email == username_or_email)).first()

    if user and bcrypt.checkpw(password.encode('utf-8'), user.password):  # Use hashed password checking in production
        return jsonify({"message": "Login Successful"}), 200
    else:
        return jsonify({"error": "Invalid username/email or password"}), 401




if __name__ == "__main__":
    app.run(debug =True)

