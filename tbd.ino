#include "Keyboard.h"
int Pin3 = 2;
int Pin4 = 7;
int Pin1 = 8;
int Pin2 = 12;
int Pin7 = 10;
int Pin8 = 9;
int Pin5 = 5;
int Pin6 = 6;

void setup() {
    Serial.begin(9600);
pinMode(Pin3, INPUT);
pinMode(Pin4, INPUT);
pinMode(Pin1, INPUT);
pinMode(Pin2, INPUT);
pinMode(Pin7, INPUT);
pinMode(Pin8, INPUT);
pinMode(Pin5, INPUT);
pinMode(Pin6, INPUT);
}

void loop(){

int pin1status = 0;
int pin2status = 0;
int pin3status = 0;
int pin4status = 0;
int pin5status = 0;
int pin6status = 0;
int pin7status = 0;
int pin8status = 0;
int player1 = 0;
int player2 = 0;
pin1status = digitalRead(Pin1);
pin2status = digitalRead(Pin2);
pin3status = digitalRead(Pin3);
pin4status = digitalRead(Pin4);
pin5status = digitalRead(Pin5);
pin6status = digitalRead(Pin6);
pin7status = digitalRead(Pin7);
pin8status = digitalRead(Pin8);
  delay(100);
if (pin1status == HIGH) {
     
    Serial.println("up");
    player1 = 1;
  }
  if (pin2status == HIGH) {
    Serial.println("down");
    Keyboard.write(115);
    player1 = 2;
  }
if (pin3status == HIGH) {
  Keyboard.write(97);
    Serial.println("left");
    player1 = 3;
  }
if (pin4status == HIGH) {
  Keyboard.write(100);
    Serial.println("right");
    player1 = 4;
  }
if (pin5status == HIGH) {
    Serial.println("up");
    Keyboard.write(105);
    player2 = 1;
  }
  if (pin6status == HIGH) {
    Serial.println("down");
    Keyboard.write(107);
    player2 = 2;
  }
if (pin7status == HIGH) {
    Serial.println("left");
    Keyboard.write(106);
    player2 = 3;
  }
if (pin8status == HIGH) {
  Keyboard.write(108);
    Serial.println("right");
    player2 = 4;
  }
}
