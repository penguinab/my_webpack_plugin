/* eslint-disable no-unused-vars */
//color.js
 
/**
 *@description 生成对应配色映射关系
 *@date 2021-06-10 16:35:03
 */
 const Color = require("color");
 //FIXME:还需要全局搜索变量 看是否有一些mix了的颜色
  
 //Brand Color
 let primaryColor = "#409EFF", //$--color-primary
   successColor = "#67C23A", //$--color-warning
   warningColor = "#E6A23C", //$--color-warning
   dangerColor = "#F56C6C", //$--color-danger
   infoColor = "#909399", //$--color-info
   // Font Color
   textRegularColor = "#606266", //$--color-text-regular
   textPlaceholderColor = "#C0C4CC", //$--color-text-placeholder
   textPrimaryColor = "#303133", //$--color-text-primary
   textSecondaryColor = "#909399", //$--color-text-secondary   //FIXME:#909399 这个色有两个变量匹配上了，需要区分
   // Border Color
   borderColorBaseColor = "#DCDFE6", //$--border-color-base
   borderColorLightColor = "#E4E7ED", //$--border-color-lightColor
   borderColorLighterColor = "#EBEEF5", //$--border-color-lighter
   borderColorExtraLightColor = "#F2F6FC", //$--border-color-extra-light
   // Background Color
   colorWhite = "#FFFFFF", //$--color-white
   colorBlack = "#000000", //$--color-black
   backgroundColorBase = "#F5F7FA"; //$--background-color-base
  
 class GenerateColor {
   constructor() {
     this.colorMap = {};
     this.init();
   }
   init() {
     this.getPrimaryMap();
     this.getSuccessMap();
     this.getWarningMap();
     this.getDangerMap();
     this.getinfoMap();
   }
   createValueObj(majorColor, mixColor, percent, cb) {
     return {
       value: Color(majorColor)
         .mix(Color(mixColor), percent)
         .hex()
         .toLowerCase(),
       callBack: cb || null,
     };
   }
   getPrimaryMap() {
     //primary
     let primaryArr = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
     let primaryMap = primaryArr.reduce(
       (pre, cur, index) => {
         pre[`@primary-${index + 1}`] = this.createValueObj(
           primaryColor,
           colorWhite,
           cur
         );
         return pre;
       },
       {
         "@primary": { value: primaryColor, callBack: null },
       }
     );
     Object.assign(this.colorMap, primaryMap);
   }
   getSuccessMap() {
     let successArr = [0.8, 0.9];
     let successMap = successArr.reduce(
       (pre, cur, index) => {
         pre[`@success-${index + 1}`] = this.createValueObj(
           successColor,
           colorWhite,
           cur
         );
         return pre;
       },
       {
         "@success": { value: successColor, callBack: null },
       }
     );
     Object.assign(this.colorMap, successMap);
   }
   getWarningMap() {
     let warningArr = [0.8, 0.9];
     let warningMap = warningArr.reduce(
       (pre, cur, index) => {
         pre[`@warning-${index + 1}`] = this.createValueObj(
           warningColor,
           colorWhite,
           cur
         );
         return pre;
       },
       {
         "@warning": { value: warningColor, callBack: null },
       }
     );
     Object.assign(this.colorMap, warningMap);
   }
   getDangerMap() {
     let dangerArr = [0.8, 0.9];
     let dangerMap = dangerArr.reduce(
       (pre, cur, index) => {
         pre[`@danger-${index + 1}`] = this.createValueObj(
           dangerColor,
           colorWhite,
           cur
         );
         return pre;
       },
       {
         "@danger": { value: dangerColor, callBack: null },
       }
     );
     Object.assign(this.colorMap, dangerMap);
   }
   getinfoMap() {
     let infoArr = [0.8, 0.9];
     let infoMap = infoArr.reduce(
       (pre, cur, index) => {
         pre[`@info-${index + 1}`] = this.createValueObj(
           infoColor,
           colorWhite,
           cur
         );
         return pre;
       },
       {
         "@info": { value: infoColor, callBack: null },
       }
     );
     Object.assign(this.colorMap, infoMap);
   }
   getAllMap() {
     return this.colorMap;
   }
 }
 const colorMapFactory = () => {
   return new GenerateColor().getAllMap();
 };
 exports.default = colorMapFactory;
  
  
 // https://blog.csdn.net/weixin_42665725/article/details/113413798
 // https://blog.csdn.net/youlinaixu/article/details/83447527?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-14.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-14.control