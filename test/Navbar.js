describe("Navbar", function () {
it("tests Navbar", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html")
  .click("#ui-id-4 > span.ui-menu-icon")
  .click("div.filter li:nth-of-type(1) > a")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
