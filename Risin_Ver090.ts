enum onoff {
  ON,
  OFF,
}

enum moter_d {
  両方前,
  両方後,
  Ｌだけ前,
  Ｒだけ前,
  Ｌだけ後,
  Ｒだけ後,
  停止,
}
enum etc {
  AKARUSA,
  JINKAN,
}



//% color="#74ad1d" block="理振ボードVer090"

namespace eureka_blocks {

   //% color="#4741f1" weight=89 blockId=eureka_tl_blue block="青信号 点灯|%mode|" group="2_信号機ユニット"
    export function eureka_tl_blue(mode: onoff) {
    
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P14, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P14, 0);
        }

  }

  //% color="#ffa800" weight=87 blockId=eureka_tl_yellow block="黄信号 点灯|%mode|" group="2_信号機ユニット"
  export function eureka_tl_yellow(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P13, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P13, 0);
        }
  }

  //% color="#ff4940" weight=85 blockId=eureka_tl_red block="赤信号 点灯|%mode|" group="2_信号機ユニット"
  export function eureka_tl_red(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P8, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P8, 0);
        }
  }

  //% color="#1E90FF" weight=83 block="待ち時間（秒）|%second|" group="2_信号機ユニット"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
  }


   //% color="#4741f1" weight=89 blockId=eureka_mame block="豆電球 |%mode|" group="2_動作"
    export function eureka_mame(mode: onoff) {
    
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P14, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P14, 0);
        }

  }

  //% color="#ffa800" weight=87 blockId=eureka_moter block="モーター |%mode|" group="2_動作"
  export function eureka_moter(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P13, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P13, 0);
        }
  }

  //% color="#ff4940" weight=85 blockId=eureka_LED="LED |%mode|" group="2_動作"
  export function eureka_LED(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P8, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P8, 0);
        }
  }
  
  
  
    //% color="#009A00"  weight=80 block="光ｾﾝｻ値 |%limit| より暗い" group="3_電気の利用ユニット"
  //% limit.min=0 limit.max=100
  export function decideLight(limit: number){

        if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit) {
          return true;
        } else {
          return false;
        }
    }


  //% color="#009A00"  weight=81 blockId=eureka_denkitemp block="光ｾﾝｻ値" group="3_電気の利用ユニット"
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

  //% color="#e7e371" weight=75 blockId=eureka_denkiwhite block="白LED |%mode|" group="3_電気の利用ユニット"
  export function eureka_denkiwhite(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
    }

  //% color="#e439b6" weight=58 blockId=eureka_relay block="ﾘﾚｰ(ﾃﾞｼﾞﾀﾙ出力) |%mode|" group="4_ユーレカ装置"
  export function eureka_relay(mode: onoff) {
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
  }

  //% color="#e439b6" weight=56 blockId=eureka_relay_2 block="ﾘﾚｰ(ｱﾅﾛｸﾞ出力) |%limit| |%syuturyoku|" group="4_ユーレカ装置"
  //% syuturyoku.min=0 syuturyoku.max=1023
  export function eureka_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P15, syuturyoku);
  }

}




/*


  //% color="#858585" weight=52 blockId=eureka_m_driver block="ﾓｰﾀｰﾄﾞﾗｲﾊﾞｰD 動き|%mode| |%pin|" group="4_ユーレカ装置"
  export function eureka_m_driver(mode: moter_d, pin: eureka_denki) {

        if (mode == moter_d.両方前) {
          pins.digitalWritePin(DigitalPin.P3, 1);
          pins.digitalWritePin(DigitalPin.P13, 0);
          pins.digitalWritePin(DigitalPin.P14, 1);
        }
        if (mode == moter_d.両方後) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P13, 1);
          pins.digitalWritePin(DigitalPin.P14, 0);
        }
        if (mode == moter_d.Ｌだけ前) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P13, 0);
          pins.digitalWritePin(DigitalPin.P14, 1);
        }
        if (mode == moter_d.Ｒだけ前) {
          pins.digitalWritePin(DigitalPin.P3, 1);
          pins.digitalWritePin(DigitalPin.P13, 0);
          pins.digitalWritePin(DigitalPin.P14, 0);
        }
        if (mode == moter_d.Ｌだけ後) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P13, 1);
          pins.digitalWritePin(DigitalPin.P14, 1);
        }
        if (mode == moter_d.Ｒだけ後) {
          pins.digitalWritePin(DigitalPin.P3, 1);
          pins.digitalWritePin(DigitalPin.P13, 1);
          pins.digitalWritePin(DigitalPin.P14, 0);
        }
        if (mode == moter_d.停止) {
          pins.digitalWritePin(DigitalPin.P3, 0);
          pins.digitalWritePin(DigitalPin.P13, 0);
          pins.digitalWritePin(DigitalPin.P14, 0);
        }

  }

*/


