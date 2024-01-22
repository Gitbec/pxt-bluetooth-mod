//% color=#0082FB weight=96 icon="\uf294"
namespace bluetooth_senden{

 
     * Prints a numeric value to the serial
     */
    //% help=bluetooth/uart-write-number weight=79
    //% weight=89 blockGap=8 
    //% blockId=bluetooth_uart_writenumber block="Sende|write number %value"
    export function uartWriteNumber(value: number): void {
        bluetooth.uartWriteString(value.toString());
    }
    
   

   

    /**
    * Stops advertising Eddystone end points
    */
    //% blockId=beacon_eddystone_stop_advertising block="bluetooth stoppe advertising"
    //% parts=bluetooth weight=10
    //% help=bluetooth/stop-advertising
    export function stopAdvertising() {
        bluetooth.stopAdvertising();
    }

}
