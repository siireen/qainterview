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

    let resultText = await driver.findElement(By.id('resultDiv')).getText(); 
    var factorialNumber = resultText.match(/\d+/g, '');

    let realanswer = factorial(inputIntergerNumber);
    
    if (realanswer == factorialNumber[1]){
      console.log("The test is successed, and the numbers are the same, so the factorial of " + inputIntergerNumber + " is: " + factorialNumber[1]);
    }
    else {
      console.log("The test failed due to the factorial numbers not being the same");
    }
 
    await driver.quit();
})();


function factorial(intNumber){
    let answer = 1;
    if (intNumber == 0 || intNumber == 1){
      return answer;
    }
    else{
      for(var i = intNumber; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }