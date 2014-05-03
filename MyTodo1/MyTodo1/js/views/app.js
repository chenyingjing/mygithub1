AppView = Backbone.View.extend({
    events: {
        'keypress #todoinput': 'createOnEnter',
    },

    //tagName: 'todolist',
    el: '#todoapp',




    initialize: function () {
        this.input = this.$('#todoinput');
        Todos.on('add', this.addOne, this);

    },

    addOne: function (todo) {
        $('#todolist').append('<li style="list-style-type:none"><input type="checkbox"/>' + todo.get("title") + '</li>');
    },

    createOnEnter: function (e) {
        if (e.which !== ENTER_KEY || !this.input.val().trim()) {
            return;
        }
        //app.Todos.create(this.newAttributes());
        var newInput = this.input.val().trim();
        this.input.val('');
        Todos.create({ title: newInput, completed: false });
        //this.input.val('');
    },
});