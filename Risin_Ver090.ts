/* Ver1.4 rika_board*/

enum eureka_channel {
  A,
  B,
}
enum onoff {
  ON,
  OFF,
}

enum moter_d {
  正転,
  逆転,
  停止,
}
enum etc {
  AKARUSA,
  JINKAN,
}

enum LED_onoff {
  無効,
  有効,
}

enum updown{
    以上,
    以下,
}
enum kurasa{
    暗い,
    明るい,
}
enum sonar_avg{
    平均20回,
    平均5回,
    生データ,
}
enum neoLED_color {
    白,
    赤,
    黄,
    緑,
    青,
    だいだい,
    あい,
    すみれ,
    紫,
    黒,
}

let kousei_A=1

let io_neo = neopixel.create(DigitalPin.P9, 3, NeoPixelMode.RGB);

//% color="#74ad1d" weight=89 block="理科ボード 1.4"

namespace eureka_blocks {


 
  //% color="#1E90FF" weight=83 block="待ち時間（秒）|%second|" group="1　時間調整"
  //% second.min=0 second.max=15
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
  }


   //% color="#4741f1" weight=89 blockId=eureka_mame block="豆電球 |%mode|" group="2_豆電球・モーター・LED制御"
    export function eureka_mame(mode: onoff) {
    
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P14, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P14, 0);
        }

  }

  //% color="#ffa500" weight=87 blockId=eureka_moter block="モーター |%mode|" group="2_豆電球・モーター・LED制御"
  export function eureka_moter(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P13, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P13, 0);
        }
  }

  //% color="#dc143c" weight=85 blockId=eureka_5VLED block="LED |%mode|" group="2_豆電球・モーター・LED制御"
  export function eureka_5VLED(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P8, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P8, 0);
        }
  }
  



    //% color="#4741f1" weight=89 blockId=neopixel_blue block="iːo青信号 点灯|%mode|" group="1 iːoネオピクセル"
    export function neopixel_blue_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    //% color="#ffa800" weight=86 blockId=neopixel_yellow block="iːo黄信号 点灯|%mode|" group="1 iːoネオピクセル"
    export function neopixel_yellow_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    //% color="#ff4940" weight=84 blockId=neopixel_red block="iːo赤信号 点灯|%mode|" group="1 iːoネオピクセル"
    export function neopixel_red_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    //% color="#20b2aa" weight=82 blockId=neopixel_select block="ﾌﾙｶﾗｰLED |%neo_color| 色で |%neo_number|個つける" group="1 iːoネオピクセル"
    //% neo_number.min=0 neo_number.max=3
    export function neopixel_select_block(neo_color: neoLED_color, neo_number: number) {
        for (let n = 0; n < 2; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
        switch (neo_color) {
            case neoLED_color.赤:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Red))
                }
                io_neo.show()
                break;
            case neoLED_color.だいだい:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Orange))
                }
                io_neo.show()
                break;
            case neoLED_color.黄:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Yellow))
                }
                io_neo.show()
                break;
            case neoLED_color.緑:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Green))
                }
                io_neo.show()
                break;
            case neoLED_color.青:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Blue))
                }
                io_neo.show()
                break;
            case neoLED_color.あい:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Indigo))
                }
                io_neo.show()
                break;
            case neoLED_color.すみれ:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Violet))
                }
                io_neo.show()
                break;
            case neoLED_color.紫:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Purple))
                }
                io_neo.show()
                break;
            case neoLED_color.白:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.White))
                }
                io_neo.show()
                break;
            case neoLED_color.黒:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
                }
                io_neo.show()
                break;
        }
    }
    //% color="#9400d3" weight=81 blockId=neopixel_reinbow block="にじ色にする" group="1 iːoネオピクセル"
    export function neopixel_rainbow() {
        io_neo.showRainbow(1, 180)
    }




    //% color="#cd853f" weight=80 blockId=neopixel_erace block="ﾌﾙｶﾗｰLEDを全部消す" group="1 iːoネオピクセル"
    export function neopixel_erace_block() {
        for (let n = 0; n < 3; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
    }









  
    //% color="#228b22"  weight=81 block="光ｾﾝｻ値 |%limit| より |%syoudo|" group="3_光ｾﾝｻｰ"
  //% limit.min=0 limit.max=100
  export function decideLight(limit: number,syoudo:kurasa) :boolean {
      switch(syoudo){
        case kurasa.暗い:
            if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit) {
              return true;
            } else {
              return false;
            }
        case kurasa.明るい:
            if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 > limit) {
              return true;
            } else {
              return false;
            }
      }
    }


  //% color="#228b22"  weight=80 blockId=eureka_denkitemp block="光ｾﾝｻ値" group="3_光ｾﾝｻｰ"
  export function eureka_denkitemp(): number {
        return Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100);
  }


  //% color="#228b22"  weight=82 blockId=eureka_denkiLED block="光ｾﾝｻの値を表示する" group="3_光ｾﾝｻｰ"
  export function eureka_denkiLED(){
       basic.showNumber(Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100));
  }





  //% color="#daa520" weight=77 block="人が動いたら" group="4_人感ｾﾝｻｰ"
  export function humanDetection(): boolean {
    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P16) == 1) {
          return true;
        } else {
          return false;
        }
  }

  //% color="#daa520"  weight=75 blockId=eureka_denkihuman block="人感ｾﾝｻ値" group="4_人感ｾﾝｻｰ"
  export function eureka_denkihuman(): number {
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P16);
  }

  //% color="#daa520"  weight=79 blockId=eureka_denkihuman_disp block="人感ｾﾝｻの値を表示する" group="4_人感ｾﾝｻｰ"
  export function eureka_denkihumandisp() {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P16));
  }




  //% color="#a9a9a9" weight=75 blockId=eureka_denkiwhite block="白LED |%mode|" group="5_白LED"
  export function eureka_denkiwhite(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
    }

  //% color="#ff1493"  weight=68 blockId=eureka_temperature1 block="気温" group="6_気象センサ"
  export function eureka_temperature1(): number {
        return  BMP280.temperature();
  }


  //% color="#ff1493"  weight=69 blockId=eureka_temperatureLED block="今の気温を表示する" group="6_気象センサ"
  export function eureka_temperatureLED(){
        basic.showNumber(BMP280.temperature());
  }



  //% color="#ff1493"  weight=66 blockId=eureka_temperature2 block="気温 |%limit| ℃より |%futougou| " group="6_気象センサ"
  //% limit.min=0 limit.max=40
  export function eureka_temperature2(limit: number,futougou:updown): boolean{
    switch(futougou){
        case updown.以上:
             if (
            BMP280.temperature() >= limit)
             {
            return true;
            } else {
            return false;
            }
            break;
          case updown.以下:
             if (
            BMP280.temperature() <= limit)
             {
            return true;
            } else {
            return false;
            }
            break;          
    }
  }
  //% color="#ff69b4"  weight=64 blockId=eureka_pressure block="気圧(hPa)" group="6_気象センサ"
  export function eureka_pressure (): number {
        return  Math.round(BMP280.pressure()/100);
  }

  //% color="#ff69b4"  weight=65 blockId=eureka_pressureLED block="現在の気圧(hPa)を表示する" group="6_気象センサ"
  export function eureka_pressureLED () {
        basic.showNumber(Math.round(BMP280.pressure()/100));
  }

   //% color="#ff3d03" weight=53 blockId=auto_led_off block="ﾏｲｸﾛﾋﾞｯﾄのLEDを |%Matrix_LED| にする" group="7_ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ"
  export function auto_led_off(Matrix_LED:LED_onoff) {
    switch(Matrix_LED){
        case LED_onoff.無効:
        led.enable(false);
        break;
        case LED_onoff.有効:
        led.enable(true);
    }
  }

  //% color="#4169e1" weight=26 blockId=eureka_O2kousei block="酸素センサー校正" group="酸素センサー"
  export function eureka_O2kousei() {
        kousei_A=pins.analogReadPin(AnalogPin.P2);
        
  }
  //% color="#4169e1" weight=26 blockId=eureka_O2LED block="酸素濃度をmicro:bitへ表示" group="酸素センサー"
  export function eureka_O2LED() {
 
        let O2_0=Math.round( pins.analogReadPin(AnalogPin.P2)/kousei_A*20.95* 10) / 10
        if (O2_0 >= 5 && O2_0 <= 25){
        basic.showString(convertToText("" + O2_0 + "% "));
        }
        else {
            basic.showString("ER")
        }
  }

 //% color="#4169e1" weight=26 blockId=eureka_O2serial block="酸素濃度をシリアル出力" group="酸素センサー"
  export function eureka_O2serial() {
    basic.pause(100);

        serial.writeLine(convertToText(Math.round( pins.analogReadPin(AnalogPin.P2)/kousei_A*20.95* 100) / 100));
  }

  //% color="#4169e1"  weight=24 blockId=eureka_O2disp block="酸素濃度" group="酸素センサー"
  export function eureka_O2disp(): number {
        return pins.analogReadPin(AnalogPin.P2)/kousei_A*20.95;
  }





  //% color="#2a2aba" weight=30 blockId=sonar_ping block="超音波きょりｾﾝｻ " group="B Borad[距離センサー]"
  export function ping(): number {
    let  d1=0;
    let  d2=0;


        for ( let i=0 ; i<5 ; i++ ){
            basic.pause(5);
            pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
            pins.digitalWritePin(DigitalPin.P0, 0);
            control.waitMicros(2);
            pins.digitalWritePin(DigitalPin.P0, 1);
            control.waitMicros(10);
            pins.digitalWritePin(DigitalPin.P0, 0);
            // read
            d1 = pins.pulseIn(DigitalPin.P2, PulseValue.High, 500 * 58);
            d2=d2+d1;
            }

            return Math.round(Math.idiv(d2/5, 58)*1.5);

    
  }


 //% color="#2a2aba" weight=29 blockId=sonar_ping_2 block="きょりを表示 |%" group="B Borad[距離センサー]"
  export function sonar_ping_2(){
    basic.showNumber(eureka_blocks.ping())
       }





 //% color="#2a2aba" weight=27 blockId=sonar_ping_3 block="きょりが |%limit| cmより長い" group="B Borad[距離センサー]"
  //% limit.min=5 limit.max=50
  export function sonar_ping_3(limit: number) :boolean{
    let  d1=0;
    let  d2=0;


        for ( let i=0 ; i<20 ; i++ ){
        // send
        basic.pause(5);
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P0, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P0, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P0, 0);
        // read
        d1 = pins.pulseIn(DigitalPin.P2, PulseValue.High, 500 * 58);
        d2= d1+d2;
        }

                if (Math.idiv(d2/20, 58) * 1.5 < limit) {
                return false;
                } else {
                return true;
                }
 
            
    }



  //% color="#2a2aba" weight=28 blockId=sonar_ping_4 block="きょりが |%limit| cmより短い" group="B Borad[距離センサー]"
  //% limit.min=5 limit.max=50
  export function sonar_ping_4(limit: number ) :boolean{
    let  d1=0;
    let  d2=0;


        for ( let i=0 ; i<20 ; i++ ){
        // send
        basic.pause(5);
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P0, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P0, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P0, 0);
        // read
        d1 = pins.pulseIn(DigitalPin.P2, PulseValue.High, 500 * 58);
        d2= d1+d2;
        }

                if (Math.idiv(d2/20, 58) * 1.5 < limit) {
                return true;
                } else {
                return false;
                }
 

        }






 //% color="#8b008b" weight=52 blockId=eureka_mdriver block="ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ ﾁｬﾝﾈﾙ |%channel| 動き|%mode|" group="7_ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ"
  export function eureka_mdriver(channel: eureka_channel , mode: moter_d) {
    led.enable(false);
    switch (channel) {
      case eureka_channel.A:
        if (mode == moter_d.正転) {
          pins.digitalWritePin(DigitalPin.P3, 1);
          pins.digitalWritePin(DigitalPin.P4, 0);
        }
        if (mode == moter_d.逆転) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P4, 1);

        }
        if (mode == moter_d.停止) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P4, 0);
        }
        return
      case eureka_channel.B:
        if (mode == moter_d.正転) {
          pins.digitalWritePin(DigitalPin.P6, 1);
          pins.digitalWritePin(DigitalPin.P7, 0);
        }
        if (mode == moter_d.逆転) {
          pins.digitalWritePin(DigitalPin.P6, 0);
          pins.digitalWritePin(DigitalPin.P7, 1);
        }
        if (mode == moter_d.停止) {
          pins.digitalWritePin(DigitalPin.P6, 0);
          pins.digitalWritePin(DigitalPin.P7, 0);
        }
        return
    }

  }

 //% color="#8b008b" weight=52 blockId=eureka_ana_mdriver block="ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ ﾁｬﾝﾈﾙ |%channel_AB| 動き|%mode| 出力|%power|" group="7_ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ"
  //% power.min=0 power.max=1023
  export function eureka_ana_mdriver(channel_AB: eureka_channel , mode: moter_d ,power:number) {
    led.enable(false);
    switch (channel_AB) {
      case eureka_channel.A:
        if (mode == moter_d.正転) {
          pins.analogWritePin(AnalogPin.P3, power);
          pins.digitalWritePin(DigitalPin.P4, 0);
        }
        if (mode == moter_d.逆転) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.analogWritePin(AnalogPin.P4, power);
        }
        if (mode == moter_d.停止) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P4, 0);
        }
    return     
      case eureka_channel.B:
        if (mode == moter_d.正転) {
          pins.analogWritePin(AnalogPin.P6, power);
          pins.digitalWritePin(DigitalPin.P7, 0);
        }
        if (mode == moter_d.逆転) {
          pins.digitalWritePin(DigitalPin.P6, 0);
          pins.analogWritePin(AnalogPin.P7, power);
        }
        if (mode == moter_d.停止) {
          pins.digitalWritePin(DigitalPin.P6, 0);
          pins.digitalWritePin(DigitalPin.P7, 0);
        }
    return
    }

  }

  //% color="#483d8b" weight=58 blockId=eureka_relay block="FETﾘﾚｰ(ﾃﾞｼﾞﾀﾙ出力) |%mode|" group="8_外部制御ﾘﾚｰ"
  export function eureka_relay(mode: onoff) {
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
  }

  //% color="#483d8b" weight=56 blockId=eureka_relay_2 block="FETﾘﾚｰ(ｱﾅﾛｸﾞ出力) |%limit| |%syuturyoku|" group="8_外部制御ﾘﾚｰ"
  //% syuturyoku.min=0 syuturyoku.max=1023
  export function eureka_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P15, syuturyoku);
  }




}
