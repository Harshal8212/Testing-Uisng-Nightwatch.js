describe("forgot_password", function () {
it("tests forgot_password", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("header li.authorization-link > a")
  .click("#email")
  .setValue("#email", "harshalrane50@gmail.com")
  .click("div.page-wrapper div.secondary span")
  .click("#email_address")
  .setValue("#email_address", "harshalrane50@gmail.com")
  .click("div.page-wrapper div.primary span")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
