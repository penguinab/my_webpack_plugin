/* eslint-disable prettier/prettier */
const loaderUtils =require('loader-utils')
const cheerio = require('cheerio');
// https://www.cnblogs.com/oneboi/p/8205809.html  cherrio
// https://blog.csdn.net/aaaaaaliang/article/details/89113897  ast
// https://astexplorer.net/
module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    console.log(1111,options);
    let $=cheerio.load(source, null, false);
    let rootDom=$(":root")
    rootDom.attr('data-ui','ibu')
    return $.html();
// ------------------------------------------------------------------
    // let hadDealFirstTag =false
    // const parserStream = new WritableStream({
    //            onopentag(name, attributes) {
    //         /*
    //          * This fires when a new tag is opened.
    //          *
    //          * If you don't need an aggregated `attributes` object,
    //          * have a look at the `onopentagname` and `onattribute` events.
    //          */
    //         if(!hadDealFirstTag){
    //             hadDealFirstTag=true
    //             attributes['data-ui']='penguin'
    //         }
    //     },
    // });

    // const htmlStream = Readable.from(source);
    // const code=htmlStream.pipe(parserStream)
    // console.log(code.writableHighWaterMark,8888);
    // return code

// ------------------------------------------------------------------
    // // var callback = this.async();
    // let hadDealFirstTag =false
    // let handler =new DomHandler((err,dom)=>{
    //     console.log(dom)
    // })
    // const parser = new Parser(handler)
    // parser.parseComplete(source)



// ------------------------------------------------------------------
//     let hadDealFirstTag =false
//     const parser = new Parser({
//         onprocessinginstruction(name,data){
//             console.log(name,data);
//         },
//         onopentag(name, attributes) {
//             /*
//              * This fires when a new tag is opened.
//              *
//              * If you don't need an aggregated `attributes` object,
//              * have a look at the `onopentagname` and `onattribute` events.
//              */
//             if(!hadDealFirstTag){
//                 hadDealFirstTag=true
//                 attributes['data-ui']='penguin'
//             }
//         },
//         // onclosetag(tagname) {
//         //     /*
//         //      * Fires when a tag is closed.
//         //      *
//         //      * You can rely on this event only firing when you have received an
//         //      * equivalent opening tag before. Closing tags without corresponding
//         //      * opening tags will be ignored.
//         //      */
//         //     if (tagname === "script") {
//         //         console.log("That's it?!");
//         //     }
//         // },
//     });
//     // eslint-disable-next-line no-unused-vars
//     parser.parseComplete(source);
}