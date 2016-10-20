
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
describe("Map", function() {

		var map, places, status_return;
		beforeEach(function(){
           map = new google.maps.Map(document.getElementById('map'), {
             zoom: 3,
             center:  {lat: 37.1, lng: -95.7},
             mapTypeControl: false,
             panControl: false,
             zoomControl: false,
             streetViewControl: false
           });
		   
		   places = new google.maps.places.PlacesService(map);
		   
		   var search = {
             bounds: map.getBounds(),
             types: ['cafe']
           };
		   
		   places.nearbySearch(search, function(results, status) {
		     status_return = status;
		   }
		   });
	   it("has a OK return status"), function(){
	     expect(status_return).toEqual(google.maps.places.PlacesServiceStatus.OK);
	   }
		   
		   

});