
// budget controller
var budgetController = (function() {

    // code

})();


// UI controller
var UIController = (function() {

    // code

})();



// global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('it works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {

        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);



