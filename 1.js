//const b=new Date(2005,6,3)
//console.log(b.getDate()); التاريخ
/*const num=Math.ceil(5.2);
console.log(num);// للاكبر تقريب 
const n = Math.floor(5.5);
console.log(n);//تقريب للاصغل
//قيمة مطلقة 
const m=Math.abs(-7);
console.log(m);
//اصغر رقم 
const nm=[5,9,63,5,1,0];
const mm=Math.min(...nm)
console.log(mm);
//اكبر رقم
const nn=Math.max(...nm);
console.log(nn);
*/
//التحويل تلى float
/*
const str='557.6';
const floatnum=parseFloat(str);
console.log(floatnum);
//تحويل الى int
const stra=858;
const intnum=parseInt(stra);
console.log(intnum+1);
math.trunc(4..16) تحذف الجزء العشري
const num = 3;
const isnt= num.isInteger(num);
console.log(isnt);//التحقق اذا كان hnt او لا 

function sq(num){
    if(isNaN(num))//اذا مررت حرف مش رقم
    return'no'
return num*num;
}
console.log(sq('g'));
//اضافة اس 
const sa=3 ** 2;
console.log(sa);
//او في فنكشن جاهزة 
const saj=Math.pow(3,2);
console.log(saj);
//الجذر التربيعي 
Math.sqrt;
//التحقق من اشرة الرقم 
const namber =-3
console.log(Math.sign(namber));*/
/*
function mm(){
    let mark=[88,55,66,40,90]
for(let m of mark){
if(m>66){
console.log(m+'A');}
else if(m<=40){
console.log(m+'F');}}}
mm();
function sum(fn,sn){
    return fn+sn}
function sub(fn,sn){
 return fn*sn}
function FormData(mess,caal){
return FormData(mess)}
function html(mess) {
    return `<div>${mess}</div>`}
function js(mess){
    return`{"mess":"${mess}"}`}
console.log(FormData('saja asayra',html));
//Array functin
const color=['red','ye','biue']
//for eشach بتسمحلي امر على جميع عناصر المصفوفة وانفذ امر 
color.forEach(function(curr,index,Array){
    console.log(curr);
})
   //دالة some
   const ages=[55,85,58,58]
   const h=ages.some(function(el,ind,arr){
    return el>=18
   })
   console.log(h);
   
   //دالة every
   const age=[58,45,78,96,33]
   const iff=age.every(function(ag,ind,Array){
return ag >=18
   })
   console.log(iff);
   //دالة includes هل تتضمن المصفوفة هذا العنصر
   const color=['erd','greec','blue']
   const co=color.includes('erd')
  console.log(co);
  //ما بدي ياها تبلش من بداية المصفوفة بحدد الرقم الاندكس الي بدي ياه تبلش من عندو
  const co=color.includes('erd',2)
//الدالتبن indexOf ,lastIndexOf همة الدالتين لارجاع قيم المصفوفة الاست بتبلش من الاخر اما اندكس من الاول 
const color=['erd','green','blue','yelwo']
const co=color.lastIndexOf('green')
console.log(co);
//تعطيني -1 اذا كان المدخل مش موجود بالمصفوفة 
//دالة findindex ايجاد اندكس للعنصر الذي يحقق الشرط
 //دالة Find دالة ترجعلي اول قيمة بالمصفوفة ينطبق عليها الشرط
 const num=[11,85,7,96,9]
 const n=num.find(function(el){
    return el%3==0
 })
 console.log(n,3);
//دالة filter بترجعلي مصفوفة جديدة حسب شرطي انو الارقام الزوجية بس وهيك
const nym =[2,3,7,4,9]
const n=nym.filter(function(el){
    return el%2==0
})
console.log(n);
 //concat دالة بتدمج مصفوفتين وبتحطهم بمصفوفة وحدة 
 const col=['s','j','a','k']
 const c=['a','d','l']
 const mew=col.concat(c,'n')//اذا بدي اضيف عناصر بضيفهم من هون
 console.log(mew);
 //دالة slice هذه الدالة بترجعلي مصفوفة جديدة للاشي لي نسخته
 const col=['s','j','a','k']
 const newa=col.slice(1,4)
 console.log(newa);
//دالة splice لاضافة وحذف العناصر في المجموعة
col.splice(1,0,'ss','ff')//هيك يعني بضيف عنصر مش بحذف وبسدبدل
const col=['s','j','a','k']
col.splice(1,2,'ss','ff')
console.log(col);
//دالة join بعمل جميع عناصر المجموعة كنص
const col=['s','j','a','k']
const str=col.join('')
console.log(str);
//دالة sort بترتب العناصر تصاعديا
const col=['s','j','a','k']
const nym =[2,3,7,4,9]
col.sort()
console.log(col);
//دالة reversr
const col=['s','j','a','k']
col.reverse()
console.log(col);
//دالة map اذا بدي اعمل عملية حسابية على مصفوفة وينحفظ في مصفوفة جديدة
const nym =[2,3,7,4,9]
const sq=nym.map(function(el){
    return el*el
})
console.log(sq);
 */
//split دالة تحويل النص الى مصفوفة
//دالة reduce 
//object 
/*
const car={
    //key:value
    name:'camry',
    color:'white',
    cu:0,
    move:function(speed){ 
        //this تشير الى الكائن كامل بس استدعيخا بتنطبع كلشي
      //  console.log( this);
      this.cu=speed
      return`the ${this.name}is moving ${this.cu}`
    },
    stop:function(){
           this.cu=0
        return`the${this.name}st`
    }
}
//بستدعي الكائن باسمه واسم المفتاح الي بدي ياه
console.log(car.color);
  console.log( car.move(100));
  const car2={
    //key:value
    name:'MB',
    color:'blu',
    cu:0,
    move:function(speed){ 
        //this تشير الى الكائن كامل بس استدعيخا بتنطبع كلشي
      //  console.log( this);
      this.cu=speed
      return`the ${this.name}is moving ${this.cu}`
    },
    stop:function(){
        this.cu=0
        return`the${this.name}st` }
}
//بستدعي الكائن باسمه واسم المفتاح الي بدي ياه
console.log(car.color);
  console.log( car.move(100));
  //انشاء ال class
  class car{
//ميثود خاصة بالكلاس
  constructor(name,color,ag){
    console.log('co');
    this.name=name
    this.color=color
    this.ag=ag
  }
  }
  const car1=new car('cam','55','88')
  const car2=new car('co')
  console.log(car1);
  console.log(car2);

//اضافة ميثود للكلاس
class car{
constructor(name,color,ag){
    console.log('co');
    this.name=name
    this.color=color
    this.ag=ag
}
move(){
    this.ag=speed

}
  }

//static member هي اشي مشترك بين كل الكلاس
class car{
    static num=0
constructor(name,color,ag){
    console.log('co');
    this.name=name
    this.color=color
    this.ag=ag
car.innum()
  }
  static innum(){
    car.num++
  }
}
  const car1=new car('cam','55','88')
  //بخلي الاشي برايفت # باني احط الهاش

//بتحط extends بعد الكلاس لي بدي اورث منو 
//apply ,call
//call دالة 
let us={
    fn:"saja ",
  ln:"as"
}
let pr=function(){
    console.log("hello"+this.fn+this.ln);   
}
let newf=pr.bind(us)
newf("20")
//دالة apply نفس ال call بس بنمرر الاشياء على شكل مصفوفة
//دالة bind 

//arrow function طريقة جديدة ومختصرة لانشاء واستدخدام الفنكشن
let add1=(n1,n2)=>{//الشكل الاول الها 
    return n1+n2;
}
let add2=(n1,n2)=>{return n1+n2;}
let add3=(n2)=>n1
let re=(n1,n2)=>{let re =n1+n2}

//iifes استدعاء الدالة مجرد انشائها
(function(n){
    console.log(n);
})("saja")

let obj=
{
    title:"saja",
    function1:function(){
        return console.log("as");
    },
    function2:()=>{
return console.log("vv");
    },
    function3(){
        return console.log("sss");      
    }
}
obj.function1()
obj.function2()
obj.function3()
*/

//==============================================
//القيمة الافتراضية argument
//window.alert("saja")  الرسالة الي بتطلع من الصفحة من فوق
//document.write(<h1>saja</h1>);مش مستخجم
//console مش خاص بال الجافا هو خاص بال web API
//ES6
//console.log(typeof {name:'jo'});//object
//نظرية بتوصف ربط البيانات ببعضها concatenation
/*
let a="10"
let b=20;
let c=true
console.log(+a+b+c);
console.log(10e9);
//ميثود الstring
 //لما احط === بالمقارنة انا قصدي الداتا تايب
 //هاي طريقة if مختصرة
let name ="saja"
name === "saja" ? console.log(3):console.log(10);
let n=name==="saja"?"ms":"m";
console.log(n);
let a=10;
a<10 ? console.log(10):
a>=10 && a<=40 ? console.log("10 to 40"):
a>40?console.log(">40"):
console.log("un");
*/
/*swith 

let day=0;
switch(day)
{
case 0:
console.log("sa");
break;
default://هاي عشان اذا القيمة المدخلة مش معروفة }*/
/*Arrays
console.log(`h${my[0]}`);
console.log(`h${my[1][1]}`);
console.log(my.length);
my[1]="sj";
my.length=2;
console.log(`${my}`);
my.unshift("na");//بتضيفلي العناصر في البداية 
my.push("bel");//بتضيفلي العناصر في النهاية
console.log(`${my}`);
let my=[10,"sa","ss",2000,"h","10",-20,-10];
console.log(my.sort());
console.log(my.reverse());
concat// بتجمعلي مصفوفتين مع بعض */
