const { WebDriver } = require("selenium-webdriver");
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let searchString = "jope";

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //2.
  //To fetch http://google.com from the browser with our code.
  await driver.get("https://www.weekendshoes.ee/meestele/saapad.html");
  console.log("2. Ok");

  //1.
  //Verify the page title and print it
  let title = await driver.getTitle();
  console.log("Title is:", title);
  console.log("1. Ok");

  //maximize the window
  await driver.manage().window().maximize();

  //wait
  await driver.sleep(1000);

  //3.
  //add to wishlist
  //open product page
  await driver
    .findElement(By.className("product photo product-item-photo"))
    .click();

  //wait
  await driver.sleep(1000);

  //add to wishlist
  await driver
    .findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[1]/a'))
    .click();

  //wait
  await driver.sleep(3000);

  //open wishlist tab
  await driver.findElement(By.xpath('//*[@id="wishlist-link"]')).click();

  //wait
  await driver.sleep(1000);

  //open wishlist
  await driver
    .findElement(
      By.xpath('//*[@id="miniwishlist-content-wrapper"]/div/div/div/button')
    )
    .click();
  console.log("3. Ok");
  //wait
  await driver.sleep(4000);

  //4.
  //open product page from wishlist
  await driver
    .findElement(
      By.xpath("/html/body/div[2]/main/div[2]/div/form/div[1]/ol/li/div/a")
    )
    .click();
  console.log("4. Ok");

  //5.
  //wait
  await driver.sleep(1000);

  //open dropdown and select 38
  await driver.findElement(By.className("selectric")).click();

  //wait
  await driver.sleep(1000);

  //select size from dropdown
  await driver
    .findElement(
      By.xpath(
        '//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[3]/div[3]'
      )
    )
    .click();

  //add item to basket
  await driver.findElement(By.id("product-addtocart-button")).click();
  console.log("5. Ok");
  //wait
  await driver.sleep(2000);

  //6.
  //go to cart
  await driver.get("https://www.weekendshoes.ee/checkout/cart/");
  console.log("6. Ok");

  //wait
  await driver.sleep(3000);

  //7.
  //increase qty +1
  await driver.findElement(By.className("increase-qty")).click();
  console.log("7. Ok");

  //wait
  await driver.sleep(3000);

  //8.
  //remove from basket
  await driver
    .findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a'))
    .click();
  console.log("8. Ok");

  //wait
  await driver.sleep(2000);

  //9.
  //To send a search query by passing the value in searchString.
  await driver.findElement(By.id("search")).sendKeys(searchString, Key.RETURN);
  console.log("9. Ok");

  //wait
  await driver.sleep(2000);

  //10.
  //open dropdown
  await driver.findElement(By.css("#sorter")).click();

  //select value from dropdown
  await driver
    .findElement(By.css('#sorter>option[value="bestsellers"]'))
    .click();
  console.log("10. Ok");

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();
}

example();
