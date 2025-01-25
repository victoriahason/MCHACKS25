# backend/app/main.py
from flask import Flask, jsonify, request

app = Flask(__name__)

##create an environmental impact route
@app.route('/environmental-impact', methods=['GET'])
def environmental_impact():
    query = request.args.get('query', '')
    if query:
        # Simulating the environmental impact response
        impact = f"Environmental impact of '{query}' is moderate."
        return jsonify({"impact": impact, "query": query})
    return jsonify({"error": "No query provided"}), 400

if __name__ == '__main__':
    app.run(debug=True)
