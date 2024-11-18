describe("sign_in", function () {
it("tests sign_in", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("header li.authorization-link > a")
  .click("div.page-wrapper div.block-new-customer a")
  .click("#firstname")
  .setValue("#firstname", "harshal")
  .click("#lastname")
  .setValue("#lastname", "rane")
  .click("#email_address")
  .setValue("#email_address", "harshalrane50@gmail.com")
  .click("#password")
  .setValue("#password", "harshal4")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.CONTROL);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyUp(this.Keys.CONTROL);
          })
  .setValue("#password", "H")
  .setValue("#password", "Harshal@123")
  .click("#password-confirmation")
  .setValue("#password-confirmation", "Harshal@")
  .setValue("#password-confirmation", "Harshal@123")
  .click("#maincontent button")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
