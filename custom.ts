/**
 * Custom blocks
 */
//% weight=0 color=#fc4c02 icon="\u26a1"
//% block="ドローン""
namespace Tello {
    /**
     * 通信グループの設定を行う．受信機と送信機のグループ設定は合わせてね
     * @param 通信グループの番号 value 1-100, eg: 1
     */
    //% block="無線グループの設定を行う %value"
    //% group="設定"
    export function radiosetgroup(value : number): void {
        radio.setGroup(value)
    }

    /**
     * 受信機にドローンが上に上がる命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 上に上がる距離を設定する(cm) value 20-50, eg: 10
     */
    //% block=" %value cmうえに上がる"
    //% group="初心者向け"
    export function up(value : number): void {
        if (flying == 1) {
            radio.sendString("up=" + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが下にさがる命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 下に下る距離を設定する（cm） value 20-50, eg: 10
     */
    //% block=" %value cmしたにさがる"
    //% group="初心者向け"
    export function down(value : number): void {
        if (flying == 1) {
            radio.sendString("down=" + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが前に進む命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 前に進む距離を設定する（cm） value 20-500, eg: 50
     */
    //% block=" %value cmまえにすすむ"
    //% group="初心者向け"
    export function forward(value : number): void {
        if (flying == 1) {
            radio.sendString("forward=" + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが後ろに下がる命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 後ろに下がる距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="%value cmうしろにさがる"
    //% group="初心者向け"
    export function back(value : number): void {
        if (flying == 1) {
            radio.sendString("back " + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが左に進む命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 左にすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="%value cmひだりにすすむ"
    //% group="初心者向け"
    export function left(value : number): void {
        if (flying == 1) {
            radio.sendString("left " + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが右に進む命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 右にすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="%value cmみぎにすすむ"
    //% group="初心者向け"
    export function right(value : number): void {
        if (flying == 1) {
            radio.sendString("right " + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが時計回りを行う命令を送信する．
     * その時，角度を設定し送信を行う．
     * @param value 時計回りを行う角度を設定する(degrees clockwise) value 1-360, eg: 90
     */
    //% block="とけいまわりに %valueど まわる"
    //% group="初心者向け"
    export function rotate_cw(value : number): void {
        if (flying == 1) {
            radio.sendString("cw " + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが反時計回りを行う命令を送信する．
     * その時，角度を設定し送信を行う．
     * @param value 反時計回りを行う角度を設定する(degrees counterclockwise) value 1-360, eg: 90
     */
    //% block="はんとけいまわりに %valueど まわる"
    //% group="初心者向け"
    export function rotate_ccw(value : number): void {
        if (flying == 1) {
            radio.sendString("ccw " + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが飛行を開始する命令を送信する．
     */
    //% block="りりくする"
    //% group="中級者向け"
    export function takeoff(): void {
        radio.sendString("takeoff")
        flying = 1
    }

    /**
     * 受信機にドローンが着地をする命令を送信する．
    */
    //% block="ちゃくりくする"
    //% group="中級者向け"
    export function land(): void {
        radio.sendString("land")
        flying = 0
    }

    /**
     * ドローンの飛行状態の変数を取得する．
    */
    //% block="ドローンがひこうしている"
    //% group="中級者向け"
    export function getflying(): boolean{
        if(flying == 1){
            return true
        }else{
            return false
        }
    }

    /**
     * コントローラー内の変数を確認して飛行を開始するか，着地を行う．
     */
    //% block="りりく/ちゃくりくする"
    //% group="初心者向け"
    export function fly_or_land(): void {
        if (flying == 0) {
            radio.sendString("takeoff")
            flying = 1
        }else if(flying == 1){
            radio.sendString("land")
            flying = 0
        }
    }

    /**
     * ドローンが前フリップします！おしゃれ！
     */
    //% block="前フリップする"
    //% group="フリップ"
    export function forward_flip(): void {
        if (flying == 1) {
            radio.sendString("flip f")
        }
    }

    /**
     * ドローンが後ろフリップします！おしゃれ！
     */
    //% block="後ろフリップする"
    //% group="フリップ"
    export function back_flip(): void {
        if (flying == 1) {
            radio.sendString("flip b")
        }
    }

    /**
     * ドローンが左フリップします！おしゃれ！
     */
    //% block="左フリップする"
    //% group="フリップ"
    export function left_flip(): void {
        if (flying == 1) {
            radio.sendString("flip l")
        }
    }

    /**
     * ドローンが右フリップします！おしゃれ！
     */
    //% block="右フリップする"
    //% group="フリップ"
    export function right_flip(): void {
        if (flying == 1) {
            radio.sendString("flip r")
        }
    }
}

let flying = 0