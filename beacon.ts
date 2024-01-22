//% color=#0082FB weight=96 icon="\uf294"
namespace bluetooth_senden{

    /**
  * Advertise an Eddystone UID
  * @param ns 4 last bytes of the namespace uid
  * @param instance 4 last bytes of the instance uid
  * @param power power level between 0 and 7, eg: 7
  * @param connectable true to keep bluetooth connectable for other services, false otherwise.
  */
    /**
     * Prints a numeric value to the serial
     */
    //% help=bluetooth/uart-write-number weight=79
    //% weight=89 blockGap=8 
    //% blockId=bluetooth_uart_writenumber block="bluetooth uart|write number %value"
    export function uartWriteNumber(value: number): void {
        uartWriteString(value.toString());
    }
    
   

   

    /**
    * Stops advertising Eddystone end points
    */
    //% blockId=beacon_eddystone_stop_advertising block="bluetooth stop advertising"
    //% parts=bluetooth weight=10
    //% help=bluetooth/stop-advertising
    export function stopAdvertising() {
        bluetooth.stopAdvertising();
    }

}
