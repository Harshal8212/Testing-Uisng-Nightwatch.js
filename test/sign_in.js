describe("sign_in", function () {
it("tests sign_in", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("header li.authorization-link > a")
  .click("#email")
  .setValue("#email", "harshalrane50@gmail.com")
  .click("div.page-wrapper div.password input")
  .setValue("div.page-wrapper div.password input", "Harshal")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.SHIFT);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyUp(this.Keys.SHIFT);
          })
  .setValue("div.page-wrapper div.password input", "Harshal@123")
  .click("div.page-wrapper div.block-customer-login div.primary span")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
