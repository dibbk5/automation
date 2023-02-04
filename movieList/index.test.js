const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await (await driver).get("http://127.0.0.1:5500/index.html");
});

afterAll(async () => {
  await (await driver).quit();
});

test("add a movie", async () => {
  let inputMovie = await driver.findElement(By.name("movie-input"));
  let addButton = await driver.findElement(By.name("add-btn"));

  await inputMovie.sendKeys("Star Wars I");
  await addButton.click();

  await driver.sleep(3000);
});

test("cross off movie", async () => {
  let crossBtn = await driver.findElement(
    By.xpath("/html/body/main/ul/li/span")
  );

  await crossBtn.click();

  await driver.sleep(2000);
});

test("delete a movie", async () => {
  let deleteBtn = await driver.findElement(By.id("StarWarsI"));

  await deleteBtn.click();

  await driver.sleep(3000);
});
