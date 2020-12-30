(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,h=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return n?a.a.createElement(h,c(c({ref:t},b),{},{components:n})):a.a.createElement(h,c({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(111)),o={id:"configure",title:"Configuring Firmware",slug:"/configure"},c={unversionedId:"configure",id:"configure",isDocsHomePage:!1,title:"Configuring Firmware",description:"Understanding nRF52 Modules and how GPIOs are numbered",source:"@site/docs/configuring_firmware.md",slug:"/configure",permalink:"/docs/configure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/configuring_firmware.md",version:"current",sidebar:"someSidebar",previous:{title:"Adding a new Keyboard",permalink:"/docs/add"},next:{title:"Configuring your own keymap",permalink:"/docs/keymaps"}},l=[{value:"Understanding nRF52 Modules and how GPIOs are numbered",id:"understanding-nrf52-modules-and-how-gpios-are-numbered",children:[{value:"Adafruit Feather nRF52832",id:"adafruit-feather-nrf52832",children:[]},{value:"Adafruit Feather nRF52840 Express",id:"adafruit-feather-nrf52840-express",children:[]},{value:"Nordic nRF52840DK (PCA10056)",id:"nordic-nrf52840dk-pca10056",children:[]},{value:"Other nRF52832 and nRF52840 modules",id:"other-nrf52832-and-nrf52840-modules",children:[]}]},{value:"Selecting GPIOs numbers",id:"selecting-gpios-numbers",children:[{value:"Adafruit Feather nRF52840 Express",id:"adafruit-feather-nrf52840-express-1",children:[]},{value:"All other modules (nRF52832 or nRF52840)",id:"all-other-modules-nrf52832-or-nrf52840",children:[]}]},{value:"Configuring your keyboard",id:"configuring-your-keyboard",children:[{value:"hardware_config.h",id:"hardware_configh",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"understanding-nrf52-modules-and-how-gpios-are-numbered"},"Understanding nRF52 Modules and how GPIOs are numbered"),Object(i.b)("h3",{id:"adafruit-feather-nrf52832"},"Adafruit Feather nRF52832"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Adafruit Feather nRF52832")," uses the GPIO numbers in the IDE to call the specific pins.  This can be seen as the purple numbers in the following pinout image:\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/046/248/original/microcontrollers_Feather_NRF52_Pinout_v1.2-1.png?1504885794",alt:"Adafruit Feather nRF52832"}))),Object(i.b)("p",null,"Since there is a direct mapping between the Arduino IDE numbers and the GPIO number, the numbers used while programming are the same as the GPIOs.  ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("strong",{parentName:"strong"},"This makes the Adafruit Feather nRF52832 compatible with most nRF52832 modules."))),Object(i.b)("p",null,"You can find a schematic of the Adafruit Feather nRF52832 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cdn-learn.adafruit.com/assets/assets/000/039/913/original/microcontrollers_BluefruitnRF52Feather_Rev-F.png"}),"here"),"."),Object(i.b)("h3",{id:"adafruit-feather-nrf52840-express"},"Adafruit Feather nRF52840 Express"),Object(i.b)("p",null,"Unlike for the nRF52832 Feather, Adafruit has opted to use the labels on the module itself as the numbers to use when programming the ",Object(i.b)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express"),".  This means that there is no longer a direct representation between what's used while programming and the GPIO Port and Bit on the nRF52840 chip.  ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("strong",{parentName:"strong"},"This makes the Adafruit Feather nRF52840 Express incompatible with other modules."))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/068/578/large1024/circuitpython_Screenshot_2019-01-02_at_12.04.27.png?1546446487",alt:"Adafruit Feather nRF52840 Express"}))),Object(i.b)("p",null,"For more details on the pinout of the Adafruit Feather nRF52840 Express, go to Adafruit's ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/pinouts"}),"documentation page")),Object(i.b)("p",null,"You can find a schematic of the Adafruit Feather nRF52840 Express ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cdn-learn.adafruit.com/assets/assets/000/068/545/original/circuitpython_nRF52840_Schematic_REV-D.png"}),"here"),"."),Object(i.b)("h3",{id:"nordic-nrf52840dk-pca10056"},"Nordic nRF52840DK (PCA10056)"),Object(i.b)("p",null,"Adafruit was very helpful when they included the ",Object(i.b)("strong",{parentName:"p"},"Nordic Semiconductor nRF52840 Development Kit")," in the Adafruit nRF52 Board Support Package. Unlike for the ",Object(i.b)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express"),", the ",Object(i.b)("strong",{parentName:"p"},"PCA10056")," does not remap GPIO and Pin Numbers.  As such, we can use the GPIO number directly when programming.  ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("strong",{parentName:"strong"},"This makes the Nordic nRF52840DK (PCA10056) compatible with most nRF52840 modules."))),Object(i.b)("p",null,"To find how to calculate the GPIO number, refer to the method described in the next section."),Object(i.b)("p",null,"You can find more information on the PCA10056 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-DK"}),"here")),Object(i.b)("h3",{id:"other-nrf52832-and-nrf52840-modules"},"Other nRF52832 and nRF52840 modules"),Object(i.b)("p",null,"This includes the BlueMicro, BlueMicro840, nRFMicro, Nice!Nano.  These modules reuse the ",Object(i.b)("strong",{parentName:"p"},"Adafruit Feather nRF52832")," or ",Object(i.b)("strong",{parentName:"p"},"Nordic nRF52840DK (PCA10056)")," boards in the Adafruit nRF52 Board Support Package.  As described above, the definition of these boards do not remap pins in code."),Object(i.b)("p",null,"To find how to calculate the GPIO number, refer to the method described in the next section."),Object(i.b)("h2",{id:"selecting-gpios-numbers"},"Selecting GPIOs numbers"),Object(i.b)("h3",{id:"adafruit-feather-nrf52840-express-1"},"Adafruit Feather nRF52840 Express"),Object(i.b)("p",null,"Use the Pin number as per what's written on the module itself. See picture in the  ",Object(i.b)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express")," section above."),Object(i.b)("h3",{id:"all-other-modules-nrf52832-or-nrf52840"},"All other modules (nRF52832 or nRF52840)"),Object(i.b)("p",null,"The nRF52832 has 32 GPIOs on 1 port (Port 0) while the nRF52840 has 48 GPIOs on 2 ports (Port 0 and 1).  "),Object(i.b)("p",null,"To be able to address GPIOs on Port 1, we need to use this simple definition to convert port and bit to a single number."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define _PINNUM(port, bit)    ((port)*32 + (bit))\n")),Object(i.b)("p",null,"For ",Object(i.b)("strong",{parentName:"p"},"Port 0"),", the GPIO number will be the same as the Bit number. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"P(0.11) = 0 + 11 = 11")),Object(i.b)("p",null,"For ",Object(i.b)("strong",{parentName:"p"},"Port 1"),", the GPIO number will be the Bit number plus 32. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"P(1.11) = 32 + 11 = 43")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Port"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Bit"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"GPIO Number to use"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0-31"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0-31")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0-15"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"32-47")))),Object(i.b)("h2",{id:"configuring-your-keyboard"},"Configuring your keyboard"),Object(i.b)("h3",{id:"hardware_configh"},"hardware_config.h"),Object(i.b)("h4",{id:"matrix-definition"},"Matrix Definition"),Object(i.b)("p",null,"Most keyboards use a matrix of columns and rows to scan each key.  You will need to refer to the keyboard schematic to identify how many columns and rows your keyboard uses for it's scanning matrix.  The scanning matrix may differ from the keyboard layout.  For example, a 4x12 matrix uses 16 GPIOs and allows for 48 keys to be scanned.  A 8x8 matrix also uses 16 GPIOs but will allow 64 keys to be scanned.  The mapping of each key in the scanning matrix to the keyboard layout is done in the KEYMAP macro definition in keyboard_config.h."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/jpconstantineau/BlueMicro_BLE/develop/docs/images/keyboardmatrix.png",alt:"keyboard matrix"}))),Object(i.b)("p",null,"In the image above, we see that this keyboard has a matrix of 4 rows, with 7 columns.  The direction of the diodes goes from the columns to the rows.  With this information, we can define the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define MATRIX_ROWS 4\n#define MATRIX_COLS 7\n\n#define DIODE_DIRECTION COL2ROW\n")),Object(i.b)("p",null,"Next, we need to identify how each row and column are mapped to the microntroller on board of the nRF52 module you use.  Since most DIY keyboards use the Arduino Pro Micro as its controller, we are using such an example."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/jpconstantineau/BlueMicro_BLE/develop/docs/images/gpiomapping.png",alt:"GPIO Mapping"}))),Object(i.b)("p",null,"With the information from both the keyboard and controller schamatics, we can map each row and column to the GPIO and using the formula shown in the previous section, we can define the configuration needed: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define MATRIX_ROW_PINS {13, 24, 9, 10 }\n#define MATRIX_COL_PINS {26, 29, 2, 45, 3, 28, 43 }\n")),Object(i.b)("h4",{id:"battery-monitoring"},"Battery Monitoring"),Object(i.b)("p",null,"Battery Monitoring is a function that's specific to the controller you use.  Most controllers implement an on-board battery charger and battery monitoring voltage divider and connect this divider to an analog input.  Such a configuration is shown below:"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/jpconstantineau/BlueMicro_BLE/develop/docs/images/batterymonitoring.png",alt:"Battery Monitoring"}))),Object(i.b)("p",null,"From the schematic, we identify that the connection point of the voltage divider is connected to 0.31. This leads to this definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define BATTERY_TYPE BATT_LIPO\n#define VBAT_PIN  31\n")),Object(i.b)("p",null,"If a non-rechargeable CR2032 (3V) powers your keyboard and the battery is directly connected to the nRF52 chip, you still need to define a ",Object(i.b)("inlineCode",{parentName:"p"},"VBATT_PIN"),"  but since the nrf52 chip can measure its own supply voltage, it will not use this configuration. All you need to do is to use this definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define BATTERY_TYPE BATT_CR2032\n")),Object(i.b)("h4",{id:"external-vcc-switching"},"External VCC Switching"),Object(i.b)("p",null,"Some controllers implement switching of external VCC to ensure low power consumption.  Polarity of switching will depend on the hardware implementation.  Refer to the controller documentation and/or schematic to identify if VCC switching is available, which GPIO it is connected to and polarity of the switch."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define VCC_PIN 12\n#define VCC_POLARITY_ON 1\n")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"VCC_PIN")," is left undefined, VCC switching functionality will not be enabled in the firmware."),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"VCC_POLARITY_ON")," is defined with 1. You only need to define it if polarity is reversed. (replace 1 with 0)"),Object(i.b)("p",null,"By default, the firmware will turn on external VCC when booting up and will turn off External VCC when going to sleep.  If you want to force external VCC to be off at bootup, you can add this definition to your ",Object(i.b)("strong",{parentName:"p"},"hardware_config.h")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define VCC_DEFAULT_ON 0\n")),Object(i.b)("h4",{id:"lipo-charger-switching"},"LiPo Charger Switching"),Object(i.b)("p",null,"Some controllers implement turning off the LiPo Charger to allow for a more precise battery level measurement.  Switching polarity will depend on the hardware implementation.  Refer to the controller documentation and/or schematic to identify if charger switching is available, which GPIO it is connected to and polarity to enable charging."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"     #define CHARGER_PIN  5\n     #define CHARGER_POLARITY_ON 0\n")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"CHARGER_PIN")," is left undefined, charger switching functionality will not be enabled in the firmware. By default, the firmware will turn on charger when booting up and will not change it at any time."),Object(i.b)("h4",{id:"backlight-pwm-led-definition"},"Backlight PWM LED Definition"),Object(i.b)("p",null,"Some keyboards have backlit keys using LEDs controlled by a central mosfet.  The brightness of these LEDs can be modulated using Pulse Width Modulation (PWM). When referring to the keyboard and controller schematics above, we see that GPIO 1.06 is connected to the LED Backlight."),Object(i.b)("p",null," ",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/jpconstantineau/BlueMicro_BLE/develop/docs/images/gpiomapping.png",alt:"GPIO Mapping"}))),Object(i.b)("p",null,"This enables setting up the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"    #define BACKLIGHT_LED_PIN 38\n    #define BACKLIGHT_PWM_ON 1 \n    #define DEFAULT_PWM_VALUE 10000  // Reduce max PWM to 10000 out of 63351 (0x7FFF)\n")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"BACKLIGHT_LED_PIN")," is left undefined, LED functionality will not be enabled in the firmware.\n",Object(i.b)("inlineCode",{parentName:"p"},"BACKLIGHT_PWM_ON")," is optional. If ",Object(i.b)("inlineCode",{parentName:"p"},"BACKLIGHT_LED_PIN")," is defined, but you want to turn off LED functionality, you can do so by setting ",Object(i.b)("inlineCode",{parentName:"p"},"BACKLIGHT_PWM_ON")," to 0.\nIf ",Object(i.b)("inlineCode",{parentName:"p"},"DEFAULT_PWM_VALUE")," is left undefined, the default value will be that of maximum PWM value of 63351 (0x7FFF).  This will turn on LEDs on fully."),Object(i.b)("h4",{id:"rgb-led-definition"},"RGB LED Definition"),Object(i.b)("p",null,"Some keyboards have RGB LEDs.  These LEDs are controlled through a single data line. When referring to the keyboard and controller schematics above, we see that GPIO 0.06 is connected to the RGB WS2812 LEDs."),Object(i.b)("p",null," ",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/jpconstantineau/BlueMicro_BLE/develop/docs/images/gpiomapping.png",alt:"GPIO Mapping"}))),Object(i.b)("p",null,"This enables setting up the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"    #define WS2812B_LED_PIN 6\n    #define WS2812B_LED_COUNT 1\n    #define WS2812B_LED_ON 1 \n")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"WS2812B_LED_PIN")," is left undefined, LED functionality will not be enabled in the firmware.\nIf ",Object(i.b)("inlineCode",{parentName:"p"},"WS2812B_LED_ON")," is set to 0, RGB functionality will not be enabled in the firmware. Note that this will not power down VCC power to the RGB LEDs, impacting power consumption of your keyboard.  External VCC to the RGB LEDs is controlled through the ",Object(i.b)("strong",{parentName:"p"},"External VCC Switch")," functionality described above."),Object(i.b)("h4",{id:"oled-definition"},"OLED Definition"),Object(i.b)("p",null,"To Do - Still being implemented."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define OLED_SDA_PIN        25\n#define OLED_SCL_PIN        26\n")),Object(i.b)("h4",{id:"rotary-encoder-definition"},"Rotary Encoder Definition"),Object(i.b)("p",null,"To Do - Still being implemented."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define ENCODERS_COUNT 1\n#define ENCODERS_A_PIN { 26 }\n#define ENCODERS_B_PIN { 30 }\n")))}s.isMDXComponent=!0}}]);