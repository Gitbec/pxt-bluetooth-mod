//% color=#0082FB weight=96 icon="\uf294"
namespace beacon {

    /**
  * Advertise an Eddystone UID
  * @param ns 4 last bytes of the namespace uid
  * @param instance 4 last bytes of the instance uid
  * @param power power level between 0 and 7, eg: 7
  * @param connectable true to keep bluetooth connectable for other services, false otherwise.
  */
    //% blockId=beacon_eddystone_advertise_uid block="bluetooth mod UID|namespace (bytes 6-9)%ns|instance (bytes 2-6)%instance|with power %power|connectable %connectable"
    //% parts=bluetooth weight=12 blockGap=8
    //% help=bluetooth/advertise-uid blockExternalInputs=1
    export function advertiseUid(ns: number, instance: number, power: number, connectable: boolean) {
        const buf = pins.createBuffer(16);
        buf.setNumber(NumberFormat.Int32BE, 6, ns);
        buf.setNumber(NumberFormat.Int32BE, 12, instance);
        bluetooth.advertiseUidBuffer(buf, power, connectable);
    }

    /**
        * Advertise an Eddystone URL
        * @param url the url to transmit. Must be no longer than the supported eddystone url length, eg: "https://makecode.com"
        * @param power power level between 0 and 7, eg: 7
        * @param connectable true to keep bluetooth connectable for other services, false otherwise.
        */
    //% blockId=beacon_eddystone_advertise_url block="bluetooth advertise url %url|with power %power|connectable %connectable"
    //% parts=bluetooth weight=11 blockGap=8
    //% help=bluetooth/advertise-url blockExternalInputs=1
    export function advertiseUrl(url: string, power: number, connectable: boolean) {
        bluetooth.advertiseUrl(url, power, connectable)
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
