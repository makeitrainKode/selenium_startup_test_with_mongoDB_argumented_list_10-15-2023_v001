
const unit_run_loop = new Boolean(false);
var selenium_passed = new Boolean(false);


const {Builder, By, Key, until} = require('selenium-webdriver');


(async function test_selenium() {
let driver = await new Builder().forBrowser("chrome").build();
try {

var selenium_test_step1 = await driver.get('http://www.google.com/');
var selenium_test_step2 = await driver.findElement(By.name('q')).sendKeys('', Key.RETURN);
var selenium_test_step3 = await driver.wait(until.titleIs('Google'), 1000);

console.log(selenium_test_step1);
console.log(selenium_test_step2);
console.log(selenium_test_step3);



selenium_test_step1=null;
selenium_test_step2=null;
selenium_test_step3=null;


} 
finally 
{
await driver.quit();
}
})();





const testSeleniumObj = function test_selenium_ObjF()
{
	       var test_seleniumObj = test_selenium();

           return testSeleniumObj.selenium_test_step3.ToString();
};







function test_selenium_unit()
{
	 



	 try
	 {

         if(testSeleniumObj.titleIs = "Google")
         	{

              console.log(console.error);
              

         	}

	 }

	 catch 
	 {
        
        console.log("Error 0x02: Selenium's settings or some runtime error occured.", console.error(testSeleniumObj.toString()))

	 }




}






function test_selenium_run()
{

  const running = new Boolean(false);

  try
    { 
        var finalTestStr = test_selenium_unit();

         if(finalTestStr.titleIs = "Google")
         {
          
           running=true;

           if(running)
           	 { 
           	 	console.log("Valid: Google is valid, Selenium is Running just fine",null );
           	    this.selenium_passed = true;  

           	  }

           	 else
           	 	{

                console.log("Invalid: Error with starting up with Selenium tests.", console.error)

           	 	}
         }



      }

catch {
         console.log(console.error());
       
       }




}


const thrSeleniumObj = new selenium_thread_test();

function selenium_thread_test()
{


while(!unit_run_loop)
{

try
	{

 return new thrSeleniumObj  
 {
 let counter = 0;
    for (let i = 0; i < 99; i++) {
      var counterDisplay = counter++;
      console.log('Current running threads is: ' + counterDisplay.toString + 'and testing selenium', null);
      
    }


 }

  thrSeleniumObj = null;

}


catch{ 
 
     console.log(console.error());

 }

}





}

//#########################################################################################################



//#Notes = 10-13-2023
//#Add Useragent option, along with MongoDB

var fb_usernameCSSID = "inputtext _55r1 _6luy";
var fb_passwordCSSID= "inputtext _55r1 _6luy _9npi";
var fb_submitCSSID = "_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy";

var fb_loginSuccessMarketPlaceIndication_Confirmation_CSSID = "x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt xxk0z11 xvy4d1p";

var fbUsername= ""; var fbPassword= "";

async function test_facebook_login(fbUserName, fbPassword)
{

 var foundfb_usernameCSSID = new Boolean(false);
 var foundfb_passwordCSSID = new Boolean(false);
 var foundfb_SubmitCSSID = new Boolean(false);


 var fbLoginSuccess = new Boolean(false);

 let driver = await new Builder().forBrowser("chrome").build();

try{

if(fbUserName.toString.length && fbPassword.toString.length > 0)
 {

 var fb_login_step_1 = await driver.get('http://www.facebook.com');
 console.log(fb_login_step_1);

 if(fb_login_step_1.titleIs = "Facebook")
 {
     
     foundfb_usernameCSSID = driver.findElement(By.cssSelector(fb_usernameCSSID));
     foundfb_passwordCSSID = driver.findElement(By.cssSelector(fb_passwordCSSID));
     foundfb_SubmitCSSID = driver.findElement(By.cssSelector(fb_submitCSSID));

    }
 else {

     console.log("Facebook CSS Selectors not indicated by Web Server.", console.error);
       }
if(foundfb_usernameCSSID && foundfb_usernameCSSID && foundfb_SubmitCSSID)

    var fb_usernameSendKeys = await driver.findElement(By.cssSelector(fb_usernameCSSID)).sendKeys(fbUserName, Key.RETURN);
    console.log(fb_usernameSendKeys);
    var fb_passwordSendKeys = await driver.findElement(By.cssSelector(fb_passwordCSSID)).senKeys(fbPassword, Key.RETURN);
    console.log(fb_passwordCSSID);
    var fb_SendSubmitData = await driver.findElement(By.cssSelector(fb_submitCSSID)).submit();
    console.log(fb_SendSubmitData);

    if(fb_SendSubmitData.titleIs = "Facebook")

     var fbLoginMarketPlaceConfirmation = await driver.get('https://www.facebook.com/marketplace/?ref=app_tab');
     console.log(fbLoginMarketPlaceConfirmation);

     var fbLoginSuccess = await driver.findElement(By.cssSelector(fb_loginSuccessMarketPlaceIndication_Confirmation_CSSID));
     console.log(fbLoginSuccess);

    if(fbLoginSuccess) 
     
      console.log("Username and password check out, along with marketplace, logged in, saving cookies.");
     
    else
        console.log("Was unable to login and find the marketplace, aborting.")
   


 }




}

catch
   {
     
     console.log(console.error());

   }




}


//----------------------------------------------------------------
var SeleneiumDataCookieContainer = "";
let fbCookieContainerObj = SeleneiumDataCookieContainer.split("; ").find((row) => row.startsWith("sb="));
var fbIsLoggedIn= new Boolean(false);

const fbProtectedCookieContainerObj = function saveFBProtectedCookiesContainerObj() {
  if (fbCookieContainerObj.length = 0) {
    console.log("Cookies are not valid, 0 cookies indicated.", console.error)
    return;
  } else {
    try
    {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 3600000;

    now.setTime(expireTime);
    document.cookie = fbProtectedCookieContainerObj.document.cookie.row.startsWith("sb=") && fbProtectedCookieContainerObj.document.cookie.row("wd=");
    if(document.cookie.length > 0)
    fbIsLoggedIn = true;
    if(fbIsLoggedIn)
    var fbProtectedContainerCookies = document.cookie;
    console.log("Saving cookies.");
    return fbProtectedContainerCookies;
      }
    catch
    {
    console.log("Failure while saving cookies.");
    }
  }
};


//--------------------------------------------------------------

//########################################################################################################





function run()
{

try
{ 

 test_selenium_run();




 }


catch
{


console.log(console.error());

console.log("Exiting") && process.exit();

}



}







run()