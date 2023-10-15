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