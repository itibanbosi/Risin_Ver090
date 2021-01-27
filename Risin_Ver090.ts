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


//% color="#74ad1d" block="理科ボードＡ 1.0"

namespace eureka_blocks {

   //% color="#ff3d03" weight=12 blockId=auto_led_off block="ﾏｲｸﾛﾋﾞｯﾄのLEDを |%Matrix_LED| にする" group="1　調整"
  export function auto_led_off(Matrix_LED:LED_onoff) {
    switch(Matrix_LED){
        case LED_onoff.無効:
        led.enable(false);
        break;
        case LED_onoff.有効:
        led.enable(true);
    }
  }
 
  //% color="#1E90FF" weight=83 block="待ち時間（秒）|%second|" group="1　調整"
  //% second.min=0 second.max=10
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

  //% color="#ff4940" weight=85 blockId=eureka_5VLED block="LED |%mode|" group="2_豆電球・モーター・LED制御"
  export function eureka_5VLED(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P8, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P8, 0);
        }
  }
  
  
  
    //% color="#6b8e23"  weight=81 block="光ｾﾝｻ値 |%limit| より暗い" group="3_電気の利用ユニット"
  //% limit.min=0 limit.max=100
  export function decideLight(limit: number){

        if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit) {
          return true;
        } else {
          return false;
        }
    }


  //% color="#6b8e23"  weight=80 blockId=eureka_denkitemp block="光ｾﾝｻ値" group="3_電気の利用ユニット"
  export function eureka_denkitemp(): number {
        return Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100);
  }

  //% color="#009A00" weight=79 block="人が動いたら" group="3_電気の利用ユニット"
  export function humanDetection(): boolean {
    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P16) == 1) {
          return true;
        } else {
          return false;
        }
  }

  //% color="#009A00"  weight=77 blockId=eureka_denkihuman block="人感ｾﾝｻ値" group="3_電気の利用ユニット"
  export function eureka_denkihuman(): number {
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P16);
  }

  //% color="#32cd32" weight=75 blockId=eureka_denkiwhite block="白LED |%mode|" group="3_電気の利用ユニット"
  export function eureka_denkiwhite(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
    }

  //% color="#e439b6" weight=58 blockId=eureka_relay block="FETﾘﾚｰ(ﾃﾞｼﾞﾀﾙ出力) |%mode|" group="4_外部制御"
  export function eureka_relay(mode: onoff) {
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
  }

  //% color="#e439b6" weight=56 blockId=eureka_relay_2 block="FETﾘﾚｰ(ｱﾅﾛｸﾞ出力) |%limit| |%syuturyoku|" group="4_外部制御"
  //% syuturyoku.min=0 syuturyoku.max=1023
  export function eureka_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P15, syuturyoku);
  }





 //% color="#b22222" weight=52 blockId=eureka_mdriver block="ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ ﾁｬﾝﾈﾙ |%channel| 動き|%mode|" group="4_外部制御"
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

 //% color="#b22222" weight=52 blockId=eureka_ana_mdriver block="ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰ ﾁｬﾝﾈﾙ |%channel_AB| 動き|%mode| 出力|%power|" group="4_外部制御"
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
}
