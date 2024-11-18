describe("sort_by", function () {
it("tests sort_by", function (browser) {
  browser.windowRect({width: 1263, height: 632})
  .navigateTo("https://magento.softwaretestingboard.com/")
  .click("a.home-pants span.action")
  .click("div:nth-of-type(2) > div.toolbar-sorter > select")
  .setValue("div:nth-of-type(2) > div.toolbar-sorter > select", "price")
  .click("div:nth-of-type(2) > div.toolbar-sorter > a")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.ALT);
          })
  .end();
  });
});
