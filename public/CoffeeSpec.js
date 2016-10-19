describe("Homepage", function () {
    var TestUtils = React.addons.TestUtils;
    var component, element, renderedDOM;
    beforeEach(function(){
        element = React.createElement(TodoApp);
        component = TestUtils.renderIntoDocument(element);
    });
    it("Has a new button", function(){
        let button = TestUtils.findRenderedDOMComponentWithTag(component,"button");
        expect(button).not.toBeUndefined();
        expect(button.innerHTML).toBe("New");
    });
    it("Has a TodoList component", function(){
        expect(function(){
        TestUtils.findRenderedComponentWithType(component,TodoList);
    }).not.toThrow();
});
});
