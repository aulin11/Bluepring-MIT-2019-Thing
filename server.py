from flask import Flask
app = Flask(__name__)

import serial
import time
ser = serial.Serial('COM10', 9600, timeout=0)

# while True:
#     try:
#         print(ser.readline())
#         time.sleep(1)
#     except ser.SerialTimeoutException:
#         time.sleep(1)

@app.route("/")
def hello():
    # return "Hello World"
    val = ""
    try:
        val = ser.readline().decode()
        time.sleep(1)
    except ser.SerialTimeoutException:
        val = ""
        time.sleep(1)

    return val

if __name__ == '__main__':
    app.run(debug=True)
