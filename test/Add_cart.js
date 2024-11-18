describe("Add_cart", function () {
it("tests Add_cart", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("li:nth-of-type(2) div.size div:nth-of-type(2)")
  .click("li:nth-of-type(2) div.color > div > div:nth-of-type(1)")
  .click("li:nth-of-type(2) div.actions-primary span")
  .click("div.minicart-wrapper > a")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
