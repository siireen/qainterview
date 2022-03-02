const {Builder, By} = require('selenium-webdriver');

let inputIntergerNumber = 5;

(async function factorialtest() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://qainterview.pythonanywhere.com/');

    let textBoxInteger = await driver.findElement(By.id('number'));
    let calculateButton = await driver.findElement(By.id('getFactorial'));

    await textBoxInteger.sendKeys(inputIntergerNumber);
    await calculateButton.click();

    await driver.sleep(100); // wait for the text with the numbers to appear. 
    //await driver.manage().setTimeouts( { implicit: 10000 } );

    let resultText = await driver.findElement(By.id('resultDiv')).getText(); 
    var factorialNumber = resultText.match(/\d+/g, '');

    let realanswer = factorial(inputIntergerNumber);
    
    
    if (realanswer == factorialNumber[1]){
        console.log("They are the same")
    }
    else {
        console.log("They are not the same")
    }
   
    await driver.quit();
})();


function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }