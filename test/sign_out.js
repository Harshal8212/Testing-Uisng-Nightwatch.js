describe("sign_out", function () {
it("tests sign_out", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("header li.authorization-link > a")
  .click("#email")
  .setValue("#email", "harshalrane50@gmail.com")
  .click("div.page-wrapper div.password input")
  .setValue("div.page-wrapper div.password input", "Harshal@")
  .setValue("div.page-wrapper div.password input", "Harshal@123")
  .click("div.page-wrapper div.block-customer-login div.primary span")
  .click("div.panel button")
  .click("header li.customer-welcome li.authorization-link > a")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
