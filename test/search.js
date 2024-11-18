describe("search", function () {
it("tests search", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("#search")
  .setValue("#search", "men tshirt")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ENTER);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyUp(this.Keys.ENTER);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
