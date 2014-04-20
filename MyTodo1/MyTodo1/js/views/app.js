AppView = Backbone.View.extend({
    tagName: 'todolist',

    initialize: function () {
        Todos.on('add', this.addOne, this);

    },

    addOne: function (todo) {
        alert('addOne');
    },


});